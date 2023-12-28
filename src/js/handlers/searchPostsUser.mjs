const searchPostsUser = document.querySelector("#search");

const postsContainerPostsUser = document.querySelector(".postsUserContainer")

  searchPostsUser.onkeyup = function() {
    const searchBox = document.querySelector("#search").value.toLowerCase();
      const post = document.querySelectorAll(".post")
      const postTitle = postsContainerPostsUser.getElementsByTagName("h2");
    
      for(let i = 0; i < postTitle.length; i++) {
        let match = post[i].getElementsByTagName("h2")[0];
    
        if(match) {
          let textValue = match.textContent || match.innerHTML
    
          if(textValue.toLowerCase().indexOf(searchBox) > -1) {
            post[i].style.display = "";
          } else {
            post[i].style.display = "none";
          }
        }
      }
    }

