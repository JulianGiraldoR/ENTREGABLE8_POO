// REQUEST 1

class Account{
	public amount: number = 0
	public nameOfOlder: string = ""
	public creationDate: string  = ""
	 

	constructor(amount: number, nameOfOlder: string, creationDate: string){
		this.amount = amount;
		this.creationDate = nameOfOlder;
		this.nameOfOlder = creationDate;
	
	}

	income(){
		return "these are the income " 
	}

	refund(){
		return "these are the refund " 
	}

	transfer(){
		return "these are the transfer " 
	}
};

const client = new Account(5000000, "pepito perez", "01/09/2022");

// console.log( client.income());
// console.log( client.refund());
//console.log( client.transfer());

// REQUEST 2

class Counter{

	public number: number = 0

	constructor(number: number){
		this.number = number;
		
	}

	increase(){
		return this.number ++
	}
	decrease(){
		return this.number --
	}
	

};
const variable = new Counter(40);

// console.log( variable.increase());
// console.log( variable.decrease());

// REQUEST 3

class CompleX {

    private variableA: number = 0;
	private variableB: number = 0;
	private result: number= 0;

	constructor(variableA:number,variableB:number,result:number){
	this.variableA = variableA;
	this.variableB = variableB;
	this.result = result;
}
sum(){
	this.result = this.variableA + this.variableB;
	return this.result;
}

reduce(){
	this.result = this.variableA - this.variableB;
	return this.result;
}

multiply(){
	this.result = this.variableA * this.variableB;
	return this.result;
}

divide(){
	this.result = (this.variableA / this.variableB);
	return this.result;
}
};
const operation = new CompleX(40,20,0);

// console.log( operation.sum());
// console.log( operation.rest());
// console.log( operation.multiply());
// console.log( operation.divide());

//REQUEST 4

class Vehicle{

	brand: string = "";
	color: string = "";
	tipe: string = "";
	serialNumber:number = 0;

	constructor(brand: string, color: string, tipe: string, serialNumber: number){
		this.brand = brand;
		this.color = color;
		this.tipe = tipe;
		this.serialNumber = serialNumber;
	}
	turnOn(){
		return "the vehicle is turn on "
	}

	turnOff(){
		return "the vehicle is turn off "
	}

};
const transport0 = new Vehicle("mazda","blanco","familiar",1458790012);
//console.log(transport0.turnOn)

class car extends Vehicle {
	plate: string = "";
	numberOftyres: number = 0;

	constructor(plate: string, numberOftyres: number,brand:string,color:string,tipe:string,serialNumber:number){
		super(brand,color,tipe,serialNumber);
		this.plate = plate;
		this.numberOftyres = numberOftyres;
			
	}

	traveling(){
		return "the transport is traveling "
	}

	stop(){
		return "the transport is stop "
	}
};

const transport = new car("clo998", 12,"chevrolett","verde esmeralda","tractocamion",1234567);
//console.log(transport.traveling() );


class motorcylce extends Vehicle {
	maxSpeed: number = 0;
	cylinder: number = 0;
	
	
	constructor(maxSpeed: number, cylinder: number,brand:string,color:string,tipe:string,serialNumber:number){
		super(brand,color,tipe,serialNumber);
		this.maxSpeed = maxSpeed;
		this.cylinder = cylinder;
			
	}

	parking(){
		return "the transport is parking "
	}

	accelerate(){
		return "the transport is accelerate "
	}
};


const transport2 = new motorcylce(180, 1200,"ducatti","rojo","ninja",1234567890);
//console.log(transport2.accelerate() );