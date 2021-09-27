import { useEffect, useCallback } from "react";

const DIRECTION_MAP = {
  ArrowUp: 1,
  w: 1,
  W: 1,
  ArrowDown: 2,
  s: 2,
  S: 2,
  ArrowRight: 3,
  d: 3,
  D: 3,
  ArrowLeft: 4,
  a: 4,
  A: 4,
};

export const useDirectionKeydown = (
  directionKeydownCallback: (direction: number) => void
) => {
  const handleUserKeyPress = useCallback(
    (event) => {
      const key = event.key as string;
      // @ts-ignore
      const direction: number | undefined = DIRECTION_MAP[key];
      direction && directionKeydownCallback(direction);
    },
    [directionKeydownCallback]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
};
