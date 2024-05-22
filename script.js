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
  // Check if the consent cookie exists
  if (!getCookie('consent')) {
      // Show the cookie consent modal if the cookie doesn't exist
      document.getElementById('cookie-consent-modal').style.display = 'block';
  }

  // Handle the consent button click
  document.getElementById('consent-button').addEventListener('click', function() {
      // Set a consent cookie that expires in 30 days
      setCookie('consent', 'true', 30);
      // Hide the modal
      document.getElementById('cookie-consent-modal').style.display = 'none';
  });
});

// Function to set a cookie
function setCookie(name, value, days) {
const d = new Date();
d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Set the expiration time in milliseconds
const expires = "expires=" + d.toUTCString(); // Convert the expiration time to UTC string
document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Set the cookie with the name, value, and expiration time
}

// Function to get a cookie by name
function getCookie(name) {
const cname = name + "="; // The name of the cookie to search for
const decodedCookie = decodeURIComponent(document.cookie); // Decode the document.cookie string
const ca = decodedCookie.split(';'); // Split the cookies into an array
for(let i = 0; i < ca.length; i++) { // Loop through the cookies
    let c = ca[i];
    while (c.charAt(0) == ' ') { // Remove leading spaces
        c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) { // Check if this cookie's name matches the desired name
        return c.substring(cname.length, c.length); // Return the cookie's value
    }
}
return ""; // Return an empty string if the cookie is not found
}
