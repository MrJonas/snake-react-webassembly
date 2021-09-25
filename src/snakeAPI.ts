
import loader from "@assemblyscript/loader"; 

interface API {
  add(a: number, b: number): number;
}

export const getSnakeAPI = async () => {
  const imports = {  }
  // @ts-ignore
  const exports = await loader.instantiate<API>(
    fetch("snake-api/optimized.wasm"),
    imports,
  )
  return exports
}
