import { Payload } from "./Payload"
import { Cargo } from "./Cargo"
import { Astronaut } from "./Astronaut"


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
   sumMass(items: Payload[]): number{

    let sum: number = 0

    for(let item of items){
        item.massKg += sum;
    }
    return sum;
   }
   currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
   }
   canAdd(item: Payload): boolean {
    if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
        return true;
    }
   }
}

