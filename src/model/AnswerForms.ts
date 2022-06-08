import { ROLES_EVALUATION } from "../types/formTypes";

export default class AnswerForm{
  constructor(
    private _performance: ROLES_EVALUATION  | undefined,
    private _comment_performance: string | undefined,
    private _delivery_quality: ROLES_EVALUATION | undefined,
    private _comment_delivery_quality: string | undefined,
    private _team_work: ROLES_EVALUATION | undefined,
    private _comment_team_work: string | undefined,
    private _commitment: ROLES_EVALUATION | undefined,
    private _comment_commitment: string | undefined,
    private _punctual: ROLES_EVALUATION | undefined,
    private _comment_punctual: string | undefined,
    private _work_under_pressure: ROLES_EVALUATION | undefined,
    private _comment_work_under_pressure: string | undefined,
    private _ceremonies: ROLES_EVALUATION | undefined,
    private _comment_ceremonies: string | undefined,
    private _leadership_ability: ROLES_EVALUATION  | undefined,
    private _comment_leadership_ability: string | undefined,
    private _proactive: ROLES_EVALUATION | undefined,
    private _comment_proactive: string | undefined,
    private _skills: string | undefined,
    private _general_considerations: string | undefined
  ) {}

  public get performance(): ROLES_EVALUATION  | undefined{
    return this._performance
  }
  public set performance(value: ROLES_EVALUATION  | undefined ) {
    this._performance = value
  }

  public get comment_performance(): string | undefined{
    return this._comment_performance
  }
  public set comment_performance(value: string | undefined ) {
    this._comment_performance = value
  }

  public get delivery_quality(): ROLES_EVALUATION  | undefined{
    return this._delivery_quality
  }
  public set delivery_quality(value: ROLES_EVALUATION  | undefined ) {
    this._delivery_quality = value
  }

  public get comment_delivery_quality(): string | undefined{
    return this._comment_delivery_quality
  }
  public set comment_delivery_quality(value: string | undefined) {
    this._comment_delivery_quality = value
  }

  public get team_work(): ROLES_EVALUATION  | undefined{
    return this._team_work
  }
  public set team_work(value: ROLES_EVALUATION  | undefined ) {
    this._team_work = value
  }

  public get comment_team_work(): string | undefined{
    return this._comment_team_work
  }
  public set comment_team_work(value: string | undefined ) {
    this._comment_team_work = value
  }

  public get commitment(): ROLES_EVALUATION  | undefined{
    return this._commitment
  }
  public set commitment(value: ROLES_EVALUATION  | undefined ) {
    this._commitment = value
  }

  public get comment_commitment(): string | undefined{
    return this._comment_commitment
  }
  public set comment_commitment(value: string | undefined) {
    this._comment_commitment = value
  }

  public get punctual(): ROLES_EVALUATION  | undefined{
    return this._punctual
  }
  public set punctual(value: ROLES_EVALUATION  | undefined ) {
    this._punctual = value
  }

  public get comment_punctual(): string | undefined{
    return this._comment_punctual
  }
  public set comment_punctual(value: string | undefined) {
    this._comment_punctual = value
  }

  public get work_under_pressure(): ROLES_EVALUATION  | undefined{
    return this._work_under_pressure
  }
  public set work_under_pressure(value: ROLES_EVALUATION  | undefined ) {
    this._work_under_pressure = value
  }

  public get comment_work_under_pressure(): string | undefined{
    return this._comment_work_under_pressure
  }
  public set comment_work_under_pressure(value: string | undefined) {
    this._comment_work_under_pressure = value
  }

  public get ceremonies(): ROLES_EVALUATION  | undefined{
    return this._ceremonies
  }
  public set ceremonies(value: ROLES_EVALUATION  | undefined ) {
    this._ceremonies = value
  }

  public get comment_ceremonies(): string | undefined{
    return this._comment_ceremonies
  }
  public set comment_ceremonies(value: string | undefined) {
    this._comment_ceremonies = value
  }

  public get leadership_ability(): ROLES_EVALUATION  | undefined{
    return this._leadership_ability
  }
  public set leadership_ability(value: ROLES_EVALUATION  | undefined ) {
    this._leadership_ability = value
  }

  public get comment_leadership_ability(): string | undefined{
    return this._comment_leadership_ability
  }
  public set comment_leadership_ability(value: string | undefined) {
    this._comment_leadership_ability = value
  }

  public get proactive(): ROLES_EVALUATION  | undefined{
    return this._proactive
  }
  public set proactive(value: ROLES_EVALUATION  | undefined ) {
    this._proactive = value
  }

  public get comment_proactive(): string | undefined{
    return this._comment_proactive
  }
  public set comment_proactive(value: string | undefined) {
    this._comment_proactive = value
  }

  public get skills(): string  | undefined{
    return this._skills
  }
  public set skills(value: string  | undefined ) {
    this._skills = value
  }

  public get general_considerations(): string | undefined{
    return this._general_considerations
  }
  public set general_considerations(value: string | undefined) {
    this._general_considerations = value
  }


  static toAnswerFormModel(data: any): AnswerForm {
    return new AnswerForm(
      data.performance,
      data.comment_performance,
      data.delivery_quality,
      data.comment_delivery_quality,
      data.team_work,
      data.comment_team_work,
      data.commitment,
      data.comment_commitment,
      data.punctual,
      data.comment_punctual,
      data.work_under_pressure,
      data.comment_work_under_pressure,
      data.ceremonies,
      data.comment_ceremonies,
      data.leadership_ability,
      data.comment_leadership_ability,
      data.proactive,
      data.comment_proactive,
      data.skills,
      data.general_considerations,
    );
  }
}


