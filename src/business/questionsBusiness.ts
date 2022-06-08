import { IQuestionsData } from "../model/interfaceData";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ROLES_TYPE } from "../types/leaguerTypes";
import { QuestionsInputDTO } from "../types/questionsInputDTO";
import Questions from "../model/Questions";
import { updateQuestions } from "../types/questionsTypes";
import QuestionsUp from "../model/QuestionsUpdate";


export class QuestionsBusiness{
  private questionsData: IQuestionsData ;
  private idGenerator: IdGenerator;
  private authenticator: Authenticator;
  
  constructor(questionsDatabase: IQuestionsData){
    this.questionsData = questionsDatabase;
    this.idGenerator = new IdGenerator();
    this.authenticator = new Authenticator();
  }

  createQuestions = async (input: QuestionsInputDTO, token: string)=>{
    
    const {questions, answer, SYSTEM_USER_id} = input;

    if(!questions){
        throw new Error("Fill in all data");
      }

      const checkQuestions = await this.questionsData.findByQuestions(questions);

        if (checkQuestions) {
          throw new Error("Question already exists!");
        }

      const tokenData = this.authenticator.getTokenData(token)

      if (tokenData.role !== ROLES_TYPE.MENTOR && tokenData.role !== ROLES_TYPE.ADMINISTRATOR && tokenData.role!== ROLES_TYPE.MANAGER){
        throw new Error("You need to be a MENTOR, MANAGER or ADMINISTRATOR to register a Leaguer!");
      }

      const id = this.idGenerator.generateId();


      const questionsInput = new Questions( 
        id,
        questions,
        answer,
        SYSTEM_USER_id
      );

        await this.questionsData.insertQuestions(questionsInput)

  }

  deleteQuestions = async (id: string, token: string): Promise<void> => {
    const verifiedToken = this.authenticator.getTokenData(token);


    if (verifiedToken.role !== ROLES_TYPE.MENTOR && verifiedToken.role !== ROLES_TYPE.ADMINISTRATOR && verifiedToken.role!== ROLES_TYPE.MANAGER){
      throw new Error("You need to be a MENTOR, MANAGER or ADMINISTRATOR to register a Leaguer!");
    }

    return await this.questionsData.deleteQuestions(id);
  }

  searchQuestionsById =  async (idQuestions: any): Promise<Questions> =>{

    if(!idQuestions){
      throw new Error("You need to use a valid id")
    }

    const checkLeaguer = await this.questionsData.findQuestionById(idQuestions)
    return checkLeaguer
  }


  searchAllQuestions =  async (token: string): Promise<Questions[]> =>{

      const tokenData = this.authenticator.getTokenData(token)

      if(!tokenData){
        throw new Error("You need to use a valid token")
      }

      const allQuestions = await this.questionsData.findAllQuestions()
      return allQuestions
      }

      updateQuestions = async (input: updateQuestions, id: string, token: string): Promise<void>=>{
    
        const {
          questions, 
          answer, 
          SYSTEM_USER_id,
        } = input;
      
          const tokenData = this.authenticator.getTokenData(token)
    
            if (tokenData.role !== ROLES_TYPE.MENTOR && tokenData.role !== ROLES_TYPE.ADMINISTRATOR){
              throw new Error("You need to be a MENTOR or ADMINISTRATOR to register a Leaguer!");
            }
    
          const question = new QuestionsUp(
            questions, 
            answer, 
            SYSTEM_USER_id,
          );
    
        await this.questionsData.updateQuestion(question, id)

      }

}