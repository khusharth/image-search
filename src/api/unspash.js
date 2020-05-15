// Contains code related to configuration of Axios
import axios from "axios";

// Creating new instance of axios client with some default properties
export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
});
