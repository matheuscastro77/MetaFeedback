import { IFinalAnwserUserData, IQuestionsData } from "../model/interfaceData";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ROLES_TYPE } from "../types/leaguerTypes";
import { finalAnwserUserDTO } from "../types/finalAnwserUserDTO";
import FinalAnwserUser from "../model/FinalAnwserUser";
import { LeaguerDatabase } from "../data/leaguerDatabase";
import AnswerForm from "../model/AnswerForms";


export class FinalAnwserUserBusiness{
  private finalAnwserUserData: IFinalAnwserUserData ;
  private idGenerator: IdGenerator;
  private authenticator: Authenticator;
  
  constructor(finalAnwserUserDatabase: IFinalAnwserUserData){
    this.finalAnwserUserData = finalAnwserUserDatabase;
    this.idGenerator = new IdGenerator();
    this.authenticator = new Authenticator();
  }

  createFinalAnwserUser = async (input: finalAnwserUserDTO, token: string)=>{
    
    const {compiled_answer, SYSTEM_USER_id, LEAGUER_ANSWER_id} = input;

      const tokenData = this.authenticator.getTokenData(token)

      if (tokenData.role !== ROLES_TYPE.MENTOR && tokenData.role !== ROLES_TYPE.ADMINISTRATOR && tokenData.role!== ROLES_TYPE.MANAGER){
        throw new Error("You need to be a MENTOR, MANAGER or ADMINISTRATOR to register a Leaguer!");
      }

      const id = this.idGenerator.generateId();

      const inputFinalAnwserUserData = new FinalAnwserUser( 
        id,
        compiled_answer, 
        SYSTEM_USER_id, 
        LEAGUER_ANSWER_id, 
      );

        await this.finalAnwserUserData.insertFinalAnwserUser(inputFinalAnwserUserData)

  }

  searchFinalAnswerId =  async (finalAnswerId: any): Promise<FinalAnwserUser> =>{

    if(!finalAnswerId){
      throw new Error("You need to use a valid id")
    }

    const checkFinalAnswer = await this.finalAnwserUserData.findFinalAnswerUserById(finalAnswerId)
    return checkFinalAnswer
  }


  searchAllFinalAnswer=  async (token: string): Promise<FinalAnwserUser[]> =>{

      const tokenData = this.authenticator.getTokenData(token)

      if(!tokenData){
        throw new Error("You need to use a valid token")
      }

      const finalAnswer = await this.finalAnwserUserData.findAllFinalAnswerUser()
      return finalAnswer
      }

}