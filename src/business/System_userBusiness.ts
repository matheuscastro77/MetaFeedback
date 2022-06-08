import { ISystem_userData } from "../model/interfaceData";
import System_user from "../model/system_user";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SystemInputDTO } from "../types/SystemInputDTO";

export default class System_userBusiness {
  private system_userData: ISystem_userData;
  private idGenerator: IdGenerator;
  private hashManager: HashManager;
  private authenticator: Authenticator;

  constructor(system_userDataRepository: ISystem_userData) {
    this.system_userData = system_userDataRepository;
    this.idGenerator = new IdGenerator();
    this.hashManager = new HashManager();
    this.authenticator = new Authenticator();
  }

  signup = async (input: SystemInputDTO) => {
    //validacao
    const { name, email, password, role } = input;
    if (!email || !name || !password || !role) {
      throw new Error("Invalid fields");
    }

    //conferir se o usuario existe
    const registeredUser = await this.system_userData.findSystem_userByEmail(
      email
    );
    if (registeredUser) {
      throw new Error("E-mail already registered");
    } 

    //criar uma id pro usuario
    const id = this.idGenerator.generateId();

    //hashear o password
    const hashedPassword = await this.hashManager.hash(password);

    //criar o usuario no banco
    const user = new System_user(id, name, email, hashedPassword, role);
    await this.system_userData.createSystem_user(user);

    //criar o token
    const token = this.authenticator.generate({ id, role });
    //retornar o token
    return token;
  };

  login = async (input: SystemInputDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new Error(
        "Enter the informatior correctly. Required fields!"
      );
    }
    //conferir se o usuario existe
    const registeredUser = await this.system_userData.findSystem_userByEmail(
      email
    );
    if (!registeredUser) {
      throw new Error("E-mail already registered!");
    }

    const passwordIsCorrect = await this.hashManager.compare(
      password,
      registeredUser.password
    );
    if (!passwordIsCorrect) {
      throw new Error("Incorrect email or password!");
    }

    const token = this.authenticator.generate({
      id: registeredUser.id,
      role: registeredUser.role,
    });
    return token;
  };

  findSystemUserByLeaguer = async (responsible: string, token: string): Promise<any[]> => {

    const tokenData = this.authenticator.getTokenData(token)
    if(!tokenData){
      throw new Error("You need to use a valid token")
    }

    

    const checkResponsible = await this.system_userData.findSystemUserByLeaguer(responsible);
    return checkResponsible

  }

  searchSystemUser = async () =>{
  
  const registeredUser = await this.system_userData.searchSystemUser()

      
  return registeredUser
  }

}
