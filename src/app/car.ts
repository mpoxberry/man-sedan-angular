export class Car {
    name: string;
    gasTankCapacity?: number;
    horsePower?: number;
    passenger?: number;
    year?: string;
    make?: string;
    history?: [Entry];
}

export class Entry {
    date?: Date;
    gasStation?: string;
    costPerGallon?: number;
    totalPurchased?: string;
    mileage?: number;
    manualMPG?: number;
    tripA?: number;
    totalGas?: number;
}

export class Record {
    date: string;
    gasStation: string;
    costPerGallon: string;
    total: string;
    milage: number;
    manualMPG: number;
    tripA: number;
    totalGas: number;
}