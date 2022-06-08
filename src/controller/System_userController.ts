import { Response, Request } from "express";
import System_userBusiness from "../business/System_userBusiness";
import { SystemInputDTO } from "../types/SystemInputDTO";

export default class System_userController {
  constructor(private system_userBusiness: System_userBusiness) {}

  signup = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    const input: SystemInputDTO = {
      name,
      email,
      password,
      role,
    };
    try {
      const token = await this.system_userBusiness.signup(input);

      res.status(201).send({ message: "User registered successfully!", token});
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    }
  };

  login = async (req: Request, res: Response) => {
    const {email, password } = req.body;

    const input: SystemInputDTO = {
      email,
      password
    };
    try {
      const token = await this.system_userBusiness.login(input);
      res.status(200).send({ message: "User logged in successfully", token });
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }else
      res.status(500).send("Erro no login");
    }
  };


  findSystemUserByLeaguer =  async (req: Request, res: Response) =>{
    try{
      const token = req.headers.authorization as string;
    const result = req.params


    const leguers = await this.system_userBusiness. findSystemUserByLeaguer(result.responsible, token);

    res.status(200).send(leguers)
        
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

  searchSystemUser = async(req: Request, res: Response) =>{
    try {
  
      
        const getSystemUser = await this.system_userBusiness.searchSystemUser()

        res.status(200).send({message: "sucess in search", getSystemUser})

    } catch(error){
        if (error instanceof Error) {
            return res.status(400).send(error.message)
        }
        res.status(500).send("Erro no search")
    }    
  }
}
