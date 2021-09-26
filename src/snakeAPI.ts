import loader from "@assemblyscript/loader";

interface API {
  getPosition(): number;
  setDirection(direction: number): boolean
}

export const getSnakeAPI = async (consoleLog: (m: string) => void) => {
  const imports = {
    index: {
      consoleLog,
    },
  };
  // @ts-ignore
  const exports = await loader.instantiate<API>(
    fetch("/snake-api/optimized.wasm"),
    imports
  );
  return exports;
};
