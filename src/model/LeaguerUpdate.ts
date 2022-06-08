import { ROLES_STAGE, ROLES_TYPE} from "../types/leaguerTypes"

export default class LeaguerUpdate{
  constructor(
    private _name: string | undefined,
    private _email: string | undefined, 
    private _photo: string | undefined,
    private _team: string | undefined,
    private _language: string | undefined,
    private _responsible: string | undefined,
    private _profession: string | undefined,
    private _technology: string | undefined,
    private _role: ROLES_TYPE | undefined,
    private _stage: ROLES_STAGE | undefined
  ) {}

  public get name(): string | undefined {
    return this._name
  }
  public set name(value: string | undefined) {
    this._name = value
  }


  public get email(): string | undefined{
    return this._email
  }
  public set email(value: string | undefined) {
    this._email = value
  }


  public get technology(): string | undefined {
    return this._technology
  }
  public set technology(value: string | undefined) {
    this._technology = value
  }


  public get stage(): ROLES_STAGE | undefined{
    return this._stage
  }

  public set stage(value: ROLES_STAGE | undefined) {
    this._stage = value
  }


  public get photo(): string | undefined{
      return this._photo
    }
  public set photo(value: string | undefined){
      this._photo = value
  }


  public get team(): string | undefined{
        return this._team
      }
  public set team(value: string | undefined) {
        this._team = value
  }


  public get language(): string | undefined {
    return this._language
  }
  public set language(value: string | undefined) {
    this._language = value
  }


  public get role(): ROLES_TYPE | undefined{
    return this._role
  }
  public set role(value: ROLES_TYPE | undefined) {
    this._role = value
  }


  public get responsible(): string | undefined {
    return this._responsible
  }
  public set responsible(value: string | undefined) {
    this._responsible = value
  }


  public get profession(): string | undefined{
    return this._profession
  }
  public set profession(value: string | undefined) {
    this._profession = value
  }

  static toLeaguerModel(data: any): LeaguerUpdate {
    return new LeaguerUpdate(
      data.name,
      data.email, 
      data.photo,
      data.team,
      data.language,
      data.responsible,
      data.profession,
      data.technology, 
      data.role,
      data.stage
      );
  }
}