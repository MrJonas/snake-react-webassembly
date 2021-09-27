export class Cell {
    x: i32
    y: i32

    constructor(x: i32, y: i32) {
        this.x = x
        this.y = y
    }

    isSame(cell: Cell): bool {
        return this.x === cell.x && this.y === cell.y
    }
    getCordinates(): i32[] {
        return [this.x, this.y]
    }
}
