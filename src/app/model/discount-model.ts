import { ThisReceiver } from "@angular/compiler";

export class DiscountModel {
    dicountCode:any;
    amount:any;

    constructor(dicountCode:any,amount:any)
    {
        this.dicountCode=dicountCode;
        this.amount = amount;
    }
}
