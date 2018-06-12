import axios from "axios/index";

class ApiService {

    static get(url) {
        return axios.get(url);
    }

}

export default ApiService;