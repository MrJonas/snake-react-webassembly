export enum DIRECTION {
  UP = 1,
  DOWN = 2,
  RIGHT = 3,
  LEFT = 4,
}

export const isOpposite = (
  directionOne: DIRECTION,
  directionTwo: DIRECTION
): boolean => {
  return (
    (directionOne === DIRECTION.UP && directionTwo === DIRECTION.DOWN) ||
    (directionOne === DIRECTION.DOWN && directionTwo === DIRECTION.UP) ||
    (directionOne === DIRECTION.RIGHT && directionTwo === DIRECTION.LEFT) ||
    (directionOne === DIRECTION.LEFT && directionTwo === DIRECTION.RIGHT)
  );
};
