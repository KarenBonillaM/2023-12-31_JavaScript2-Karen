
export function postTemplateD(postData) {
  const post = document.createElement("a");
  post.setAttribute("href", `/post/edit/index.html?id=${postData.id}`)
  // post.setAttribute("post-id", postData.id);
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
    img.classList.add("img-thumbnail");
    img.classList.add("border-0");
    img.classList.add("bg-secondary");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  if(!postData.media === true) {
    post.style.display = "none";
  }

  if(postData.body) {
    const body = document.createElement("p");
    body.classList.add("mt-4")
    body.innerText = postData.body;
    post.append(body)
  }

  const updatePostContainer = document.createElement("div");
  updatePostContainer.classList.add("updatePostContainer");
  updatePostContainer.classList.add("row")
  updatePostContainer.classList.add("align-items-center")
  updatePostContainer.classList.add("pt-2")

  post.append(updatePostContainer);  

  const updateButtonLink = document.createElement("a");
  updateButtonLink.setAttribute("href", `/post/edit/index.html?id=${postData.id}`);
  updateButtonLink.classList.add("col")

  updatePostContainer.append(updateButtonLink)

  const updateButton = document.createElement("button");
  updateButton.classList.add("btn");
  updateButton.classList.add("btn-primary");
  updateButton.innerText = "Update Post";

  updateButtonLink.append(updateButton);

  const trashCan = document.createElement("i");
  trashCan.classList.add("fa-solid");
  trashCan.classList.add("fa-trash-can");
  trashCan.classList.add("col");
  trashCan.classList.add("deletePostBin");


  updatePostContainer.append(trashCan)

  
  return post;
}



export function renderPostsUserTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateD))
}