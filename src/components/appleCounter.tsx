import React from "react";

interface Props {
  snakeLength: number;
}

export const AppleCounter: React.FC<Props> = ({ snakeLength }) => {
  const numberOfApples = (snakeLength || 4) / 2 - 2;
  return <header className="App-header">&#127822; {numberOfApples}</header>;
};
