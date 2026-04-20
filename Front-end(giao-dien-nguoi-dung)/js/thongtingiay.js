// ====== PRODUCT DETAILS JAVASCRIPT ======

// Initialize product page
document.addEventListener('DOMContentLoaded', function() {
    setupTabs();
    updateCartBadge();
});

// Change main image on thumbnail click
function changeImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Remove active class from all thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Update main image
    mainImage.src = thumbnail.src;
}

// Size selection
document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Color selection
document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            colorButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Increase quantity
function increaseQty() {
    const qtyInput = document.getElementById('quantity');
    let value = parseInt(qtyInput.value) || 1;
    if (value < 10) {
        qtyInput.value = value + 1;
    }
}

// Decrease quantity
function decreaseQty() {
    const qtyInput = document.getElementById('quantity');
    let value = parseInt(qtyInput.value) || 1;
    if (value > 1) {
        qtyInput.value = value - 1;
    }
}

// Add product to cart
function addProductToCart() {
    const productName = document.getElementById('productName').textContent;
    const priceText = document.getElementById('priceNew').textContent;
    const price = parseInt(priceText.replace(/[^0-9]/g, ''));
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const size = document.querySelector('.size-btn.active').textContent;
    const color = document.querySelector('.color-btn.active').getAttribute('title');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => 
        item.name === productName && 
        item.size === size && 
        item.color === color
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: 1,
            name: productName,
            price: price,
            quantity: quantity,
            size: size,
            color: color
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showSuccessMessage(`${productName} đã được thêm vào giỏ hàng!`);
}

// Buy now - add to cart and go to checkout
function buyNow() {
    addProductToCart();
    setTimeout(() => {
        window.location.href = 'Giohang.html';
    }, 500);
}

// Toggle wishlist
function toggleWishlist() {
    const wishlistBtn = document.querySelector('.btn-wishlist');
    const productName = document.getElementById('productName').textContent;
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const existingItem = wishlist.find(item => item.name === productName);
    
    if (existingItem) {
        wishlist = wishlist.filter(item => item.name !== productName);
        showSuccessMessage('Đã xóa khỏi danh sách yêu thích');
    } else {
        wishlist.push({
            id: 1,
            name: productName,
            price: document.getElementById('priceNew').textContent
        });
        showSuccessMessage('Đã thêm vào danh sách yêu thích');
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    wishlistBtn.classList.toggle('active');
}

// Tab functionality
function switchTab(tabName) {
    // Hide all tab panes
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => pane.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab pane
    const selectedPane = document.getElementById(tabName);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Setup tabs functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
    }
    
    const tabPanes = document.querySelectorAll('.tab-pane');
    if (tabPanes.length > 0) {
        tabPanes[0].classList.add('active');
    }
}

// View product details
function viewProduct(productId) {
    // In a real app, this would navigate to the specific product page
    // For now, just reload the current page
    window.location.href = 'Thongtingiay.html?id=' + productId;
}

// Load more reviews
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            alert('Đang tải thêm đánh giá...');
            // In a real app, this would load more reviews via AJAX
        });
    }
});

// Update cart badge
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = cart.length;
    }
}

// Show success message
function showSuccessMessage(message) {
    // Create and show a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-size: 14px;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Pre-fill ratings display
document.addEventListener('DOMContentLoaded', function() {
    // This would be populated with real data from a backend
    console.log('Product details page initialized');
});
