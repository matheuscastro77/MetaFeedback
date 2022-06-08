import Form from '../model/CreateForms'
import { BaseDatabase } from "./Basedatabase";
import { IFormData} from "../model/interfaceData"
import { answerFormInput } from '../types/formTypes';

export class FormDatabase extends BaseDatabase implements IFormData{
  protected TABLE_NAME = "FORM"

  insertForm =  async (form: Form): Promise<any> => {
    try{
      await this.connection(this.TABLE_NAME).insert({
      id: form.id,
      send_email: form.send_email,
      LEAGUER_id: form.LEAGUER_id,
      project: form.project,
      time: form.time,
      technology: form.technology,
      type_hiring: form.type_hiring, 
      performance: form.performance,
      comment_performance: form.comment_performance, 
      delivery_quality: form.delivery_quality,
      comment_delivery_quality: form.comment_delivery_quality, 
      team_work: form.team_work,
      comment_team_work: form.comment_team_work, 
      commitment: form.commitment,
      comment_commitment: form.comment_commitment, 
      punctual: form.punctual,
      comment_punctual: form.comment_punctual, 
      work_under_pressure: form.work_under_pressure,
      comment_work_under_pressure: form.comment_work_under_pressure, 
      ceremonies: form.ceremonies,
      comment_ceremonies: form.comment_ceremonies, 
      leadership_ability: form.leadership_ability,
      comment_leadership_ability: form.comment_leadership_ability, 
      proactive: form.proactive,
      comment_proactive: form.comment_proactive, 
      skills: form.skills,
      general_considerations: form.general_considerations,
      SYSTEM_USER_id: form.SYSTEM_USER_id,
      hashlink: form.hashlink
    })

    } catch(error: any){
      throw new Error(error.message)
    }
  }

  deleteForm = async (id: string)=>{
    try {
      const deleteForms = await this.connection(this.TABLE_NAME)
      .delete('id')
      .where({ id })
      return deleteForms
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findFormByEmail = async (send_email: string): Promise<Form>=>{
    try {
        const emailForm = await this.connection(this.TABLE_NAME)
        .select('*')
        .where({ send_email })
  
      return emailForm[0] && Form.toFormModel(emailForm[0]) ;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findFormById = async (id: string): Promise<string>=>{
    try {
        const idForm = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ id })

        return idForm[0] && Form.toFormModel(idForm[0]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findAllForm = async ():Promise<Form[]>=>{
    try {
        const result = await this.connection(this.TABLE_NAME)
        .select("*")
      return result.map((form) => Form.toFormModel(form))
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  insertAnswerForm =  async (form: answerFormInput, hashlink:string): Promise<any> => {
      try{
        await this.connection(this.TABLE_NAME)
        .where({hashlink})
        .update({
        performance: form.performance,
        comment_performance: form.comment_performance, 
        delivery_quality: form.delivery_quality,
        comment_delivery_quality: form.comment_delivery_quality, 
        team_work: form.team_work,
        comment_team_work: form.comment_team_work, 
        commitment: form.commitment,
        comment_commitment: form.comment_commitment, 
        punctual: form.punctual,
        comment_punctual: form.comment_punctual, 
        work_under_pressure: form.work_under_pressure,
        comment_work_under_pressure: form.comment_work_under_pressure, 
        ceremonies: form.ceremonies,
        comment_ceremonies: form.comment_ceremonies, 
        leadership_ability: form.leadership_ability,
        comment_leadership_ability: form.comment_leadership_ability, 
        proactive: form.proactive,
        comment_proactive: form.comment_proactive, 
        skills: form.skills, 
        general_considerations: form.general_considerations
      })

      }catch(error: any){
          throw new Error(error.message);
      }
  }

  findAllFormByLeaguer = async (id: string): Promise<any>=>{
    try {
        const allFormByLeaguer = await this.connection.raw(`
        SELECT *  FROM PERFIL_LEAGUER INNER JOIN FORM ON PERFIL_LEAGUER.id = FORM.LEAGUER_id INNER JOIN ANSWER_FORM ON PERFIL_LEAGUER.id = ANSWER_FORM.LEAGUER_ANSWER_id  WHERE LEAGUER_id = '${id}';
        `)
      
    return allFormByLeaguer[0][0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

