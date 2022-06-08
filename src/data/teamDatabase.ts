import { BaseDatabase } from "./Basedatabase";
import { ITeamData } from "../model/interfaceData"
import Team from "../model/Team";

export class TeamData extends BaseDatabase implements ITeamData{
  protected TABLE_NAME = "TEAM"

  createTeam =  async (teams: Team): Promise<void> => {
    try{
      await this.connection(this.TABLE_NAME).insert({
        id: teams.id,
        team: teams.team, 
        SYSTEM_USER_id: teams.SYSTEM_USER_id,
    })

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Bank error!")
        }
    }
  } 
  
  findTeamByTeam = async (team: string): Promise<Team> =>{
    try {
        const queryResult = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ team })

        return queryResult[0] && Team.toTeamModel(queryResult[0]);

    } catch (error) {
      if (error instanceof Error) {
          throw new Error(error.message)
      } else {
          throw new Error("Bank error!")
      }
    }
  }

  searchTeamId = async (id: string): Promise<Team> => {
    try {
        const teamId = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ id })        
        return teamId[0] && Team.toTeamModel(teamId[0]);

    } catch (error: any) {
      throw new Error(error.message);
    }
  } 

  searchAllTeam = async (): Promise<Team[]> => {
    try {
        const result = await this.connection(this.TABLE_NAME)
        .select("*")
        return result
    } catch (error: any) {
      throw new Error(error.message);
    }
  } 

}