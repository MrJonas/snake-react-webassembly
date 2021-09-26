/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";

interface Props {
    food: number[]
    snake: number[]
}

const X_STEPS = 25
const Y_STEPS = X_STEPS
const SCALE = 25
const BOARD_WIDTH = X_STEPS * SCALE
const BOARD_HEIGHT = Y_STEPS * SCALE

const reverseY = (x: number) => BOARD_HEIGHT - SCALE - x * SCALE




export const Canvas: React.FC<Props> = ({food, snake}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#03ab27"
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    if (food.length) {
        context.fillStyle = "#9b0000";
        context.fillRect(food[0] * SCALE, reverseY(food[1]), SCALE, SCALE);
    }

    if (snake.length) {
        context.fillStyle = "#016517";
        for (let i = 0; i < snake.length / 2; i++) {
            context.fillStyle = i === 0 ? "#0c0078" : "#000fba";
            const x = i*2
            const y = i*2 + 1
            context.fillRect(snake[x] * SCALE, reverseY(snake[y]), SCALE, SCALE);
        }
    }
  };

  useEffect(() => {
    draw();
  }, [food, snake]);

  return <canvas ref={canvasRef} width={BOARD_WIDTH} height={BOARD_HEIGHT} style={{border: '10px solid #016517'}}></canvas>;
};
