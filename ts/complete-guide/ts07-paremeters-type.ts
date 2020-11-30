
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface TODO {
    id: number;
    title: string;
    completed: boolean;
}

const report = (id: number, t: string, c: boolean) =>
    (`My report: id: ${id}, title: ${t}, completed: ${c}`);

axios
    .get(url)
    .then((response) => {
        const data = response.data as TODO;
        // ERROR: not comatible parameters' types
        // console.log(report(data.id, data.completed, data.title));
        // preventing ERROR
        console.log(report(data.id, data.title, data.completed));
    });