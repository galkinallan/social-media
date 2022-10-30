import axios from "axios";

const url = "http://localhost:8000/posts";

const fetchPosts = () => axios.get(url);

export default fetchPosts;
