import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let page = 1;
let totalHits = 0;

form.addEventListener("submit", async e => {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }

  
  currentQuery = query;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.warning({
        message: "No images found. Try another query!",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);

    
    if (page * 15 < totalHits) {
      showLoadMoreButton();
    }

  } catch {
    iziToast.error({
      message: "Something went wrong. Try again later!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  page += 1;

  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    const totalLoaded = page * 15;

    if (totalLoaded >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch {
    iziToast.error({
      message: "Error loading more images.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});