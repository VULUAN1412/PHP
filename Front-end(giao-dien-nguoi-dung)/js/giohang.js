// ====== SHOPPING CART JAVASCRIPT ======

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
    updateCartBadge();
});

// Display cart items
function displayCart() {
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng của bạn đang trống</p>
                <a href="Trangchu.html" class="btn btn-primary">Tiếp tục mua sắm</a>
            </div>
        `;
        return;
    }

    let html = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
    `;

    cart.forEach((item, index) => {
        const total = item.price * item.quantity;
        html += `
            <tr>
                <td>
                    <div class="item-info">
                        <img src="../images/product${item.id}.jpg" alt="${item.name}" class="item-image">
                        <h4>${item.name}</h4>
                    </div>
                </td>
                <td class="item-price">${item.price.toLocaleString('vi-VN')}₫</td>
                <td>
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" readonly>
                        <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                    </div>
                </td>
                <td class="item-price">${total.toLocaleString('vi-VN')}₫</td>
                <td class="item-actions">
                    <button onclick="removeFromCart(${index})" title="Xóa">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    cartContent.innerHTML = html;
    updateCartSummary();
}

// Add to cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id && item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();
    updateCartBadge();
    alert(`${name} đã được thêm vào giỏ hàng!`);
}

// Update quantity
function updateQuantity(index, newQty) {
    if (newQty < 1) {
        removeFromCart(index);
        return;
    }
    
    cart[index].quantity = newQty;
    saveCart();
    displayCart();
}

// Remove from cart
function removeFromCart(index) {
    if (confirm('Bạn muốn xóa sản phẩm này?')) {
        cart.splice(index, 1);
        saveCart();
        displayCart();
        updateCartBadge();
    }
}

// Update cart summary
function updateCartSummary() {
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const shipping = subtotal >= 500000 ? 0 : 30000;
    const discount = 0; // Can be updated with promo code
    const total = subtotal + shipping - discount;

    document.getElementById('subtotal').textContent = subtotal.toLocaleString('vi-VN') + '₫';
    document.getElementById('shipping').textContent = shipping === 0 ? 'Miễn phí' : shipping.toLocaleString('vi-VN') + '₫';
    document.getElementById('discount').textContent = discount.toLocaleString('vi-VN') + '₫';
    document.getElementById('total').textContent = total.toLocaleString('vi-VN') + '₫';
}

// Apply promo code
function applyPromo() {
    const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
    
    if (!promoCode) {
        alert('Vui lòng nhập mã khuyến mại');
        return;
    }

    // Sample promo codes
    const promoCodes = {
        'SAVE10': 0.10,
        'SAVE20': 0.20,
        'FREESHIP': 'free'
    };

    if (promoCodes[promoCode]) {
        alert(`Áp dụng mã khuyến mại "${promoCode}" thành công!`);
        // Here you would apply the discount
    } else {
        alert('Mã khuyến mại không hợp lệ');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Giỏ hàng đang trống. Vui lòng thêm sản phẩm!');
        return;
    }

    window.location.href = 'Thanhtoan.html';
}

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = cart.length;
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load related products on page load
function loadRelatedProducts() {
    const relatedProducts = [
        { id: 1, name: 'Giày chạy bộ Premium', price: 1290000 },
        { id: 2, name: 'Giày thể thao Casual', price: 950000 },
        { id: 3, name: 'Giày tập Gym', price: 1150000 },
        { id: 4, name: 'Giày chạy bộ X', price: 1450000 }
    ];

    return relatedProducts;
}
