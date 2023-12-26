import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const deleteButton = document.querySelector("#removePostButton");


const action = "/posts";
const method = "delete";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const deleteURL = `${API_SOCIAL_URL}${action}/${id}`;

export async function removePost() {

  try {
    if(!id) {
      throw new Error ("Delete requires a postID");
    }
  
    const response = await authFetch(deleteURL, {
      method,
    })
  
    alert("Post has been deleted")
    return await response.json()
  } catch {
    error("Error when deleting post")
  }

  
}

deleteButton.addEventListener("click", removePost);

