import { BaseDatabase } from "./Basedatabase";
import { IFinalAnwserUserData } from "../model/interfaceData"
import FinalAnwserUser from "../model/FinalAnwserUser";


export class FinalAnwserUserDatabase extends BaseDatabase implements IFinalAnwserUserData{
  protected TABLE_NAME = "ANSWER_FORM"

  insertFinalAnwserUser =  async (finalAnwser: FinalAnwserUser): Promise<void> => {
    try{
      await this.connection(this.TABLE_NAME).insert({
        id: finalAnwser.id,
        compiled_answer: finalAnwser.compiled_answer,
        SYSTEM_USER_id: finalAnwser.SYSTEM_USER_id,
        LEAGUER_ANSWER_id: finalAnwser.LEAGUER_ANSWER_id
      })

    } catch(error: any){
      throw new Error(error.message)
    }
  }

  findFinalAnswerUserById = async (id: string): Promise<FinalAnwserUser>=>{
    try {
        const answerId = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ id })

        return answerId[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findAllFinalAnswerUser = async ():Promise<FinalAnwserUser[]>=>{
    try {
      const result = await this.connection(this.TABLE_NAME)
      .select("*")
    return result.map((answers) => FinalAnwserUser.toFinalAnwserUserModel(answers))
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}