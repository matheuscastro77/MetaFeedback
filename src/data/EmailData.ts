import { BaseDatabase } from "./Basedatabase";
import Email from "../model/email";
import { IEmailData } from "../model/interfaceData";

export class EmailData extends BaseDatabase implements IEmailData{
 
  protected TABLE_NAME = "EMAIL"

  createEmail =  async (email: Email): Promise<Email> => {
    try{
      await this.connection(this.TABLE_NAME)
      .insert({
        id: email.id,
        name: email.name,
        email: email.email,               
      })
      return email

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Bank error!")
        }
    }
  }

  findEmailbyEmail = async (email: string): Promise<Email> =>{
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
}
