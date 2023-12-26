import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

    if (form) {
      form.addEventListener("submit", async event => {
        event.preventDefault()

        //Fetch form values
        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;
        const tags = document.getElementById("tag-input").value.split(',').map(tag => tag.trim());
        const media = document.getElementById("media").value;

        if(!title || !body) {
          alert("Please fill in all required fields");
          return;
        }

        const formData = {
          title,
          body,
          tags,
          media
        };

        try {
          const createdPost = await createPost(formData);
          form.reset();


           //DISPLAY THE NEWLY CREATED POST IN THE DOM

          createNewPost(createdPost);
        
        } catch (error) {
          console.error("Error creating new Post:", error);
        }
      });
    } 
}

setCreatePostFormListener();


function createNewPost(newPost) {
  const newPostContainer = document.querySelector(".new-post-container");

  const newPostTitle = document.createElement("h2");
  newPostTitle.classList.add("new-post-title");
  newPostTitle.innerHTML = newPost.title;

  newPostContainer.append(newPostTitle);

  const newPostMedia = document.createElement("img");
  newPostMedia.src = newPost.media;
  newPostMedia.alt = newPost.title;
  newPostMedia.classList.add("new-post-media");
  newPostMedia.classList.add("thumbnail-img");
  newPostMedia.classList.add("img-fluid");
  newPostMedia.classList.add("img-thumbnail");

  newPostContainer.append(newPostMedia);

  const newPostDescription = document.createElement("p");
  newPostDescription.classList.add("new-listing-description");
  newPostDescription.classList.add("mt-2");
  newPostDescription.innerHTML = newPost.body;

  newPostContainer.append(newPostDescription);
}