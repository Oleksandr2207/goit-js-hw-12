import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <div class="photo-card">
        <a class="gallery-item" href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${img.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${img.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${img.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${img.downloads}</span>
          </div>
        </div>
      </div>
      `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}


export function clearGallery() {
  galleryContainer.innerHTML = '';
}




export function showLoader() {
  loader.classList.add('show');
}

export function hideLoader() {
  loader.classList.remove('show');
}