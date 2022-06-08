import Email from "./email"
import { updateLeaguer } from "../types/leaguerTypes"
import { updateQuestions } from "../types/questionsTypes"
import Form from "./CreateForms"
import Leaguer from "./Leaguer"
import Questions from "./Questions"
import System_user from "./system_user"
import AnswerForm from "./AnswerForms"
import FinalAnwserUser from "./FinalAnwserUser"
import Team from "./Team"
import { answerFormInput } from "../types/formTypes"


export interface ILeaguerData{
  insertLeaguer(leaguer: Leaguer): Promise<void>
  findLeaguerByEmail(email: string): Promise<Leaguer>
  findLeaguerById(id: string): Promise<Leaguer>
  findLeaguerByName(name: string): Promise<Leaguer>
  findAllLeaguer(): Promise<Leaguer[]>
  deleteLeaguer(id: string): Promise<any>
  updateLeaguers(leaguer: updateLeaguer, id: string ): Promise<any>
}

export interface IFormData{
  insertForm(form: Form): Promise<any>
  deleteForm(id: string): Promise<any> 
  findFormById(id: string): Promise<string>
  findAllForm():Promise<Form[]>
  insertAnswerForm(form: answerFormInput, hashlink:string): Promise<any>
  findAllFormByLeaguer(LEAGUER_ANSWER_id: string): Promise<any>
  findFormByEmail(email: string): Promise<Form>
}

export interface ISystem_userData{
  createSystem_user(system: System_user): Promise<System_user>
  findSystem_userByEmail(email: string):Promise<System_user>
  findSystemUserByLeaguer(id: string):Promise<any[]>
  searchSystemUser():Promise<System_user[]>
}

export interface IQuestionsData{
  insertQuestions(questions: Questions): Promise<void>
  findByQuestions(questions: string): Promise<Questions>
  deleteQuestions(id: string): Promise<any>
  findQuestionById(id: string): Promise<Questions>
  findAllQuestions(): Promise<Questions[]>
  updateQuestion(questions: updateQuestions, id: string ): Promise<any>
  }

export interface IEmailData{
  createEmail(email: Email): Promise<Email>
  findEmailbyEmail(email: string): Promise<Email>
}


export interface IFinalAnwserUserData{
  insertFinalAnwserUser(finalAnwser: FinalAnwserUser): Promise<void>
  findFinalAnswerUserById(id: string): Promise<FinalAnwserUser>
  findAllFinalAnswerUser():Promise<FinalAnwserUser[]>

}

export interface ITeamData{
  createTeam(team: Team): Promise<void>
  findTeamByTeam (team: string): Promise<Team>
  searchTeamId(id: string): Promise<Team>
  searchAllTeam(): Promise<Team[]> 
}
