import { useEffect, useRef, useCallback, useState } from "react";
import { getSnakeAPI } from "../api/snakeAPI";
import { useDirectionKeydown } from "./useDirectionKeydown";

interface Message {
  timestamp: number;
  text: string;
}

export const useSnakeApiData = () => {
  const snakeAPI = useRef<any>();
  const [snake, setSnake] = useState<number[]>([]);
  const [food, setFood] = useState<number[]>([]);
  const [message, setMessage] = useState<Message | null>(null);

  const handleMesage = (m: string) => {
    const message = snakeAPI.current?.exports.__getString(m);
    setMessage({
      timestamp: new Date().getTime(),
      text: message,
    });
    console.log(message);
  };
  const load = useCallback(async () => {
    snakeAPI.current = await getSnakeAPI(handleMesage);
  }, []);
  const update = () => {
    if (snakeAPI.current) {
      const { getPosition, __getArray } = snakeAPI.current?.exports;
      const data = __getArray(getPosition());
      const snakeData = __getArray(data[0]);
      const foodData = __getArray(data[1]);
      setSnake(snakeData);
      setFood(foodData);
    }
  };
  useEffect(() => {
    load();
    const interval = setInterval(() => update(), 120);
    return () => clearInterval(interval);
  }, [load]);

  const handleUserKeyPress = useCallback((direction: number) => {
    snakeAPI.current?.exports.setDirection(direction);
  }, []);

  useDirectionKeydown(handleUserKeyPress);

  return {snake, food, message};
};
