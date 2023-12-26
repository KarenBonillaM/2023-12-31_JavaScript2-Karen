import * as templates from "../templates/index.mjs";
import { getPostsUser } from "../api/profile/postsUser.mjs";

export async function setPostsUserTemplateListener() {
  const posts = await getPostsUser();
  const container = document.querySelector(".postsUserContainer");
  templates.renderPostsUserTemplates(posts, container);
}