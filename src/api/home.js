import axios from "axios";
const baseRoute = "home";
const backendAxios = axios.create({
    baseURL: "https://hanico.online/1"
});

const prodApis = {
    index: () => {
        return backendAxios.get()
    },
    show: (id) => {
        return backendAxios.get(baseRoute + "/" + id)
    }
}
export default prodApis
