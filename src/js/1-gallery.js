import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    src: 'small-image1.jpg',
    large: 'large-image1.jpg',
    alt: 'Image 1 description',
  },
  {
    src: 'small-image2.jpg',
    large: 'large-image2.jpg',
    alt: 'Image 2 description',
  },
  // Додати інші зображення
];

const galleryContainer = document.querySelector('.gallery');
const galleryItems = images
  .map(
    ({ src, large, alt }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${large}">
            <img class="gallery-image" src="${src}" alt="${alt}" />
        </a>
    </li>
`
  )
  .join('');

galleryContainer.innerHTML = galleryItems;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
