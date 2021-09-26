import { Snake } from "./snake";
import { Cell } from "./cell";
import { DIRECTION } from "./direction";
import { MAX_X, MAX_Y } from "./constants";
import { consoleLog } from "./env";

export class Game {
  snake: Snake = new Snake();
  food: Cell = new Cell(0, 0);

  constructor() {
    this.generateFood();
  }

  setDirection(direction: DIRECTION): void {
      this.snake.direction = direction;
  }

  updatePosition(): void {
    const snakeHead = this.snake.getNextHead();
    if (snakeHead.isSame(this.food)) {
      this.snake.grow();
      this.generateFood();
      consoleLog('You ate an apple!');
    } else {
      this.snake.move();
    }
  }

  getCoordinates(): i32[][] {
    return [this.snake.getCordinates(), this.food.getCordinates()];
  }

  generateFood(): void {
    const posibleFoodCells: Cell[] = [];
    for (let x = 0; x < MAX_X; x++) {
      for (let y = 0; y < MAX_Y; y++) {
        const cell = new Cell(x, y);
        if (!this.snake.isOverlaping(cell)) {
          posibleFoodCells.push(cell);
        }
      }
    }

    this.food =
      posibleFoodCells[Mathf.floor(Mathf.random() * (posibleFoodCells.length as f32)) as i32];
  }
}
