import axios from "axios";


//api
export const api = {
    sendMessage({name, email, message}) {
        return axios.post("https://portfolio-my-js.herokuapp.com/sendMessage", {name, email, message})
    },
}
