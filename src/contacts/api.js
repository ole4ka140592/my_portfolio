import axios from "axios";

//api
export const api = {
    sendMessage({name, email, message}) {
        return axios.post("http://localhost:3000/sendMessage", {name, email, message})
    },
}
