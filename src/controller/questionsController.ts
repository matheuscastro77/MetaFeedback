import { Request, Response } from "express";
import { QuestionsBusiness } from "../business/questionsBusiness";
import { QuestionsInputDTO } from "../types/questionsInputDTO";
import { updateQuestions } from "../types/questionsTypes";


export class QuestionsController{
  constructor(
    private questionsBusiness: QuestionsBusiness){}
  
  createQuestions = async (req: Request, res: Response): Promise<void> => {

      const {questions, answer, SYSTEM_USER_id} = req.body;

          const input: QuestionsInputDTO = {
            questions: questions, 
            answer: answer,
            SYSTEM_USER_id: SYSTEM_USER_id
          }
          try{ 
            const token = req.headers.authorization as string

          const question = await this.questionsBusiness.createQuestions(input, token)

          res.status(201).send({ message:'Question create success', question});
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

    deleteQuestions = async (req: Request, res: Response) =>{
      try{
      const token: string = req.headers.authorization as string;
      const id: string = req.params.id as string;
  
        await this.questionsBusiness.deleteQuestions(id, token);
  
        res.status(201).send({ message: "Question delete success"});
      }
      catch (error: any) {
        res.status(400).send({ error: error.message });
      }
    }

    searchQuestionsById =   async (req: Request, res: Response) =>{
      try{
        const idQuestions = req.params.id as string

        const questions = await this.questionsBusiness.searchQuestionsById(idQuestions)

        res.status(200).send({"leaguer": questions})
        
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
        const question = await this.questionsBusiness.searchAllQuestions(token);
      
        res.status(200).send(question);
        }catch(error: any){
        switch(error.message){
          case "Some a error!":
            res.status(500).send(error.message)
          default:
            res.status(400).send({message: error.message});
        }
      }
    }


    updateQuestions = async (req: Request, res: Response) => {

      const input: updateQuestions = {
        questions: req.body.questions, 
        answer: req?.body.answer, 
        SYSTEM_USER_id: req?.body.SYSTEM_USER_id
      }
      
      try{ 
        const token = req.headers.authorization as string
        const id: string = req.params.id as string;
      
      const question = await this.questionsBusiness.updateQuestions(input, id, token)
  
      res.status(201).send({ message:'Question edited success', question});
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