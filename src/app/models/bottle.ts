import {WineType} from './wine-type';
import {Region} from './region';
import {Country} from './country';
import {Domain} from './domain';
import {Vintage} from './vintage';

export class Bottle {
    private _id: number;
    private _name: string;
    private _description: string;
    private _price: number;
    private _averagePrice: number;
    private _isOrganic: boolean;
    private _wineTypeList: Array<WineType>;
    private _regionList: Array<Region>;
    private _countryList: Array<Country>;
    private _domain: Array<Domain>;
    private _vintage: Array<Vintage>;
    private _createdAt: string;
    private _updatedAt: string;


    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }

    get averagePrice(): number {
        return this._averagePrice;
    }

    get isOrganic(): boolean {
        return this._isOrganic;
    }

    get wineTypeList(): Array<WineType> {
        return this._wineTypeList;
    }

    get regionList(): Array<Region> {
        return this._regionList;
    }

    get countryList(): Array<Country> {
        return this._countryList;
    }

    get domain(): Array<Domain> {
        return this._domain;
    }

    get vintage(): Array<Vintage> {
        return this._vintage;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }
}
