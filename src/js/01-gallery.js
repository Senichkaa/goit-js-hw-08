// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGallery = ({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
};

const mapGallery = galleryItems.map(createGallery).join('');
gallery.innerHTML = mapGallery;

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captoinDelay: 250,
});

console.log(galleryItems);
console.log(galleryItems);
