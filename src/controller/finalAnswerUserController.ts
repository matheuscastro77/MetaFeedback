import { Request, Response } from "express";
import { FinalAnwserUserBusiness } from "../business/finalAnwserBusiness";
import { finalAnwserUserDTO } from "../types/finalAnwserUserDTO";



export class FinalAnwserUserController{
  constructor(
    private finalAnswerUserBusiness: FinalAnwserUserBusiness){}
  
    createFinalAnwserUser = async (req: Request, res: Response): Promise<void> => {

      const {compiled_answer, SYSTEM_USER_id, LEAGUER_ANSWER_id} = req.body;

          const input: finalAnwserUserDTO = {
            compiled_answer: compiled_answer, 
            LEAGUER_ANSWER_id: LEAGUER_ANSWER_id,
            SYSTEM_USER_id: SYSTEM_USER_id
          }
          try{ 
          const token = req.headers.authorization as string

          const finalAnwserUser = await this.finalAnswerUserBusiness.createFinalAnwserUser(input, token)

          res.status(201).send({ message:'An create success', finalAnwserUser});
        } catch(error: any){
            switch(error.message){
              case "Question not found!":
                res.status(404).send(error.message)
              break 
              case "Existing Question!":
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

    searchFinalAnswerById =   async (req: Request, res: Response) =>{
      try{

        const finalAnswerFormById = req.params.id as string

        const finalAnswerForm = await this.finalAnswerUserBusiness.searchFinalAnswerId(finalAnswerFormById)

        res.status(200).send({"finalAnswerForm": finalAnswerForm})
        
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

    searchAllFinalAnswer =   async (req: Request, res: Response) =>{
      try{
        const token = req.headers.authorization as string;

        const finalAllAnswer = await this.finalAnswerUserBusiness.searchAllFinalAnswer(token)

        res.status(200).send(finalAllAnswer)
        
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
    
  }