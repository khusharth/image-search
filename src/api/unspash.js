// Contains code related to configuration of Axios
import axios from 'axios';

// Creating new instance of axios client with some default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 367NLzgk7_PfmIiXK7mYelqSSJS93s1xRv0O6hB33IM'
    }
});

