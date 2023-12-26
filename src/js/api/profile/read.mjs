import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");

export async function getProfiles() {
  const getProfilesURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getProfilesURL)

  return await response.json()
} 

export async function getProfile(name) {
  if(!name) {
    throw new Error ("Get requires a name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL)

  return await response.json()
} 


async function createProfileHTML() {
  const user = await getProfile(name);
  
  const profileImgContainer = document.querySelector(".profile-avatar");


  const userAvatar = document.createElement("img");
  userAvatar.classList.add("user-avatar");
  userAvatar.classList.add("img-fluid");
  userAvatar.classList.add("img-profile");
  userAvatar.classList.add("float-center");
  userAvatar.classList.add("main-img");
  userAvatar.src 
  = user.avatar;
  userAvatar.alt 
  = user.name;

  profileImgContainer.append(userAvatar);

  const profileNameContainer = document.querySelector("#name-user-container");

  const userName = document.createElement("h1");
  userAvatar.classList.add("profile-name");
  userName.innerHTML = user.name;

  profileNameContainer.append(userName);

}

createProfileHTML()