import Email from "../model/email";
import { IEmailData } from "../model/interfaceData";
import { EmailTransporter } from "../services/EmailTransporter";
import { IdGenerator } from "../services/IdGenerator";
import { EmailInputDTO } from "../types/EmailInputDTO";


export default class EmailBusiness {
    private emailData: IEmailData;
    private idGenerator: IdGenerator;
    private emailTransporter: EmailTransporter
  
    constructor(emailDataRepository: IEmailData) {
      this.emailData = emailDataRepository;
      this.idGenerator = new IdGenerator();
      this.emailTransporter = new EmailTransporter()
    }
  
    email = async (input: EmailInputDTO) => {
      //validacao
      const { name, email } = input;
      if (!email || !name ) {
        throw new Error("Invalid fields");
      }
  
      //conferir se o email existe
      const registeredUser = await this.emailData.findEmailbyEmail(email);
      if (registeredUser) {
        throw new Error("E-mail already registered");
      } 
  
      //criar uma id pro usuario
      const id = this.idGenerator.generateId();
            
      //criar o usuario no banco
      const mail = new Email(id, name, email);
      await this.emailData.createEmail(mail);
      
      const emailInfo = await this.emailTransporter.emailTransporter.sendMail({
        from: `${process.env.NODEMAILER_USER}`,
        to: `${email}`,
        subject: "Formulário FeedBack",
        text: `Olá ${name}, segue o link do formulario de feedback.\n\nhttps://www.google.com.br`,
        html: `<p><strong>Olá ${name}, segue o link do formulario de feedback.</strong>
        <br><link>https://www.google.com.br</ink></p>`               
      })
      
      return emailInfo;
    };
}  