import loader from "@assemblyscript/loader";

interface API {
  getPosition(): number;
  setDirection(direction: number): boolean
}

export const getSnakeAPI = async (sendMessage: (m: string) => void) => {
  const imports = {
    env: {
      sendMessage,
    },
  };
  // @ts-ignore
  const exports = await loader.instantiate<API>(
    fetch("/snake-api/optimized.wasm"),
    imports
  );
  return exports;
};
