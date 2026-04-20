// Load footer before body close
async function loadFooter() {
    try {
        const response = await fetch('footer.html');
        if (!response.ok) {
            throw new Error('Failed to load footer: ' + response.status);
        }
        const footerHTML = await response.text();
        
        // Get the modal if it exists
        const modal = document.getElementById('infoModal');
        
        if (modal) {
            // Insert footer before modal
            modal.insertAdjacentHTML('beforebegin', footerHTML);
        } else {
            // Insert footer at end of body
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    } catch (error) {
        console.error('Error loading footer:', error);
        // Create footer directly in body if fetch fails
        createFooterDirectly();
    }
}

function createFooterDirectly() {
    // Fallback: create basic footer if fetch fails
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <p>&copy; 2024 Giày Thể Thao. All rights reserved.</p>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

// Handle footer link clicks
function handleFooterLink(type, action) {
    if (type === 'product') {
        if (action === 'all') {
            // Navigate to SanPham or filter products
            window.location.href = 'SanPham.html';
        } else if (action === 'phu-kien') {
            window.location.href = 'SanPham.html?category=phu-kien';
        }
    } else if (type === 'support') {
        // Open modal for support
        if (typeof openModal === 'function') {
            openModal(action);
        }
    } else if (type === 'about') {
        // Open modal for about
        if (typeof openModal === 'function') {
            openModal(action);
        }
    }
    return false;
}

// Subscribe newsletter
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Vui lòng nhập email của bạn');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Email không hợp lệ');
        return;
    }
    
    // Store subscription
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
    }
    
    alert('Cảm ơn bạn đã đăng ký! Bạn sẽ nhận được thông tin ưu đãi mới nhất từ chúng tôi.');
    emailInput.value = '';
}

// Validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Load footer on page load
document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
});
