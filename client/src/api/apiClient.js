import axios from "axios";

export const api = axios.create({
    //baseURL is the base url for API requests
    baseURL: "http://localhost:4000/api",
    //send cookie with every request to make sure a user is authenticated, (includes json token)
    withCredentials: true,
});

