// 
import axios from "axios";
const BASE_URL  = "http://localhost:3001/api";
const TOKEN = ""

// made all public request from the server to this end point
 export const PUBLIC_REQUEST = axios.create({ 

  baseURL:BASE_URL,
 });
 export const   USER_REQUEST = axios.create({
 baseURL:BASE_URL,
 headers:{token:`Bearer ${TOKEN}`}

 })

