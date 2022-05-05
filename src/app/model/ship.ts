import { Coordinates } from "./coordinates";

export class Ship {
    constructor(public coordinates: Coordinates[],
        public size: number, public type: string) { }
}
