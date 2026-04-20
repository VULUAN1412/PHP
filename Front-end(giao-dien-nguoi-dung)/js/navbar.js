// Load navbar from navbar.html and set active link
async function loadNavbar() {
    try {
        const response = await fetch('navbar.html');
        if (!response.ok) {
            throw new Error('Failed to load navbar: ' + response.status);
        }
        const navbarHTML = await response.text();
        
        // Insert navbar at the beginning of body
        const body = document.body;
        body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        // Detect current page and set active link
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'Trangchu';
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
        
        // Update cart badge
        updateCartBadge();
        
        // Setup search functionality
        const searchButton = document.querySelector('.search-bar button');
        const searchInput = document.querySelector('.search-bar input');
        
        if (searchButton && searchInput) {
            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    } catch (error) {
        console.error('Error loading navbar:', error);
        // Try to at least update cart badge and search functionality
        updateCartBadge();
        setupSearchFunctionality();
    }
}

function setupSearchFunctionality() {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Update cart badge - show badge only when cart has items
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        if (cart.length > 0) {
            cartBadge.textContent = cart.length;
            cartBadge.style.display = 'flex';
        } else {
            cartBadge.style.display = 'none';
        }
    }
}

// Perform search - redirect to product page
function performSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput && searchInput.value.trim()) {
        const searchQuery = encodeURIComponent(searchInput.value.trim());
        window.location.href = 'SanPham.html?search=' + searchQuery;
    }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);
