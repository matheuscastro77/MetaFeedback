import { BaseDatabase } from "./Basedatabase";
import { ISystem_userData } from "../model/interfaceData"
import System_user from '../model/system_user';

export class System_userData extends BaseDatabase implements ISystem_userData{
  protected TABLE_NAME = "SYSTEM_USER"
  protected TABLE_LEAGUER = "PERFIL_LEAGUER"

  createSystem_user =  async (system: System_user): Promise<System_user> => {
    try{
      await this.connection(this.TABLE_NAME)
      .insert({
        id: system.id,
        name: system.name,
        email: system.email,
        password: system.password,
        role: system.role
      })
      return system

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Bank error!")
        }
    }
  }

  findSystem_userByEmail = async (email: string): Promise<System_user> =>{
    try {
        const queryResult = await this.connection(this.TABLE_NAME)
        .select()
        .where({ email })

        return queryResult[0];

    } catch (error) {
      if (error instanceof Error) {
          throw new Error(error.message)
      } else {
          throw new Error("Bank error!")
      }
    }
  }

  findSystemUserByLeaguer = async (responsible: string): Promise<any[]> =>{
    try{
      const responsibles = await this.connection(this.TABLE_LEAGUER)
        .select("*")
        .where({responsible})
        return responsibles;

    }catch (error: any) {
        throw new Error(error.message);
    }
  }

  searchSystemUser = async (): Promise<System_user[]>=>{
    try {
        const systemUser = await this.connection(this.TABLE_NAME)
        .select("*")
      return systemUser
    } catch (error: any) {
      throw new Error(error.message);
    }
  } 

}