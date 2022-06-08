import { ITeamData } from "../model/interfaceData";
import Team from "../model/Team";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { TeamInputDTO } from "../types/teamInputDTO";

export default class TeamBusiness {
  private teamData: ITeamData;
  private idGenerator: IdGenerator;
  private authenticator: Authenticator;
  
  constructor(system_userDataRepository: ITeamData) {
    this.teamData = system_userDataRepository;
    this.idGenerator = new IdGenerator();
    this.authenticator = new Authenticator();    
  }

  signup = async (input: TeamInputDTO) => {
    //validacao
    const {team, SYSTEM_USER_id} = input;

    if (!team || !SYSTEM_USER_id) {
      throw new Error("Invalid fields");
    }
    
    //conferir se o usuario existe
    const registeredTeam = await this.teamData.findTeamByTeam(team);
    if (registeredTeam) {
      throw new Error("Team already registered");
    } 

    //criar uma id pro usuario
    const id = this.idGenerator.generateId();
    
    //criar o usuario no banco
    const create = new Team(
        id, 
        team,          
        SYSTEM_USER_id
    );
    await this.teamData.createTeam(create);
    
    return create;
  };

  searchTeamId = async (idTeam: any): Promise<Team> =>{
    if(!idTeam){
      throw new Error("You need to use a valid id")
    }
      const registeredTeam = await this.teamData.searchTeamId(idTeam)
      
      return registeredTeam
  }

  searchAllTEam =  async (): Promise<Team[]> =>{

    const allTeam = await this.teamData.searchAllTeam()
    return allTeam
    }
  }
