import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

const postsContainer = document.querySelector("#posts");

export async function getPosts() {
  const limit = 100;
  let offset = 0;
  let totalPosts = 0;
  const allPosts = [];

  try{
    while(totalPosts < 1600) {
      const updatePostURL = `${API_SOCIAL_URL}${action}?_author=true&_sort=created&_sortOrder=desc&_limit=${limit}&_offset=${offset}`;

    const response = await authFetch(updatePostURL);

    

    if(!response.ok) {
      throw new Error(`Failed to fetch posts. Status: ${response.status}`);
    }
    const fetchPosts = await response.json();

    

    if (!Array.isArray(fetchPosts)) {
      throw new Error('Invalid response format. Expected an array.');
    }
    
    if(fetchPosts.length === 0) {
      break;
    }

  allPosts.push(...fetchPosts);
  totalPosts += fetchPosts.length;
  offset += limit;
    }

    return allPosts;
  } catch(error) {
    console.log(error.message);
    return[];
  }
} 


export async function displayOnlyRelativePosts() {
  try{
    const allPosts= await getPosts();

    const onlyRelativePosts = allPosts.filter((post) => ['meat', 'breakfast', 'fish', 'dessert', 'pizza', 'pasta', 'barbecue', 'cake', 'yogurt', 'dumplings', 'food'].some(tag => post.tags.includes(tag)));

    return onlyRelativePosts;
  } catch(error) {
    throw new Error(error.message); 
  }
}

displayOnlyRelativePosts()


function createPostHTML(postData) {

  const postLink = document.createElement("a");
  postLink.setAttribute("href", `/post/index.html?id=${postData.id}`);
  postLink.classList.add("post");
  postLink.classList.add("row");
  postLink.classList.add("my-5");
  postLink.classList.add("py-3");
  postLink.classList.add("card");
  postLink.classList.add("bg-secondary");
  postLink.classList.add("align-items-center");


  if(postsContainer) {
    postsContainer.append(postLink);
  }
  
  
if(postData) {
  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");
  postHeader.classList.add("d-flex");
  postHeader.classList.add("align-items-center");
  postHeader.classList.add("py-3");

  postLink.append(postHeader);


  const postAuthorInfoContainer = document.createElement("div");
  postAuthorInfoContainer.classList.add("d-flex");
  postAuthorInfoContainer.classList.add("col-3");
  postAuthorInfoContainer.classList.add("align-items-center");

  postHeader.append(postAuthorInfoContainer);

  if(postData.author && postData.author.name) {
    const postAuthorName = postData.author.name;

    const authorImgContainer = document.createElement("span");
    authorImgContainer.classList.add("userimage");

    postAuthorInfoContainer.append(authorImgContainer);

    const postAuthorAvatar = postData.author.avatar;

    const authorAvatar = document.createElement("img");
    authorAvatar.classList.add("img-fluid");
    authorAvatar.classList.add("post-img");
    authorAvatar.alt = postAuthorName;
    authorAvatar.src = postAuthorAvatar;

    if(!postData.author.avatar) {
      authorAvatar.src = "/images/profile-picture.jpg"
    }

    authorImgContainer.append(authorAvatar);

    const authorNameContainer = document.createElement("span");
    authorNameContainer.classList.add("username");
    authorNameContainer.classList.add("fs-6");
    authorNameContainer.classList.add("ps-2");
    authorNameContainer.classList.add("fw-medium");
    authorNameContainer.innerText = postAuthorName;

    postAuthorInfoContainer.append(authorNameContainer);
  }
  
  const postTitleContainer = document.createElement("div");
  postTitleContainer.classList.add("col");
  postTitleContainer.classList.add("text-start");
  postTitleContainer.classList.add("ps-5");

  postHeader.append(postTitleContainer);

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.classList.add("fw-bold");
  postTitle.innerText = postData.title;
  
  postTitleContainer.append(postTitle);

  if(postData.media) {
    const img = document.createElement('img');
    img.classList.add("postImg");
    img.classList.add("img-thumbnail");
    img.classList.add("bg-secondary");
    img.classList.add("border");
    img.classList.add("border-0");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    postLink.append(img)
  }

  if(!postData.media) {
    postLink.style.display = "none";
  }

  if(postData.body) {
    const body = document.createElement("p");
    body.classList.add("mt-4");
    body.innerText = postData.body;
    postLink.append(body)
  }
}
}

async function createPostsHTML() {
  const relativePosts = await displayOnlyRelativePosts()

  for(let i = 0; i < relativePosts.length; i++) {
    const postData = relativePosts[i];

  createPostHTML(postData);
  }
}

createPostsHTML()


export async function getPost(id) {
  // if(!id) {
  //   throw new Error ("Get requires a postID");
  // }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL)

  return await response.json()

} 

export async function getAuthor(id) {
  const getAUthorURL = `${API_SOCIAL_URL}${action}/${id}?_author=true`;
  
  const response = await authFetch(getAUthorURL);

  return await response.json(); 
}