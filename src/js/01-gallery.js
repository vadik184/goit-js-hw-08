// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const images = galleryItems.map(item => {
  let listOfImg = document.createElement('li');
  listOfImg.classList.add('gallery__item');

  let imgLink = document.createElement('a');
  imgLink.classList.add('gallery__link');
  imgLink.href = item.original;

  let imgItem = document.createElement('img');
  imgItem.classList.add('gallery__image');
  imgItem.src = item.preview;
  imgItem.alt = item.description;

  imgLink.append(imgItem);
  listOfImg.append(imgLink);
  return listOfImg;
});

gallery.append(...images);

let options = {
  captionsData: 'alt',
  captionDelay: 250,
};

new SimpleLightbox('.gallery a', options);

console.log(galleryItems);
