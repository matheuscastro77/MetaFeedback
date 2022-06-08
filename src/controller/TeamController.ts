import { Response, Request } from "express";
import TeamBusiness from "../business/teamBusiness";
import { Authenticator } from "../services/Authenticator";
import { TeamInputDTO } from "../types/teamInputDTO";

export default class TeamController {
  constructor(private teamBusiness: TeamBusiness) {}

  signup = async (req: Request, res: Response) => {
    const token = req.headers.authorization

    if(!token) {
      res
        .status(422)
        .send("This endpoint requires a token.")
    }        
    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token as string) 

    if(tokenData.role !== 'ADMINISTRATOR') {
        res.status(401).send('Access for administrators only!')
    }

    const {team, SYSTEM_USER_id } = req.body;

    const input: TeamInputDTO = {team, SYSTEM_USER_id };

    try {       

        const team = await this.teamBusiness.signup(input)


      res.status(201).send({ message: "Team registered successfully!", team});
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    }
  };

  searchTeamById =   async (req: Request, res: Response) =>{
    try{
      const idTeam = req.params.id as string

      const result = await this.teamBusiness.searchTeamId(idTeam)

      res.status(200).send({"leaguer": result})
      
    }catch(error: any){
        switch(error.message){
          case "ID Leaguer not found!":
            res.status(404).send(error.message)
          break 
          case "Some a error!":
            res.status(500).send(error.message)
          default:
            res.status(400).send({message: error.message});
        }
    }
  }

  searchAllTeam =  async (req: Request, res: Response) =>{
    try{
 
      const teams = await this.teamBusiness.searchAllTEam();
    
      res.status(200).send({teams});
      }catch(error: any){
      switch(error.message){
        case "Some a error!":
          res.status(500).send(error.message)
        default:
          res.status(400).send({message: error.message});
      }
    }
  }
}
