/* eslint-disable eqeqeq */
import { DIRECTION } from './direction'
import { Cell } from './cell'

const MAX_Y = 25;
const MAX_X = 25;

export class Snake {
  body: Cell[] = [new Cell(4, 12), new Cell(3, 12)];
  direction: DIRECTION = DIRECTION.RIGHT
  constructor() {
    this.reset()
  }
  private getHead(): Cell {
    return this.body[0];
  }
  getNextHead(): Cell {
    const head = this.getHead()
    let y = head.y
    let x = head.x
    
    if (this.direction == DIRECTION.UP) {
      y = y >= MAX_Y - 1 ? 0 : y + 1;
    } else if (this.direction == DIRECTION.DOWN) {
      y = y <= 0 ? MAX_Y - 1 : y - 1;
    } else if (this.direction == DIRECTION.LEFT) {
      x = x <= 0 ? MAX_X - 1 : x - 1;
    } else if (this.direction == DIRECTION.RIGHT) {
      x = x >= MAX_X - 1 ? 0 : x + 1;
    }
    return new Cell(x, y);
  }

  reset(): void {
    this.body = [new Cell(4, 12), new Cell(3, 12)]
    this.direction = DIRECTION.RIGHT
  }

  move(): void {
    const newHead = this.getNextHead()
    if (this.isOverlaping(newHead)) {
      this.reset()
    } else {
      this.body.unshift(newHead)
      this.body.pop()
    }
  }

  grow(): void {
    const newHead = this.getNextHead()
    this.body.unshift(newHead)
  }
  isOverlaping(cell: Cell): bool {
    for (let i = 0; i < this.body.length; i++) {
      const bodyCell = this.body[i]
      if (bodyCell.isSame(cell)) {
        return true
      }
    }
    return false
  }
  getCordinates(): i32[] {
    const cordinates: i32[] = []
    for (let i = 0; i < this.body.length; i++) {
      const cellCoordinates = this.body[i].getCordinates()
      cordinates.push(cellCoordinates[0])
      cordinates.push(cellCoordinates[1])
    }
    return cordinates;
  }
}
