import axios from "axios";


const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '0ab1e7b3-e560-4134-9877-af2e3009657c'
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

//api
export const api = {
    createTodo() {
        return instance.post("todo-lists", {title})
    },
}
