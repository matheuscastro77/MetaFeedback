import { ROLES_STAGE, ROLES_TYPE} from "../types/leaguerTypes"

export default class Leaguer{
  constructor(
    private _id: string,
    private _name: string,
    private _email: string | undefined, 
    private _photo: string | undefined,
    private _team: string,
    private _language: string,
    private _responsible: string,
    private _profession: string,
    private _technology: string | undefined,
    private _SYSTEM_USER_id: string,
    private _role: ROLES_TYPE | undefined,
    private _stage: ROLES_STAGE | undefined,
  ) {}

  public get id(): string {
    return this._id
  }
  public set id(value: string) {
    this._id = value
  }


  public get name(): string {
    return this._name
  }
  public set name(value: string) {
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


  public get team(): string {
        return this._team
      }
  public set team(value: string) {
        this._team = value
  }


  public get language(): string {
    return this._language
  }
  public set language(value: string) {
    this._language = value
  }


  public get role(): ROLES_TYPE | undefined{
    return this._role
  }
  public set role(value: ROLES_TYPE | undefined) {
    this._role = value
  }


  public get responsible(): string {
    return this._responsible
  }
  public set responsible(value: string) {
    this._responsible = value
  }


  public get profession(): string {
    return this._profession
  }
  public set profession(value: string) {
    this._profession = value
  }

  public get SYSTEM_USER_id(): string {
    return this._SYSTEM_USER_id
  }
  public set SYSTEM_USER_id(value: string) {
    this._SYSTEM_USER_id = value
  }

  static toLeaguerModel(data: any): Leaguer {
    return new Leaguer(
      data.id,
      data.name,
      data.email, 
      data.photo,
      data.team,
      data.language,
      data.responsible,
      data.profession,
      data.technology, 
      data.SYSTEM_USER_id,
      data.role,
      data.stage,
      );
  }
}