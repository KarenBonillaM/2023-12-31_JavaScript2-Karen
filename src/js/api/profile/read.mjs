import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");

export async function getProfiles() {
  const getProfilesURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getProfilesURL);

  return await response.json();

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

  if(!user.avatar) {
    userAvatar.src = "/images/profile-picture.jpg"
  }

  profileImgContainer.append(userAvatar);

  const profileNameContainer = document.querySelector("#name-user-container");

  const userName = document.createElement("h1");
  userAvatar.classList.add("profile-name");
  userName.innerHTML = user.name;

  profileNameContainer.append(userName);

}

createProfileHTML()


export async function getUserFollowers(name) {
  if(!name) {
    throw new Error ("Get requires a name");
  }

  const getFollowersURL = `${API_SOCIAL_URL}${action}/${name}?_followers=true`;

  const response = await authFetch(getFollowersURL)

  return await response.json()
} 



async function createFollowersCard() {

  const followers = await getUserFollowers(name);

  console.log(followers)
  
  const usersContainer = document.querySelector("#followers");

  const followersContainer = document.createElement("div");
  followersContainer.classList.add("followers-container");

  usersContainer.append(followersContainer);

  
  const followerImage = document.createElement("img");
  followerImage.classList.add("img-fluid");
  followerImage.classList.add("post-img");
  followerImage.src = user.avatar;
  
  if(user.avatar === null) {
    followerImage.style.display = "none";
  } else {
    followerImage.style.display = "block"
  }
  
  followersContainer.append(followerImage)


  const followerName = document.createElement("p");
  followerName.innerText = user.name;

  followersContainer.append(followerName)
    
  }

  createFollowersCard()
  
  // createUsersCard(user)
  
  
  // function createFollowersHTML(users) {
  //   for(let i = 0; i< users.length; i++) {
  //     const user = users[i];
  //     createFollowersCard(user);
  //   }
  // }
  
  // async function followersSection() {
  //   const users = await getUserFollowers();
  //   createFollowersHTML(users);
  // }
  
  // followersSection()