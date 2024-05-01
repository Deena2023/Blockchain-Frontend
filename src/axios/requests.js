import axios from "axios";
const API = axios.create({ baseURL : 'https://legendary-giggle-4rqp5wvgrvx277jw-3002.app.github.dev/api/todo',withCredentials:true});
export const storeTodo = async(todo) => await API.post('/',todo); 