import { ROLES_TYPE } from "../types/leaguerTypes";

export default class System_user {
    constructor(
        private _id: string,
        private _name: string | undefined,
        private _email: string,
        private _password: string,
        private _role: ROLES_TYPE 
    ){}

    public get id(): string {
        return this._id 
    }
    public set id(value: string ) {
        this._id = value
    }
    public get name(): string | undefined{
        return this._name
    }
    public set name(value: string | undefined) {
        this._name = value
    }
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
    public get password(): string {
        return this._password
    }
    public set password(value: string) {
        this._password = value
    }
    public get role(): ROLES_TYPE {
        return this._role
    }
    public set role(value: ROLES_TYPE) {
        this._role = value
    }
}