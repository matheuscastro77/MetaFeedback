export enum ROLES_TYPE_HIRING{
  CLT = "CLT",
  ESTAGIO =   "ESTAGIO",
  CNPJ = "CNPJ",
  CONTRATO_TEMPORARIO = "CONTRATO_TEMPORARIO"
}

export enum ROLES_EVALUATION{
  INSUFICIENTE = "INSUFICIENTE",
  REGULAR =   "REGULAR",
  BOM = "BOM",
  EXCELENTE = "EXCELENTE"
}

export type authenticationDataForm = {
  id: string    
}

export type AuthenticationForm = {
  send_email:string
}


export type answerFormInput= {
  performance?: ROLES_EVALUATION | undefined
  comment_performance?: string | undefined
  delivery_quality?: ROLES_EVALUATION | undefined
  comment_delivery_quality?: string | undefined
  team_work?: ROLES_EVALUATION | undefined
  comment_team_work?: string | undefined
  commitment?: ROLES_EVALUATION | undefined
  comment_commitment?: string | undefined
  punctual?: ROLES_EVALUATION | undefined
  comment_punctual?: string | undefined
  work_under_pressure?: ROLES_EVALUATION | undefined
  comment_work_under_pressure?: string | undefined
  ceremonies?:ROLES_EVALUATION | undefined
  comment_ceremonies?: string | undefined
  leadership_ability?: ROLES_EVALUATION | undefined
  comment_leadership_ability?: string | undefined
  proactive?: ROLES_EVALUATION | undefined
  comment_proactive?: string | undefined
  skills?: string | undefined
  general_considerations?: string | undefined
}