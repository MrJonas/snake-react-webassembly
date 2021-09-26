/* eslint-disable eqeqeq */
import { DIRECTION, isOpposite } from "./direction";
import { Game } from "./game";

declare function consoleLog(mesage: string): void;

const game = new Game();

export function getPosition(): i32[][] {
  game.updatePosition();
  return game.getCoordinates();
}

export function setDirection(direction: DIRECTION): bool {
  if (!isOpposite(direction, game.snake.direction)) {
    game.setDirection(direction);
    return true;
  }
  consoleLog("This direction is opposite!");
  return false;
}
