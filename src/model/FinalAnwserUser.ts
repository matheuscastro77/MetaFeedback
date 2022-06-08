export default class FinalAnwserUser{
  constructor(
    private _id: string,
    private _compiled_answer: string,
    private _SYSTEM_USER_id: string,
    private _LEAGUER_ANSWER_id: string
  ){}

  public get id(): string {
    return this._id
  }
  public set id(value: string) {
    this._id = value
  }

  public get compiled_answer(): string {
    return this._compiled_answer
  }
  public set compiled_answer(value: string) {
    this._compiled_answer = value
  }

  public get SYSTEM_USER_id(): string {
    return this._SYSTEM_USER_id
  }
  public set SYSTEM_USER_id(value: string) {
    this._SYSTEM_USER_id = value
  }

  public get LEAGUER_ANSWER_id(): string {
    return this._LEAGUER_ANSWER_id
  }
  public set LEAGUER_ANSWER_id(value: string) {
    this._LEAGUER_ANSWER_id = value
  }

  static toFinalAnwserUserModel(data: any): FinalAnwserUser {
    return new FinalAnwserUser(
      data.id,
      data.compiled_answer,
      data.SYSTEM_USER_id,
      data.LEAGUER_ANSWER_id
    );
  }
}