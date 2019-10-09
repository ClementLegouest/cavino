export class PositionInCellar {
    private id: number;
    private positionX: number;
    private positionY: number;
    private cellarId: number;
    private _bottleId: number;
    private createdAt: string;
    private updatedAt: string;

    public get bottleId(): number {
        return this._bottleId;
    }
}
