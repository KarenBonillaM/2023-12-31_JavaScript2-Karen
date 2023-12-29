import { load } from "../../storage/index.mjs";

async function createProfileCard() {
  const user = load("profile");


  const profileCardContainer = document.querySelector(".card-profile");

  const userIconLink = document.querySelector(".user-icon-link");
  userIconLink.href = `/profile/index.html?name=${user.name}`;

  const userLinkContainer = document.createElement("a");
  userLinkContainer.classList.add("user-avatar-card-container");
  userLinkContainer.href = `/profile/index.html?name=${user.name}`;

  profileCardContainer.append(userLinkContainer);

  const userAvatar = document.createElement("img");
  userAvatar.classList.add("user-card-avatar");
  userAvatar.classList.add("img-fluid");
  userAvatar.classList.add("float-start");
  userAvatar.classList.add("img-profile");
  userAvatar.src = user.avatar;

  if(!user.avatar) {
    userAvatar.src = "/images/profile-picture.jpg";
  }

  userLinkContainer.append(userAvatar);

  const userName = document.createElement("h3");
  userName.classList.add("text-dark");
  userName.innerText = user.name;

  userLinkContainer.append(userName);

  const userPhrase = document.createElement("p");
  userPhrase.classList.add("text-dark");
  userPhrase.innerText = "Food lover. Happy to share some recipes <3";

  userLinkContainer.append(userPhrase);
}

createProfileCard()