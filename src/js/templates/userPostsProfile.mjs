import * as templatesUser from "./userPostProfile.mjs";
import { getPostsUser } from "../api/profile/postsUser.mjs";

async function testPostsUserTemplate() {
  const posts = await getPostsUser();
  const container = document.querySelector(".postsUserContainer");
  templatesUser.renderPostsUserTemplates(posts, container);
}

testPostsUserTemplate()