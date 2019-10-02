export class User {

    private _id: number;

    constructor(private _email: string, private _password: string) {
    }

    get id() {
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get email() {
        return this._email;
    }

    set email(_email){
        this._email = _email;
    }

    get password() {
        return this._password;
    }

    set password(_password) {
        this._password = _password;
    }
}