import { ROLES_STAGE, ROLES_TYPE } from "./leaguerTypes"

export type LeaguerInputDTO = {
  name: string
  email?: string
  photo?: string | undefined
  team: string
  technology?: string
  language: string
  responsible: string
  profession: string
  SYSTEM_USER_id: string
  role?: ROLES_TYPE
  stage?: ROLES_STAGE
}

