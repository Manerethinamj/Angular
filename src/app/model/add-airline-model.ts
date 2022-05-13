export class AddAirlineModel {
    airlineIDCompany:any
    airlineCode:any
    airplanType:any
    airplanBusFare:any
    airplanECOFare:any
    maxSeat:any
    

    constructor(   AirlineIDCompany:any,AirlineCode:any, AirplanType:any, AirplanBusFare:any,AirplanECOFare:any,
        MaxSeat:any)
        {
            this.airlineIDCompany = AirlineIDCompany;
            this.airlineCode=AirlineCode;
            this.airplanType=AirplanType;
            this.airplanBusFare = AirplanBusFare;
            this.airplanECOFare = AirplanECOFare;
            this.maxSeat=MaxSeat;

        }
}
