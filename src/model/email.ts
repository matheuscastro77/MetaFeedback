export default class Email {
    constructor(
        private _id: string,
        private _name: string,
        private _email: string,        
    ){}

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
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }    
}