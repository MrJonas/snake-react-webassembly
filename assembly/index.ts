/* eslint-disable eqeqeq */
import { DIRECTION, isOpposite } from "./direction";
import { Game } from "./game";
import { consoleLog } from "./env";

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
  consoleLog("Can't go to opposite direction!");
  return false;
}
