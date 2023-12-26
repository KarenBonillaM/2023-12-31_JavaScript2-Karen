import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs"

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);
    
  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });

  if(response.ok) {
    const {accessToken, ...user} = await response.json();

    storage.save("token", accessToken);
    storage.save("profile", user);

    const encodeName = encodeURIComponent(user.name);

    console.log(encodeName);

    const redirectURL = `/profile/index.html?name=${encodeName}`;

    window.location.href = redirectURL;
  } else {
  alert ("Login failed");
  }
  
}


