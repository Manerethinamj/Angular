export class ScheduleinventoryModel {
    AirlineCode:any;
    OnboardingTime:any;
    OnboardingPlace:any;
    DistinationPlace:any;
    constructor(airlineCode:any,
        onboardingPlace:any,
        distinationPlace:any,
        onboardingTime:any,
        )
    {
        this.AirlineCode = airlineCode;
        this.OnboardingTime = onboardingTime;
        this.OnboardingPlace = onboardingPlace;
        this.DistinationPlace = distinationPlace;
        
        
    }

}
