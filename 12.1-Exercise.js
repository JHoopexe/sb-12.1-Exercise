
class Vehicle {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    make(){
        return this.a;
    }
    model(){
        return this.b;
    }
    year(){
        return this.c;
    }
    honk(){
        return "BEEP!";
    }
    toString(){
        return `The vehicle is a ${this.a} ${this.b} from ${this.c}`;
    }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

class Car extends Vehicle {
    numWheels = 4;
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels;

class Motorcycle extends Vehicle {
    numWheels = 2;
    revEngine(){
        return "VROOM!!!";
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.honk();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels;

class Garage {
    constructor(a){
        this.a = a;
    }
    capacity(){
        return this.a;
    }
    vehicles = [];
    add(vehicle){
        if(this.vehicles.length == this.capacity()){
            console.log("Sorry, we're full.");
        }
        else if(typeof vehicle != 'object'){
            console.log("Only vehicles are allowed in here.")''
        }
        else{
            this.vehicles.push(vehicle);
        }
    }
}
let garage = new Garage(2);
garage.vehicles;
garage.add(new Car("Hyundai", "Elantra", 2015));
garage.vehicles;
garage.add("Taco");
garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
garage.vehicles;
garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
