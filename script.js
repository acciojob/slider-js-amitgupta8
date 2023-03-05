//your JS code here. If required.
const slides = [
  {
    id: 1,
    title: 'Nature flower',
    description: 'all in pink',
    image: 'https://via.placeholder.com/500x300?text=Nature+flower',
  },
  {
    id: 2,
    title: 'Bluuue Sky',
    description: 'with its mountains',
    image: 'https://via.placeholder.com/500x300?text=Bluuue+Sky',
  },
  {
    id: 3,
    title: 'Lonely castle',
    description: 'in the wilderness',
    image: 'https://via.placeholder.com/500x300?text=Lonely+castle',
  },
  {
    id: 4,
    title: 'Flying eagle',
    description: 'in the sunset',
    image: 'https://via.placeholder.com/500x300?text=Flying+eagle',
  },
];

const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const imageElement = document.getElementById('image');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

let currentSlide = 0;

function showSlide(slideIndex) {
  const slide = slides[slideIndex];
  titleElement.textContent = slide.title;
  descriptionElement.textContent = slide.description;
  imageElement.src = slide.image;
}

function handleUpButton() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function handleDownButton() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

upButton.addEventListener('click', handleUpButton);
downButton.addEventListener('click', handleDownButton);

showSlide(currentSlide);
