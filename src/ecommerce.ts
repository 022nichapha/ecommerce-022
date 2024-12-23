class Customer1 {
    private name: string;
    private address: any;

    constructor (name: string,address: any){
        this.name = name;
        address = address;
    }
}
class Order1{
    private date: string;
    private status: string;

    constructor (date: string,status: string){
        this.date = date;
        this.status = status;
    }
    public calcSubTotal(){

    }
    public calcTax(){

    }
    public calcTotal(){

    }
    public calcTotalweight(){

    }
}
class OderDetail1{
    private quantity: any;
    private taxstatus: string;

    constructor (quantity: any,taxstatus:string){
        this.quantity = quantity;
        this.taxstatus = taxstatus;
    }
    public calcSubtotal(){

    }
    public calcWegiht(){

    }
    public calcTax(){

    }
}
class Item1 {
    private shippingWeight: any;
    private description: string;

    constructor(shippingWeight: any,description: string) {
        this.shippingWeight= shippingWeight;
        this.description = description;
    }
    public getPriceForQuantity(){

    }
        public getTax(){

        }
        public intStock(){

        }
}
class Payment1 {
    private amount: number;

    constructor (amount: number){
        this.amount = amount
    }
}

class Check1 extends Payment1{ 
    private name : string;
    private bankID : string;

    constructor (name: string,bankID: string,amount: number)
    {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }   


    public authorized() {
        
    }
}
class Cash1 extends Payment1{
    private cashTendered: number;

    constructor (cashTendered: number,amount: number){
        super(amount);
        this.cashTendered = cashTendered;
    }
}
    class Credit1 extends Payment1{
        private number: String;
        private type: String;
        private expDate: String

        constructor (number: String,type: String,amount: number,expDate: String){
            super(amount);
            this.number = number;
            this.type = type;
            this.expDate = expDate;    
        }
        public authorized(){
            
        }
    }
