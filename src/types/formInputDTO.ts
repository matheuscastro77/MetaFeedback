import { ROLES_EVALUATION, ROLES_TYPE_HIRING } from "./formTypes"

export type formInputDTO = {
  send_email: string
  LEAGUER_id: string
  project: string
  time: string
  technology: string
  type_hiring: ROLES_TYPE_HIRING
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
  SYSTEM_USER_id: string
  hashlink?: string | undefined
}