
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url)
    .then(res => {
        const todo = res.data as Todo;

        const report = `My report:\nid: ${todo.id}, title: ${todo.title}, completed: ${todo.completed}\n`;
        console.log(report);

    });