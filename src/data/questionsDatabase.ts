import { BaseDatabase } from "./Basedatabase";
import { IQuestionsData } from "../model/interfaceData"
import Questions from '../model/Questions';
import { updateQuestions } from "../types/questionsTypes";

export class QuestionsDatabase extends BaseDatabase implements IQuestionsData{
  protected TABLE_NAME = "QUESTIONS"

  insertQuestions =  async (questions: Questions): Promise<void> => {
    try{
      await this.connection(this.TABLE_NAME).insert({
        id: questions.id,
        questions: questions.questions,
        answer: questions.answer,
        SYSTEM_USER_id: questions.SYSTEM_USER_id
      })

    } catch(error: any){
      throw new Error(error.message)
    }
  }

  findByQuestions = async (questions: string): Promise<Questions>=>{
    try {
        const question = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ questions })
        return question[0] && Questions.toQuestionsModel(question[0]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findQuestionById = async (id: string): Promise<Questions>=>{
    try {
        const idQuestions = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ id })

        return idQuestions[0] && Questions.toQuestionsModel(idQuestions[0]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }


  deleteQuestions = async (id: string)=>{
    try {
      const deleteQuestions = await this.connection(this.TABLE_NAME)
      .delete('id')
      .where({ id })
      return deleteQuestions
    } catch (error: any) {
        throw new Error(error.message);
    }
  }

  findAllQuestions = async ():Promise<Questions[]>=>{
    try {
      const result = await this.connection(this.TABLE_NAME)
      .select("*")
    return result.map((question) => Questions.toQuestionsModel(question))
    } catch (error: any) {
      throw new Error(error.message);
    }
  }


  updateQuestion= async (questions: updateQuestions, id: string ): Promise<any> => {
    try {
      await this.connection(this.TABLE_NAME)
      .where({id})
      .update({
        questions: questions.questions,
        answer: questions.answer,
        SYSTEM_USER_id: questions.SYSTEM_USER_id
      })
  } catch (error: any) {
    throw new Error(error.message);
    }
  }
}