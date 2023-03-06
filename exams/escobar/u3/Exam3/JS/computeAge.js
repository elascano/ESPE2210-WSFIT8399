class DateBirth{
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    get age(){
        return this.computeAge();
    }

    computeAge(){
        return this.year - (2023);
    }
    
}