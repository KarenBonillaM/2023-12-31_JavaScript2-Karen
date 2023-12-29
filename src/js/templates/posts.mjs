import * as templates from "./index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function testTemplate() {
  const posts = await postMethods.displayOnlyRelativePosts();

  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

// testTemplate()

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");




export async function testPostTemplate() {
  const post = await postMethods.displayOnlyRelativePosts(id);

  // const postAuthor = await postMethods.getAuthor(id);
  const container = document.querySelector("#post");
  templates.renderPostTemplate(post, container);
}

testPostTemplate()


