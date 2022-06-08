export default class Team {
    constructor(
    private _id: string, 
    private _team: string, 
    private _SYSTEM_USER_id: string | undefined
    )  {}
    public get id(): string {
        return this._id
      }
      public set id(value: string) {
        this._id = value
      }      
      public get team(): string {
        return this._team
      }
      public set team(value: string) {
        this._team = value
      }
      public get SYSTEM_USER_id(): string | undefined {
        return this._SYSTEM_USER_id
      }
      public set SYSTEM_USER_id(value: string | undefined) {
        this._SYSTEM_USER_id = value
      }   
      
      static toTeamModel(data: any): Team {
        return new Team(
          data.id,
          data.team,
          data.SYSTEM_USER_id
          );
  }

}