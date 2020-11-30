
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url)
    .then(response => {
        console.log("Output:\t");
        console.log(response.data);
    });