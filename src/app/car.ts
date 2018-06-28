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
    total?: string;
    milage?: number;
    manualMPG?: number;
    tripA?: number;
    totalGas?: number;
}
