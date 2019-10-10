export class Region {
    private _id: number;
    private _name: string;
    private _createdAt: string;
    private _updatedAt: string;

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }
}
