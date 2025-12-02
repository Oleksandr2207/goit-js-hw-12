import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});



export function createGallery(images) {
  const markup = images
    .map(
      img => `
    <a class="gallery-item" href="${img.largeImageURL}">
      <div class="photo-card">
        <img src="${img.webformatURL}" alt="${img.tags}" />

        <div class="info">
          <p class="info-item"><b>Likes</b> ${img.likes}</p>
          <p class="info-item"><b>Views</b> ${img.views}</p>
          <p class="info-item"><b>Comments</b> ${img.comments}</p>
          <p class="info-item"><b>Downloads</b> ${img.downloads}</p>
        </div>
      </div>
    </a>
  `
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("show");
}

export function hideLoader() {
  loader.classList.remove("show");
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add("show");
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove("show");
}