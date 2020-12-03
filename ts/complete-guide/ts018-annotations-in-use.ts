

const jsonCoordiantes: string = '{"x": 10, "y": 20}';
const varCoordinates: { x: number; y: number } = JSON.parse(jsonCoordiantes);

console.log(`${typeof (varCoordinates)} -> ${varCoordinates}`);
console.log(`x = ${typeof (varCoordinates.x)} -> y = ${typeof (varCoordinates.y)}`);
console.log(varCoordinates);

// Inference Around Functions

function add(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

function logger(message: string): void {
    console.log(message);

}
logger(`addition: ${add(3, 5)}`);

// void and never

// ts26-destructuring-with-annotations.ts

function logWeather({ date, weather }: { date: Date, weather: string }) {
    console.log(`date ${date}, weather: ${weather}\n\n`);
}

const today = {
    date: new Date(),
    weather: 'sunny'
}
logWeather(today);

// ts27-annotations-object.ts

const profile = {
    name: 'John',
    age: 20,
    coordinates: {
        x: 3,
        y: 5
    },
    setAge(age: number): void {
        this.age = age;
    }
}

// destructuring 
const { age }: { age: number } = profile;
const { coordinates: { x, y } }: { coordinates: { x: number, y: number } } = profile;