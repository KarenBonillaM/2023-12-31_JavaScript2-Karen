import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");

console.log(name);


const action = "/profiles/";
const userPostURL = "/posts";



export async function getPostsUser() {
  const getPostsUserURL = `${API_SOCIAL_URL}${action}${name}${userPostURL}`;

  const response = await authFetch(getPostsUserURL)

  return await response.json()
} 
