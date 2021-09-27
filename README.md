# Classic Snake Game wiht React + AssemblyScript

- AssemblyScript is used for game logic calculations (apple and snake position, colision detection).
- AssemblyScript files are located in `/assembly` directory.
- React app loads new snake position using `setInterval`.
- React app is used to paint the game in html canvas element.
- React app sends keyboard events that to AssemblyScript API to change snake moving direction.

# AssemblyScript API

AssemblyScript snake API has these exported methods:

- `getPosition()` returns next position of snake and food. Example response:

```
    [snakePositionArrayId, foodPositionArrayId]
    const [x1, y1, x2, y2, x3, y3, ...] = __getArray(snakePositionArrayId)
    const [x1, y1] = __getArray(foodPositionArrayId)
```
To accees values in the array assembly script loader method is used `__getArray(arrayId)`.


- `setDirection(direction)` sets snake direction. Direction values are:
    - `1 - UP`
    - `2 - DOWN`
    - `3 - RIGHT`
    - `4 - LEFT`


- AssemblyScript snake API api expects `sendMessage(m: string)` method passed as callback. To accees string value assembly script loader method is used `__getString(messageId)`.


### Starting game locally

```
// install packages
yarn
// make webasembly build
yarn asbuild
// run app
yarn start
```

Game should run on localhost:3000
