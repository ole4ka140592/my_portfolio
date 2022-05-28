import axios from "axios";


//api
export const api = {
    sendMessage(values) {
        return axios.post("http://localhost:3000/sendMessage", {values})
    },
}
