
export enum ROLES_TYPE{
  ADMINISTRATOR = "ADMINISTRATOR",
  MENTOR =   "MENTOR",
  MANAGER = "MANAGER",
  LEAGUER = "LEAGUER"
}

export enum ROLES_STAGE{
  INTRODUCTION = "INTRODUCTION",
  LAB =   "LAB",
  BETA = "BETA"
}

export type authenticationData = {
  id: string    
}

export type FindByEmailResponse = {
  id: string;
  name: string;
  email: string;
}[];



export type updateLeaguer = {
  id?: string,
  name?: string
  email?: string
  photo?: any
  team?: string
  technology?: string
  language?: string
  responsible?: string
  profession?: string
  SYSTEM_USER_id?: string
  role?: ROLES_TYPE
  stage?: ROLES_STAGE
}
