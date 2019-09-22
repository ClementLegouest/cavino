export class User {
    private _uuid: string;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private _age: number;
    private _address: string;
    private _isSeller: boolean;
    private _isAdmin: boolean;
    private _createdAt: string;
    private _updatedAt: string;


    get uuid(): string {
        return this._uuid;
    }

    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname;
    }

    get email(): string {
        return this._email;
    }

    get age(): number {
        return this._age;
    }

    get address(): string {
        return this._address;
    }

    get isSeller(): boolean {
        return this._isSeller;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }
}
