import { Request, Response } from "express";
import { LeaguerBusiness } from "../business/leaguerBusiness";
import Leaguer from "../model/Leaguer";
import { LeaguerInputDTO } from "../types/leaguerInputDTO";
import { updateLeaguer } from "../types/leaguerTypes";


export class LeaguerController{
  constructor(
    private leaguerBusiness: LeaguerBusiness){}
  
  createLeaguer = async (req: Request, res: Response): Promise<void> => {


          const input: LeaguerInputDTO = {
            name: req?.body.name,
            email: req?.body.email,
            photo: req?.body.photo,
            team: req?.body.team,
            technology: req?.body.technology,
            language: req?.body.language,
            stage: req?.body.stage,
            responsible: req?.body.responsible,
            profession: req?.body.profession,
            role: req?.body.role,
            SYSTEM_USER_id: req?.body.SYSTEM_USER_id
          }
          try{ 
            const token = req.headers.authorization as string

          const leaguer = await this.leaguerBusiness.createLeaguer(input, token)

          res.status(201).send({ message:'Leaguer create success'});
        } catch(error: any){
            switch(error.message){
              case "Leaguer not found!":
                res.status(404).send(error.message)
              break 
              case "Existing Leaguer!":
                res.status(409).send(error.message)
              break
              case "All data must be filled!":
                res.status(422).send(error.message)
              break
              case "Some a error!":
                res.status(500).send(error.message)
              default:
                res.status(400).send({message: error.message});
            }
        }
    }

    searchLeaguerById =   async (req: Request, res: Response) =>{
      try{
        const idLeaguer = req.params.id as string

        const leaguer = await this.leaguerBusiness.searchLeaguerById(idLeaguer)

        res.status(200).send({"leaguer": leaguer})
        
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

  searchAllLeaguers =  async (req: Request, res: Response) =>{
    try{
      const token = req.headers.authorization as string;
      const leaguer = await this.leaguerBusiness.searchAllLeaguers(token);
    
      res.status(200).send(leaguer);
      }catch(error: any){
      switch(error.message){
        case "Some a error!":
          res.status(500).send(error.message)
        default:
          res.status(400).send({message: error.message});
      }
    }
  }

  deleteLeaguer = async (req: Request, res: Response) =>{
    try{
    const token: string = req.headers.authorization as string;
    const id: string = req.params.id as string;

      await this.leaguerBusiness.deleteLeaguer(id, token);

      res.status(201).send({ message: "Leaguer delete success"});
    }
    catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
    
  updateLeaguers = async (req: Request, res: Response) => {

      const input: updateLeaguer = {
        name: req?.body.name,
        email: req?.body.email,
        photo: req?.body.photo,
        team: req?.body.team,
        technology: req?.body.technology,
        language: req?.body.language,
        stage: req?.body.stage,
        responsible: req?.body.responsible,
        profession: req?.body.profession,
        role: req?.body.role,
      }
      
      try{ 
        const token = req.headers.authorization as string
        const id: string = req.params.id as string;
      

      const leaguer = await this.leaguerBusiness.updateLeaguers(input, id, token)
  
      res.status(201).send({ message:'Leaguer edited success', leaguer});
    } catch(error: any){
        switch(error.message){
          case "Leaguer not found!":
            res.status(404).send(error.message)
          break 
          case "Existing Leaguer!":
            res.status(409).send(error.message)
          break
          case "All data must be filled!":
            res.status(422).send(error.message)
          break
          case "Some a error!":
            res.status(500).send(error.message)
          default:
            res.status(400).send({message: error.message});
        }
      }
    }
  
}