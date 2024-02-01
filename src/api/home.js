import axios from "axios";
const baseRoute = "home";
const indexURL = "https://hanico.online"

const backendAxios = axios.create({
    baseURL: "https://hanico.online"
});

const prodApis = {
    index: () => {
        return backendAxios.get()
    },
    show: (id) => {
        return backendAxios.get(baseRoute + "/" + id)
    },
    server: (index)=>{
        return backendAxios.get(indexURL + "/" + index)
    }
}
export default prodApis
