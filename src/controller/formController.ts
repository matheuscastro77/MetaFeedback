import { Request, Response } from "express";
import { FormBusiness } from "../business/formBusiness";
import { answerFormInputDTO } from "../types/answerInputDTO";
import { formInputDTO } from "../types/formInputDTO";
import { AuthenticationForm } from "../types/formTypes";

export class FormController{
  constructor(
    private formBusiness: FormBusiness){}
  
  createForm = async (req: Request, res: Response): Promise<void> => {

    const input: formInputDTO  = {
      send_email: req.body.send_email,
      LEAGUER_id: req?.body.LEAGUER_id,
      project: req?.body.project,
      time: req.body?.time,
      technology: req?.body.technology,
      type_hiring: req?.body.type_hiring, 
      performance: req?.body.performance,
      comment_performance: req?.body.comment_performance, 
      delivery_quality: req?.body.delivery_quality,
      comment_delivery_quality: req?.body.comment_delivery_quality, 
      team_work: req?.body.team_work,
      comment_team_work: req?.body.comment_team_work, 
      commitment: req?.body.commitment,
      comment_commitment: req?.body.comment_commitment, 
      punctual: req?.body.punctual,
      comment_punctual: req?.body.comment_punctual, 
      work_under_pressure: req?.body.work_under_pressure,
      comment_work_under_pressure: req?.body.comment_work_under_pressure, 
      ceremonies: req?.body.ceremonies,
      comment_ceremonies: req?.body.comment_ceremonies, 
      leadership_ability: req?.body.leadership_ability,
      comment_leadership_ability: req?.body.comment_leadership_ability, 
      proactive: req?.body.proactive,
      comment_proactive: req?.body.comment_proactive, 
      skills: req?.body.skills, 
      general_considerations: req?.body.general_considerations, 
      SYSTEM_USER_id: req?.body.SYSTEM_USER_id
    } 

          try{ 
            const token = req.headers.authorization as string
        

          const form = await this.formBusiness.createForm(input, token)

          res.status(201).send({form});
        } catch(error: any){
            switch(error.message){
              case "Form not found!":
                res.status(404).send(error.message)
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

    searchFormById =   async (req: Request, res: Response) =>{
      try{
        const token = req.headers.authorization as string
        const idForm = req.params.id as string

        const form = await this.formBusiness.searchFormById(idForm, token)

        res.status(200).send({"leaguer": form})
        
      }catch(error: any){
          switch(error.message){
            case "ID Form not found!":
              res.status(404).send(error.message)
            break 
            case "Some a error!":
              res.status(500).send(error.message)
            default:
              res.status(400).send({message: error.message});
          }
      }
    }

    searchLeaguerFormById =   async (req: Request, res: Response) =>{
      try{
        const token = req.headers.authorization as string
        const idLeaguerForm = req.params.id as string

        const formLeaguer = await this.formBusiness.searchLeaguerFormById(idLeaguerForm, token)

        res.status(200).send({"leaguer": formLeaguer})
        
      }catch(error: any){
          switch(error.message){
            case "ID Form not found!":
              res.status(404).send(error.message)
            break 
            case "Some a error!":
              res.status(500).send(error.message)
            default:
              res.status(400).send({message: error.message});
          }
      }
    }

    searchAllForm =  async (req: Request, res: Response) =>{
    try{
      const token = req.headers.authorization as string;
      const form = await this.formBusiness.searchAllForm(token);
    
      res.status(200).send({form});
    }catch(error: any){
      switch(error.message){
        case "Some a error!":
          res.status(500).send(error.message)
        default:
          res.status(400).send({message: error.message});
      }
    }
  }

  deleteForm = async (req: Request, res: Response) =>{
    try{
    const token: string = req.headers.authorization as string;
    const id: string = req.params.id as string;

      await this.formBusiness.deleteForm(id, token);

      res.status(201).send({ message: "Form delete success"});
    }
    catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  authenticatorEmailForm = async (req: Request, res: Response) => {
    const {send_email} = req.body;

    const inputAuthorization: AuthenticationForm = {
      send_email
    };
    try {

      const token = await this.formBusiness.authenticatorEmailForm(inputAuthorization);
      
      res.status(200).send({ message: "You are authorization to respond to this feedback", token });
    
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }else
      res.status(500).send("Erro no authorization");
    }
  };


  insertAnswerForm = async (req: Request, res: Response) => {

    const input: answerFormInputDTO = {
      performance: req?.body.performance,
      comment_performance: req?.body.comment_performance, 
      delivery_quality: req?.body.delivery_quality,
      comment_delivery_quality: req?.body.comment_delivery_quality, 
      team_work: req?.body.team_work,
      comment_team_work: req?.body.comment_team_work, 
      commitment: req?.body.commitment,
      comment_commitment: req?.body.comment_commitment, 
      punctual: req?.body.punctual,
      comment_punctual: req?.body.comment_punctual, 
      work_under_pressure: req?.body.work_under_pressure,
      comment_work_under_pressure: req?.body.comment_work_under_pressure, 
      ceremonies: req?.body.ceremonies,
      comment_ceremonies: req?.body.comment_ceremonies, 
      leadership_ability: req?.body.leadership_ability,
      comment_leadership_ability: req?.body.comment_leadership_ability, 
      proactive: req?.body.proactive,
      comment_proactive: req?.body.comment_proactive, 
      skills: req?.body.skills,
      general_considerations: req?.body.general_considerations 
    }
    
    try{ 
      const token = req.headers.authorization as string
      const hash = req.params.hashlink as string;
    
    const answerForm = await this.formBusiness.insertAnswerForm(input, hash, token)

    res.status(201).send({ message:'Form submitting successfully',answerForm });
  } catch(error: any){
      switch(error.message){
        case "Form not found!":
          res.status(404).send(error.message)
        break 
        case "Existing Form!":
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