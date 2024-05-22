const searchInput = document.querySelector('.search input');
const navigation = document.querySelector('.navigation');

searchInput.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const navigationLinks = navigation.querySelectorAll('a');
  let resultsFound = false;

  navigationLinks.forEach(link => {
    const linkText = link.textContent.toLowerCase();

    if (linkText.includes(searchTerm)) {
      link.style.display = 'block';
      resultsFound = true;
    } else {
      link.style.display = 'none';
    }
  });

  if (!resultsFound) {
    const noResults = document.createElement('p');
    noResults.textContent = 'No Results Found';
    noResults.classList.add('no-results');
    navigation.appendChild(noResults);
  } else {
    const noResults = document.querySelector('.no-results');
    if (noResults) {
      noResults.remove();
    }
  }
});

const images = document.querySelectorAll('.img-container img');
let currentIndex = 0;

function updateImages() {
    images.forEach((img, index) => {
        img.classList.remove('previous', 'active', 'next');
        if (index === currentIndex) {
            img.classList.add('active');
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('next');
        } else {
            img.classList.add('previous');
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}

window.addEventListener('load', () => {
    updateImages();
    setInterval(updateImages, 5000); // Change image every 5 seconds
});

document.addEventListener('DOMContentLoaded', function() {
  // Always show the cookie consent modal
  document.getElementById('cookie-consent-modal').style.display = 'block';

  // Handle the consent button click
  document.getElementById('consent-button').addEventListener('click', function() {
      // Hide the modal when the consent button is clicked
      document.getElementById('cookie-consent-modal').style.display = 'none';
  });
});

