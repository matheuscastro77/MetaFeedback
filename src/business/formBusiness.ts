import { IFormData} from "../model/interfaceData";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ROLES_TYPE } from "../types/leaguerTypes";
import { formInputDTO } from "../types/formInputDTO";
import Form from "../model/CreateForms";
import AnswerForm from "../model/AnswerForms";
import { HashManager } from "../services/HashManager";
import { AuthenticatorForm } from "../services/AuthencticatorForm";
import { LeaguerDatabase } from "../data/leaguerDatabase";
import { answerFormInput, AuthenticationForm } from "../types/formTypes";


export class FormBusiness{
  private formData: IFormData ;
  private idGenerator: IdGenerator;
  private authenticator: Authenticator;
  private hashManager: HashManager;
  private authenticatorForm: AuthenticatorForm;
 
  
  constructor(formDatabase: IFormData){
    this.formData = formDatabase;
    this.idGenerator = new IdGenerator();
    this.authenticator = new Authenticator();
    this.hashManager = new HashManager();
    this.authenticatorForm = new AuthenticatorForm();
  }


  createForm = async (input: formInputDTO, token: string)=>{
    const {
      send_email,
      LEAGUER_id,
      project,
      time,
      technology,
      type_hiring, 
      performance,
      comment_performance, 
      delivery_quality,
      comment_delivery_quality, 
      team_work,
      comment_team_work, 
      commitment,
      comment_commitment, 
      punctual,
      comment_punctual, 
      work_under_pressure,
      comment_work_under_pressure, 
      ceremonies,
      comment_ceremonies, 
      leadership_ability,
      comment_leadership_ability, 
      proactive,
      comment_proactive, 
      skills,
      general_considerations,
      SYSTEM_USER_id,
      hashlink
    } = input;

    if(
      !project ||
      !LEAGUER_id ||
      !send_email ||
      !time ||
      !type_hiring || 
      !technology
    
      ){
      throw new Error("Fill in all data");
      }

      const leaguerData = new LeaguerDatabase();

      const checkIdLeaguer = await leaguerData.findLeaguerById(LEAGUER_id,);
      if (!checkIdLeaguer) {
          throw new Error("Id not exists!");
      }

      const tokenData = this.authenticator.getTokenData(token)
        if (tokenData.role !== ROLES_TYPE.MENTOR && tokenData.role !== ROLES_TYPE.ADMINISTRATOR && tokenData.role !== ROLES_TYPE.MANAGER){
          throw new Error("You need to be a LEAGUER to register a Leaguer!");
        }

        const id = this.idGenerator.generateId();

        const hashedId = await this.hashManager.hash(id);


      const form = new Form( 
        id,
        send_email,
        LEAGUER_id,
        project,
        time,
        technology,
        type_hiring, 
        performance,
        comment_performance, 
        delivery_quality,
        comment_delivery_quality, 
        team_work,
        comment_team_work, 
        commitment,
        comment_commitment, 
        punctual,
        comment_punctual, 
        work_under_pressure,
        comment_work_under_pressure, 
        ceremonies,
        comment_ceremonies, 
        leadership_ability,
        comment_leadership_ability, 
        proactive,
        comment_proactive, 
        skills,
        general_considerations, 
        SYSTEM_USER_id,
        hashedId
      );

      await this.formData.insertForm(form)

      return form
  }


  searchLeaguerFormById =  async (idLeaguer: any, token:string): Promise<string> =>{
    const tokenData = this.authenticator.getTokenData(token)

    if(!tokenData){
      throw new Error("You need to use a valid token")
    }

    if(!idLeaguer){
      throw new Error("You need to use a valid id")
    }

    const checkLeaguer = await this.formData.findAllFormByLeaguer(idLeaguer)
    return checkLeaguer
  }



  searchAllForm =  async (token: string): Promise<Form[]> =>{

    const tokenData = this.authenticator.getTokenData(token)

    if(!tokenData){
      throw new Error("You need to use a valid token")
    }

    const allLeaguers = await this.formData.findAllForm()
    return allLeaguers
  }

  deleteForm = async (id: string, token: string): Promise<void> => {
    const verifiedToken = this.authenticator.getTokenData(token);

    if(verifiedToken.role !== ROLES_TYPE.MENTOR && verifiedToken.role !== ROLES_TYPE.ADMINISTRATOR){
      throw new Error("You need to be a MENTOR to delete a Leaguer!");
    }

    return await this.formData.deleteForm(id);
  }


  authenticatorEmailForm = async (inputAuthorization: AuthenticationForm) => {
    const { send_email } = inputAuthorization;

    if (!send_email) {
      throw new Error(
        "Enter the informatior correctly. Required fields!"
      );
    }

    const registeredEmail = await this.formData.findFormByEmail(send_email);
    if (!registeredEmail) {
      throw new Error("E-mail already registered!");
    }

    const token = this.authenticatorForm.generate({hashlink: registeredEmail.hashlink})

    return token;
  };

  insertAnswerForm = async (input: answerFormInput, hashlink: string, token: string): Promise<Form>=>{
    
    if(!hashlink){
      throw new Error("You need to use a valid link")
    }
      const {
        performance,
        comment_performance,
        delivery_quality,
        comment_delivery_quality,
        team_work,
        comment_team_work,
        commitment,
        comment_commitment,
        punctual,
        comment_punctual,
        work_under_pressure,
        comment_work_under_pressure,
        ceremonies,
        comment_ceremonies,
        leadership_ability,
        comment_leadership_ability,
        proactive,
        comment_proactive,
        skills,
        general_considerations
      } = input;

      const tokenDataForm = this.authenticatorForm.getTokenData(token)

      if(!tokenDataForm && !hashlink){
        throw new Error("You need to use a valid token/link")
      }

      console.log(tokenDataForm) 
      console.log(hashlink)



        const answerForm = new AnswerForm(
        performance,
        comment_performance,
        delivery_quality,
        comment_delivery_quality,
        team_work,
        comment_team_work,
        commitment,
        comment_commitment,
        punctual,
        comment_punctual,
        work_under_pressure,
        comment_work_under_pressure,
        ceremonies,
        comment_ceremonies,
        leadership_ability,
        comment_leadership_ability,
        proactive,
        comment_proactive,
        skills,
        general_considerations
      );

    const createhash = await this.formData. insertAnswerForm(answerForm, hashlink)

      return createhash
  }




  searchFormById =  async (idForm: any, token: string): Promise<string> =>{

    const tokenData = this.authenticator.getTokenData(token)

    if(!tokenData){
      throw new Error("You need to use a valid token")
    }

    if(!idForm){
      throw new Error("You need to use a valid id")
    }

    const checkLeaguer = await this.formData.findFormById(idForm)
    return checkLeaguer
  }
}
