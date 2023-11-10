const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector(".gallery");

const galleryMarkup = images.map(
  image => `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`
).join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// Додавання стилів
const galleryStyle = `
  .gallery {
    list-style: none;
    display: flex;
    gap: 16px;
  }

  .gallery-item {
    flex: 1;
    max-width: 300px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = galleryStyle;
document.head.appendChild(styleElement);