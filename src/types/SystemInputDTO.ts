import { ROLES_TYPE } from "./leaguerTypes"

export type SystemInputDTO = {
    id?: string 
    name?: string | undefined
    email: string 
    password: string 
    role?: ROLES_TYPE 
}
