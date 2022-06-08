export default class QuestionsUp{
  constructor(
    private _questions: string | undefined,
    private _answer: string | undefined,
    private _SYSTEM_USER_id: string | undefined
  ) {}

  public get questions(): string | undefined{
    return this._questions
  }
  public set questions(value: string | undefined) {
    this._questions = value
  }

  public get answer(): string | undefined {
    return this._answer
  }
  public set answer(value: string | undefined) {
    this._answer = value
  }

  public get SYSTEM_USER_id(): string | undefined{
    return this._SYSTEM_USER_id
  }
  public set SYSTEM_USER_id(value: string | undefined) {
    this._SYSTEM_USER_id = value
  }

  static toQuestionsModel(data: any): QuestionsUp {
    return new QuestionsUp(
      data.questions,
      data.answer, 
      data.SYSTEM_USER_id
      );
  }
}