import Leaguer from '../model/Leaguer'
import { BaseDatabase } from "./Basedatabase";
import { ILeaguerData } from "../model/interfaceData"
import { updateLeaguer } from '../types/leaguerTypes';


export class LeaguerDatabase extends BaseDatabase implements ILeaguerData{
  protected TABLE_NAME = "PERFIL_LEAGUER"
  protected TABLE_NAME_TEAM = "TEAM"

  insertLeaguer =  async (leaguer: Leaguer): Promise<void> => {
    try{
      await this.connection(this.TABLE_NAME).insert({
        id: leaguer.id,
        name: leaguer.name,
        email: leaguer.email, 
        photo: leaguer.photo,
        team: leaguer.team,
        language: leaguer.language,
        responsible: leaguer.responsible,
        profession: leaguer.profession,
        technology: leaguer.technology, 
        SYSTEM_USER_id: leaguer.SYSTEM_USER_id,
        role: leaguer.role,
        stage: leaguer.stage
      })

    } catch(error: any){
      throw new Error(error.message)
    }
  }


  findLeaguerByEmail = async (email: string): Promise<Leaguer>=>{
    try {
        const emailLeaguer = await this.connection(this.TABLE_NAME)
        .select('*')
        .where({ email })

      return emailLeaguer[0] && Leaguer.toLeaguerModel(emailLeaguer[0]) ;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findLeaguerById = async (id: string): Promise<Leaguer>=>{
    try {
        const leaguerTypes = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ id })

      return leaguerTypes[0] && Leaguer.toLeaguerModel(leaguerTypes[0]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  

  findAllLeaguer = async ():Promise<Leaguer[]>=>{
    try {
        const result = await this.connection(this.TABLE_NAME)
        .select("*")
        .where('date', '>=', '2009-01-01T00:00:00Z')
        .orderBy('date','desc|asc')
      return result.map((leaguer) => Leaguer.toLeaguerModel(leaguer))
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findLeaguerByName = async (name: string): Promise<Leaguer>=>{
    try {
        const nameLeaguer = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ name })
    return nameLeaguer[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  deleteLeaguer = async (id: string)=>{
    try {
      const deleteLeaguer = await this.connection(this.TABLE_NAME)
      .delete('id')
      .where({ id })
      return deleteLeaguer
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  updateLeaguers= async (leaguer: updateLeaguer, id: string ): Promise<any> => {
    try {
      await this.connection(this.TABLE_NAME)
      .where({id})
      .update({
        name: leaguer.name,
        email: leaguer.email, 
        photo: leaguer.photo,
        team: leaguer.team,
        language: leaguer.language,
        responsible: leaguer.responsible,
        profession: leaguer.profession,
        technology: leaguer.technology, 
        SYSTEM_USER_leaguer: leaguer.SYSTEM_USER_id,
        role: leaguer.role,
        stage: leaguer.stage
      })
  } catch (error: any) {
    throw new Error(error.message);
    }
  }
}
