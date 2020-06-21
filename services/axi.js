import Axios from "axios";

export default Axios.create({
    baseURL:'http://newsapi.org/v2/top-headlines'
})