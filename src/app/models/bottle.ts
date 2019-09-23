import {WineType} from './wine-type';
import {Region} from './region';
import {Country} from './country';
import {Domain} from './domain';
import {Vintage} from './vintage';

export class Bottle {
    private id: number;
    private name: string;
    private description: string;
    private price: number;
    private averagePrice: number;
    private isOrganic: boolean;
    private wineTypeList: Array<WineType>;
    private regionList: Array<Region>;
    private countryList: Array<Country>;
    private domain: Array<Domain>;
    private vintage: Array<Vintage>;
    private createdAt: string;
    private updatedAt: string;
}
