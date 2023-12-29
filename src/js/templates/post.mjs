import { load } from "../storage/index.mjs";

async function createProfileCard() {
  const user = load("profile");


  const profileCardContainer = document.querySelector(".card-profile");

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


export function postTemplateA(postData) {
  return `<div class="post" id=${postData.id}>${postData.title}</div>`
}

export function postTemplateB(postData) {
  const post = document.createElement("a");
  post.setAttribute("href", `/post/index.html?id=${postData.id}`)
  post.classList.add("post");
  post.classList.add("row");
  post.classList.add("my-5");
  post.classList.add("py-3");
  post.classList.add("card");
  post.classList.add("bg-secondary");
  post.classList.add("align-items-center");



  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");
  postHeader.classList.add("d-flex");
  postHeader.classList.add("align-items-center");
  postHeader.classList.add("py-3");

  post.append(postHeader);


  const postAuthorInfoContainer = document.createElement("div");
  postAuthorInfoContainer.classList.add("d-flex");
  postAuthorInfoContainer.classList.add("col-3");
  postAuthorInfoContainer.classList.add("align-items-center");

  postHeader.append(postAuthorInfoContainer);


  const postAuthorName = postData.author.name;

  const postAuthorAvatar = postData.author.avatar;


  const authorImgContainer = document.createElement("span");
  authorImgContainer.classList.add("userimage");

  postAuthorInfoContainer.append(authorImgContainer);

  const authorAvatar = document.createElement("img");
  authorAvatar.classList.add("img-fluid");
  authorAvatar.classList.add("post-img");
  authorAvatar.alt = postAuthorName;
  authorAvatar.src = postAuthorAvatar;

  authorImgContainer.append(authorAvatar);



  const authorNameContainer = document.createElement("span");
  authorNameContainer.classList.add("username");
  authorNameContainer.classList.add("fs-6");
  authorNameContainer.classList.add("ps-2");
  authorNameContainer.classList.add("fw-medium");
  authorNameContainer.innerText = postAuthorName;

  postAuthorInfoContainer.append(authorNameContainer);

  
  const postTitleContainer = document.createElement("div");
  postTitleContainer.classList.add("col");
  postTitleContainer.classList.add("text-start");
  postTitleContainer.classList.add("ps-5");

  postHeader.append(postTitleContainer);

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.classList.add("fw-bold");
  postTitle.innerText = postData.title;
  
  postTitleContainer.append(postTitle)





  if(postData.media) {
    const img = document.createElement('img');
    img.classList.add("postImg");
    img.classList.add("img-thumbnail");
    img.classList.add("bg-secondary");
    img.classList.add("border");
    img.classList.add("border-0");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  if(!postData.media === true) {
    post.style.display = "none";
  }

  if(postData.body) {
    const body = document.createElement("p");
    body.classList.add("mt-4");
    body.innerText = postData.body;
    post.append(body)
  }

  
  return post;
}

export function postTemplateC(postData) {
  const post = document.createElement("div");
  post.setAttribute("href", `/post/index.html?id=${postData.id}`)
  post.classList.add("post");
  post.classList.add("row");
  post.classList.add("my-5");
  post.classList.add("py-3");
  post.classList.add("card");
  post.classList.add("bg-secondary");
  post.classList.add("align-items-center");

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.innerText = postData.title;
  
  post.append(postTitle)

  if(postData.media) {
    const img = document.createElement('img');
    img.classList.add("postImg");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  if(!postData.media === true) {
    post.style.display = "none";
  }

  if(postData.body) {
    const body = document.createElement("p");
    body.innerText = postData.body;
    post.append(body)
  }

  
  return post;
}


export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateC(postData))
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList,postTemplateB)
}

// export function renderPostTemplates(postDataList, parent) {
//   parent.append(postDataList, postTemplateB);
// }