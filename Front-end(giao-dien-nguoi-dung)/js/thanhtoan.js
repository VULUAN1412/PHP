// ====== CHECKOUT JAVASCRIPT ======

// Get cart data
let checkoutCart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    loadOrderItems();
    updateOrderSummary();
    setupShippingListener();
});

// Load order items in checkout
function loadOrderItems() {
    const orderItemsDiv = document.getElementById('orderItems');
    
    if (checkoutCart.length === 0) {
        orderItemsDiv.innerHTML = '<p style="text-align: center; color: #666;">Không có sản phẩm trong giỏ hàng</p>';
        return;
    }

    let html = '';
    checkoutCart.forEach(item => {
        const total = item.price * item.quantity;
        html += `
            <div class="item-in-cart">
                <div class="item-image-thumb">
                    <img src="../images/product${item.id}.jpg" alt="${item.name}">
                </div>
                <div class="item-details">
                    <p><strong>${item.name}</strong></p>
                    <p>Số lượng: ${item.quantity}</p>
                    <p class="price">${total.toLocaleString('vi-VN')}₫</p>
                </div>
            </div>
        `;
    });

    orderItemsDiv.innerHTML = html;
}

// Update order summary
function updateOrderSummary() {
    let subtotal = 0;
    
    checkoutCart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    let shipping = 0;
    
    if (shippingMethod === 'express') {
        shipping = 50000;
    } else if (shippingMethod === 'sameday') {
        shipping = 100000;
    }

    const discount = 0;
    const total = subtotal + shipping - discount;

    document.getElementById('summarySubtotal').textContent = subtotal.toLocaleString('vi-VN') + '₫';
    document.getElementById('summaryShipping').textContent = shipping === 0 ? 'Miễn phí' : shipping.toLocaleString('vi-VN') + '₫';
    document.getElementById('summaryDiscount').textContent = discount.toLocaleString('vi-VN') + '₫';
    document.getElementById('summaryTotal').textContent = total.toLocaleString('vi-VN') + '₫';
}

// Setup shipping listener
function setupShippingListener() {
    const shippingInputs = document.querySelectorAll('input[name="shipping"]');
    shippingInputs.forEach(input => {
        input.addEventListener('change', updateOrderSummary);
    });
}

// Validate form
function validateCheckoutForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const district = document.getElementById('district').value.trim();
    const ward = document.getElementById('ward').value.trim();

    if (!fullName || !phone || !email || !address || !city || !district || !ward) {
        alert('Vui lòng điền đầy đủ thông tin giao hàng');
        return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ');
        return false;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Số điện thoại phải có 10 chữ số');
        return false;
    }

    return true;
}

// Complete checkout
function completeCheckout() {
    if (!validateCheckoutForm()) {
        return;
    }

    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const ward = document.getElementById('ward').value;
    const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const notes = document.getElementById('notes').value;

    // Save order
    const order = {
        id: 'ORD' + Date.now(),
        customer: {
            name: fullName,
            phone: phone,
            email: email,
            address: {
                detail: address,
                city: city,
                district: district,
                ward: ward
            }
        },
        items: checkoutCart,
        shippingMethod: shippingMethod,
        paymentMethod: paymentMethod,
        notes: notes,
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    // Get existing orders from localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Save shipping info for later use
    localStorage.setItem('lastShippingInfo', JSON.stringify(order.customer));

    // Clear cart
    localStorage.removeItem('cart');

    // Show success message and redirect
    alert('Đơn hàng đã được tạo thành công! Mã đơn hàng: ' + order.id);
    
    // Redirect based on payment method
    if (paymentMethod === 'cod') {
        // Show order confirmation
        window.location.href = 'Dangnhap.html'; // Redirect to account or confirmation page
    } else {
        // In a real app, this would go to payment gateway
        alert(`Chuyển hướng đến ${getPaymentMethodName(paymentMethod)}...`);
        window.location.href = 'Trangchu.html';
    }
}

// Get payment method name
function getPaymentMethodName(method) {
    const methods = {
        'cod': 'Thanh toán khi nhận hàng',
        'bank': 'Chuyển khoản ngân hàng',
        'card': 'Thẻ tín dụng',
        'wallet': 'Ví điện tử'
    };
    return methods[method] || 'Thanh toán';
}

// Update step progress based on form completion
function updateStepProgress() {
    const fullName = document.getElementById('fullName').value.trim();
    const step1 = document.querySelectorAll('.step')[0];
    
    if (fullName) {
        step1.classList.add('active');
    }
}

// Add event listeners for real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-section input');
    inputs.forEach(input => {
        input.addEventListener('blur', updateStepProgress);
    });
});
