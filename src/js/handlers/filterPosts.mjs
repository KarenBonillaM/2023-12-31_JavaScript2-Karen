import { getPosts } from "../api/posts/read.mjs";

import { createPostHTML } from "../api/posts/read.mjs";

const dinnerButton = document.querySelector("#dinner");
const italianButton = document.querySelector("#italian");
const breakfastButton = document.querySelector("#breakfast");
const dessertsButton = document.querySelector("#desserts");

const postsContainer = document.querySelector("#posts"); 



//FILTER DINNER MEALS

async function filterDinner() {
  try {
    const allPosts = await getPosts();

    const filterDinnerMeals = allPosts.filter((post) => ['dinner', 'meat', 'barbecue'].some(tag => post.tags.includes(tag)));

    return filterDinnerMeals;
  } catch(error) {
    throw new Error(error.message);
  } 
  };

dinnerButton.addEventListener("click", async (event) => {
  event.preventDefault();

  postsContainer.innerHTML = "";

  const mealFiltered = await filterDinner();
  
  for(let i = 0; i < mealFiltered.length; i++)
  {
    const postData = mealFiltered[i];

    createPostHTML(postData);
  }

} );


//FILTER ITALIAN MEALS

async function filterItalian() {
  try {
    const allPosts = await getPosts();

    const filterItalianMeals = allPosts.filter((post) => ['pasta', 'pizza'].some(tag => post.tags.includes(tag)));

    return filterItalianMeals;
  } catch(error) {
    throw new Error(error.message);
  } 
  };

italianButton.addEventListener("click", async (event) => {
  event.preventDefault();

  postsContainer.innerHTML = "";

  const mealFiltered = await filterItalian();
  
  for(let i = 0; i < mealFiltered.length; i++)
  {
    const postData = mealFiltered[i];

    createPostHTML(postData);
  }

} )


//FILTER BREAKFAST MEALS

async function filterBreakfast() {
  try {
    const allPosts = await getPosts();

    const filterBreakfastMeals = allPosts.filter((post) => ['breakfast', 'toast'].some(tag => post.tags.includes(tag)));

    return filterBreakfastMeals;
    } catch(error) {
    throw new Error(error.message);
    } 
  };

breakfastButton.addEventListener("click", async (event) => {
  event.preventDefault();

  postsContainer.innerHTML = "";

  const mealFiltered = await filterBreakfast();
  
  for(let i = 0; i < mealFiltered.length; i++)
  {
    const postData = mealFiltered[i];

    createPostHTML(postData);
  }

} );


//FILTER DESSERTS MEALS

async function filterDesserts() {
  try {
    const allPosts = await getPosts();

    const filterDessertsMeals = allPosts.filter((post) => ['dessert', 'cake'].some(tag => post.tags.includes(tag)));

    return filterDessertsMeals;
   } catch(error) {
    throw new Error(error.message);
    } 
  };

  
dessertsButton.addEventListener("click", async (event) => {
  event.preventDefault();

  postsContainer.innerHTML = "";

  const mealFiltered = await filterDesserts();
  
  for(let i = 0; i < mealFiltered.length; i++)
  {
    const postData = mealFiltered[i];

    createPostHTML(postData);
  }
});