import { ILeaguerData } from "../model/interfaceData";
import { LeaguerInputDTO } from "../types/leaguerInputDTO";
import Leaguer from "../model/Leaguer";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ROLES_TYPE, updateLeaguer } from "../types/leaguerTypes";
import LeaguerUpdate from "../model/LeaguerUpdate";



export class LeaguerBusiness{
  private leaguerData: ILeaguerData ;
  private idGenerator: IdGenerator;
  private authenticator: Authenticator;
  
  constructor(leaguerDatabase: ILeaguerData){
    this.leaguerData = leaguerDatabase;
    this.idGenerator = new IdGenerator();
    this.authenticator = new Authenticator();
  }

  createLeaguer = async (input: LeaguerInputDTO, token: string)=>{
    const {
      name, 
      photo, 
      team, 
      email,
      technology, 
      language, 
      responsible,
      profession,
      role,
      stage,
      SYSTEM_USER_id,
    } = input;

    if(!name || 
      !team || 
      !email || 
      !technology || 
      !language || 
      !responsible ||
      !profession
      ){
      throw new Error("Fill in all data");
      }

      if (!email || email.indexOf("@") === -1) {
        throw new Error("Email invalid!");
      }

      const checkEmail = await this.leaguerData.findLeaguerByEmail(email);

        if (checkEmail) {
          throw new Error("Email already exists!");
      }

      const tokenData = this.authenticator.getTokenData(token)

        if (tokenData.role !== ROLES_TYPE.MENTOR && tokenData.role !== ROLES_TYPE.ADMINISTRATOR){
          throw new Error("You need to be a MENTOR or ADMINISTRATOR to register a Leaguer!");
        }

        const id = this.idGenerator.generateId();

      const leaguer = new Leaguer(
        id,
        name,
        email, 
        photo,
        team,
        language,
        responsible,
        profession,
        technology, 
        SYSTEM_USER_id,
        role,
        stage,
      );

      

        await this.leaguerData.insertLeaguer(leaguer)

  }


  searchLeaguerById =  async (idleaguer: any): Promise<Leaguer> =>{

    if(!idleaguer){
      throw new Error("You need to use a valid id")
    }

    const checkLeaguer = await this.leaguerData.findLeaguerById(idleaguer)
    return checkLeaguer
  }

  searchAllLeaguers =  async (token: string): Promise<Leaguer[]> =>{

    const tokenData = this.authenticator.getTokenData(token)

    if(!tokenData){
      throw new Error("You need to use a valid token")
    }

    const allLeaguers = await this.leaguerData.findAllLeaguer()
    return allLeaguers
  }

  deleteLeaguer = async (id: string, token: string): Promise<void> => {
    const verifiedToken = this.authenticator.getTokenData(token);

    if(verifiedToken.role !== ROLES_TYPE.MENTOR && verifiedToken.role !== ROLES_TYPE.ADMINISTRATOR){
      throw new Error("You need to be a MENTOR to delete a Leaguer!");
    }

    return await this.leaguerData.deleteLeaguer(id);
  }

  updateLeaguers = async (input: updateLeaguer, id: string, token: string): Promise<void>=>{
    
    const {
      name, 
      photo, 
      team, 
      email,
      technology, 
      language, 
      responsible,
      profession,
      role,
      stage
    } = input;

  
      const tokenData = this.authenticator.getTokenData(token)

        if (tokenData.role !== ROLES_TYPE.MENTOR && tokenData.role !== ROLES_TYPE.ADMINISTRATOR){
          throw new Error("You need to be a MENTOR or ADMINISTRATOR to register a Leaguer!");
        }

      const leaguer = new LeaguerUpdate(
        name,
        email, 
        photo,
        team,
        language,
        responsible,
        profession,
        technology,
        role,
        stage
      );

    await this.leaguerData.updateLeaguers(leaguer, id)

  }

}