import { Ship } from "./ship";

export class BoardGame {
    constructor(public board: number[][], public message: string, public ships: Ship[]) { }
}
