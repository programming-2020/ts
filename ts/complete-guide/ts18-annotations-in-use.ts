

const jsonCoordiantes: string = '{"x": 10, "y": 20}';
const varCoordinates: { x: number; y: number } = JSON.parse(jsonCoordiantes);

console.log(`${typeof (varCoordinates)} -> ${varCoordinates}`);
console.log(`x = ${typeof (varCoordinates.x)} -> y = ${typeof (varCoordinates.y)}`);
console.log(varCoordinates);

