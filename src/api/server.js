import axios from "axios";

const server = axios.create({
	baseURL: " https://source.unsplash.com/random",
	//  process.env.NEXT_PUBLIC_API_URL ,
});

export default server;
