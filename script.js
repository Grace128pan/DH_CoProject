document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    const backToTopButton = document.getElementById('backToTop');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (query) {
            navItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = item.querySelector('a').href;
                    link.textContent = item.textContent;
                    listItem.appendChild(link);
                    searchResults.appendChild(listItem);
                }
            });
        }

        searchResults.style.display = searchResults.innerHTML ? 'block' : 'none';
    });

    // Show or hide the "Back to Top" button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
