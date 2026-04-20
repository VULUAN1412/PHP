// Common functions used across all pages

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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    
    // Handle search bar on all pages
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
});

// Perform search - redirect to product page
function performSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput && searchInput.value.trim()) {
        const searchQuery = encodeURIComponent(searchInput.value.trim());
        window.location.href = 'SanPham.html?search=' + searchQuery;
    }
}
