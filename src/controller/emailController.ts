import { Response, Request } from "express";
import EmailBusiness from "../business/emailBusiness";
import { Authenticator } from "../services/Authenticator";
import { EmailInputDTO } from "../types/EmailInputDTO";

export default class EmailController {
  constructor(private emailBusiness: EmailBusiness) {}

  email = async (req: Request, res: Response) => {
    const token = req.headers.authorization

        if(!token) {
          res
            .status(422)
            .send("Esse endpoint exige um token.")
        }        
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token as string) 

        if(tokenData.role !== 'ADMINISTRATOR') {
            res.status(401).send('Acesso somente para administradores!')
        }

    const { name, email } = req.body;

    const input: EmailInputDTO = {name, email};

    try {
      const mail = await this.emailBusiness.email(input);

      res.status(201).send({ message: "Email registered successfully!", mail});
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    }
  };
}
