// Carousel functionality
let currentCarouselSlide = 0;
const totalCarouselSlides = 4;

function updateCarousel() {
    const carouselItems = document.querySelector('.carousel-items');
    if (!carouselItems) return;
    
    const offset = -currentCarouselSlide * 100;
    carouselItems.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    document.querySelectorAll('.carousel-dots .dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentCarouselSlide);
    });
}

function nextCarouselSlide() {
    currentCarouselSlide = (currentCarouselSlide + 1) % totalCarouselSlides;
    updateCarousel();
}

function prevCarouselSlide() {
    currentCarouselSlide = (currentCarouselSlide - 1 + totalCarouselSlides) % totalCarouselSlides;
    updateCarousel();
}

function goToCarouselSlide(index) {
    currentCarouselSlide = index;
    updateCarousel();
}

// Modal functionality
const modalContent = {
    shipping: {
        title: '📦 Hướng dẫn Vận chuyển',
        content: '<p><strong>Chúng tôi cung cấp dịch vụ vận chuyển toàn quốc:</strong></p><ul><li><strong>Miễn phí vận chuyển</strong> cho đơn hàng trên 500.000đ</li><li><strong>Giao hàng nhanh</strong> trong 1-3 ngày làm việc</li><li><strong>Bảo vệ hàng hóa</strong> 100% trong quá trình vận chuyển</li><li><strong>Theo dõi đơn hàng</strong> real-time qua SMS và email</li><li><strong>Giao hàng tại nhà</strong> hoặc chọn điểm nhận khác</li></ul><p>Liên hệ <strong>0385217674</strong> để được hỗ trợ vận chuyển.</p>'
    },
    payment: {
        title: '💳 Phương thức Thanh toán',
        content: '<p><strong>Chúng tôi chấp nhận các hình thức thanh toán:</strong></p><ul><li><strong>Thanh toán khi nhận hàng (COD)</strong> - An toàn, không rủi ro</li><li><strong>Chuyển khoản ngân hàng</strong> - Nhanh chóng, thuận tiện</li><li><strong>Ví điện tử</strong> - Momo, Zalo Pay, VNPay</li><li><strong>Thẻ tín dụng/Ghi nợ</strong> - Bảo mật với SSL</li><li><strong>Trả góp 0% lãi suất</strong> (với các đơn hàng từ 3 triệu)</li></ul><p>Tất cả giao dịch được bảo vệ và an toàn 100%.</p>'
    },
    return: {
        title: '↩️ Chính sách Đổi trả',
        content: '<p><strong>Chúng tôi hỗ trợ đổi trả hàng trong các trường hợp:</strong></p><ul><li><strong>Hàng lỗi, hỏng, hoặc không đúng mô tả</strong> - Đổi miễn phí</li><li><strong>Thời gian đổi trả</strong> - Trong vòng 7 ngày kể từ khi nhận hàng</li><li><strong>Điều kiện hàng</strong> - Hàng chưa qua sử dụng, còn nguyên đóng gói</li><li><strong>Hỗ trợ hoàn tiền</strong> - Hoàn tiền vào tài khoản trong 3-5 ngày</li><li><strong>Vận chuyển đổi trả</strong> - Miễn phí cho khách hàng</li></ul><p>Liên hệ: <strong>0385217674</strong> hoặc <strong>trungkhoa0209@gmail.com</strong></p>'
    },
    intro: {
        title: 'ℹ️ Giới thiệu về chúng tôi',
        content: '<p><strong>Giày Support</strong> là cửa hàng bán giày thể thao chuyên nghiệp hàng đầu tại Việt Nam.</p><p><strong>Sứ mệnh:</strong> Cung cấp các sản phẩm giày thể thao chính hãng, chất lượng cao với giá cải phải chăng.</p><p><strong>Tầm nhìn:</strong> Trở thành địa chỉ tin cậy hàng đầu cho những người yêu thích thể thao và đi bộ.</p><p><strong>Cam kết:</strong></p><ul><li>✓ Sản phẩm 100% chính hãng</li><li>✓ Hỗ trợ khách hàng 24/7</li><li>✓ Giao hàng nhanh toàn quốc</li><li>✓ Chính sách bảo hành rõ ràng</li></ul><p>Cảm ơn bạn đã tin tưởng Giày Support!</p>'
    },
    news: {
        title: '📰 Tin tức & Khuyến mại',
        content: '<p><strong>Thường xuyên cập nhật:</strong></p><ul><li>🎉 <strong>Sale khủng hàng tuần</strong> - Giảm đến 50%</li><li>🆕 <strong>Sản phẩm mới</strong> - Các dòng giày mới nhất 2024</li><li>📢 <strong>Flash Sale</strong> - Mỗi ngày 18:00 - 20:00</li><li>🎁 <strong>Khuyến mại đặc biệt</strong> - Cho khách hàng thân thiết</li><li>💝 <strong>Chương trình referral</strong> - Mời bạn nhận thưởng</li></ul><p>Theo dõi fanpage để não bỏ lỡ các chương trình khuyến mại!</p>'
    },
    recruit: {
        title: '💼 Tuyển dụng',
        content: '<p><strong>Giày Support đang tuyển dụng các vị trí sau:</strong></p><ul><li>📍 <strong>Nhân viên bán hàng</strong> - Khu vực TP.HCM, Hà Nội</li><li>📦 <strong>Nhân viên kho</strong> - Hỗ trợ xuất nhập kho</li><li>📞 <strong>Nhân viên CSKH</strong> - Tư vấn khách hàng</li><li>💻 <strong>Lập trình viên</strong> - Web development</li><li>📊 <strong>Nhân viên Marketing</strong> - Quản lý mạng xã hội</li></ul><p><strong>Liên hệ:</strong> hr@giaythethao.vn hoặc 0385217674</p><p>Mức lương: Cạnh tranh, có bảo hiểm xã hội, thưởng hiệu suất!</p>'
    }
};

function openModal(type) {
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modalBody');
    
    if (modalContent[type]) {
        const content = modalContent[type];
        modalBody.innerHTML = `<h2>${content.title}</h2>${content.content}`;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Initialize carousel when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    updateCarousel();
    
    // Auto-advance carousel every 5 seconds
    setInterval(nextCarouselSlide, 5000);

    // Category Filter Functionality
    const categoryLinks = document.querySelectorAll('.category-link');
    const productCards = document.querySelectorAll('.product-card');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const selectedCategory = this.getAttribute('data-category');
            
            // Filter products
            productCards.forEach(card => {
                if (selectedCategory === 'all') {
                    card.style.display = 'block';
                    // Fade in animation
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === selectedCategory) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                }
            });
        });
    });

    // Set initial active category
    const firstCategory = document.querySelector('.category-link[data-category="all"]');
    if (firstCategory) {
        firstCategory.classList.add('active');
    }

    // Product card interactions
    const productCardElements = document.querySelectorAll('.product-card');
    productCardElements.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });

        card.addEventListener('click', function() {
            // Redirect to product detail page
            window.location.href = 'Thongtingiay.html';
        });
    });

    // Product image hover effects
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
            this.style.transform = 'scale(1.05)';
        });

        img.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const input = newsletterForm.querySelector('input');
        const button = newsletterForm.querySelector('button');

        button.addEventListener('click', function() {
            const email = input.value;
            if (email && email.includes('@')) {
                alert('Cảm ơn bạn đã đăng ký nhận tin tức!');
                input.value = '';
            } else {
                alert('Vui lòng nhập email hợp lệ');
            }
        });

        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                button.click();
            }
        });
    }

    // Cart functionality and badge update
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

    // Initialize cart badge
    updateCartBadge();

    const cartIcon = document.querySelector('a[title="Giỏ hàng"]');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            // Allow navigation to cart page (default is already enabled)
        });
    }

    // Login redirect
    const userIcon = document.querySelector('a[title="Tài khoản"]');
    if (userIcon) {
        userIcon.addEventListener('click', function(e) {
            // Already linked to Dangnhap.html
        });
    }

    // ===== NAVIGATION MENU FUNCTIONALITY =====
    
    // Dropdown Menu Toggle
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const menu = dropdown.querySelector('.dropdown-menu');
            
            // Close other open dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    const otherMenu = other.querySelector('.dropdown-menu');
                    if (otherMenu) {
                        otherMenu.style.display = 'none';
                    }
                }
            });
            
            // Toggle current dropdown
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.display = 'none';
                }
            });
        }
    });

    // Home Navigation
    const navHome = document.querySelector('.nav-home');
    if (navHome) {
        navHome.addEventListener('click', function(e) {
            e.preventDefault();
            // Reload current page or scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Show all products
            filterByCategory('all');
        });
    }

    // Shoes Filter (from SẢN PHẨM dropdown)
    const navShoes = document.querySelector('.nav-shoes');
    if (navShoes) {
        navShoes.addEventListener('click', function(e) {
            e.preventDefault();
            // Show all shoe categories
            filterByCategory('all');
            const dropdown = this.closest('.dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
            window.scrollTo({ top: document.querySelector('.products-section').offsetTop - 100, behavior: 'smooth' });
        });
    }

    // Accessories Filter (from SẢN PHẨM dropdown)
    const navAccessories = document.querySelector('.nav-accessories');
    if (navAccessories) {
        navAccessories.addEventListener('click', function(e) {
            e.preventDefault();
            filterByCategory('phu-kien');
            const dropdown = this.closest('.dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
            window.scrollTo({ top: document.querySelector('.products-section').offsetTop - 100, behavior: 'smooth' });
        });
    }

    // Brand Filter (Nike, Adidas, Puma)
    const navBrands = document.querySelectorAll('.nav-brand');
    navBrands.forEach(brand => {
        brand.addEventListener('click', function(e) {
            e.preventDefault();
            const brandName = this.getAttribute('data-brand').toLowerCase();
            
            // Create filter logic based on product names
            const productCards = document.querySelectorAll('.product-card');
            const dropdown = this.closest('.dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
            
            // Show all initially
            productCards.forEach(card => {
                card.style.opacity = '1';
                card.style.display = 'block';
            });
            
            // You can add specific filtering here based on product brand
            // For now, showing notification
            alert(`Lọc sản phẩm hãng: ${brandName.toUpperCase()}\n\nTính năng này sẽ hiển thị các sản phẩm của ${brandName.toUpperCase()} khi cơ sở dữ liệu được kết nối.`);
            
            window.scrollTo({ top: document.querySelector('.products-section').offsetTop - 100, behavior: 'smooth' });
        });
    });

    // Sale Navigation - Now links to Sale.html
    const navSale = document.querySelector('.nav-sale');
    if (navSale) {
        navSale.addEventListener('click', function(e) {
            // Link will navigate directly to Sale.html
        });
    }

    // News Navigation - Now links to TinTuc.html
    const navNews = document.querySelector('.nav-news');
    if (navNews) {
        navNews.addEventListener('click', function(e) {
            // Link will navigate directly to TinTuc.html
        });
    }

    // Guide Navigation - Now links to HuongDan.html
    const navGuides = document.querySelectorAll('.nav-guide');
    navGuides.forEach(guide => {
        guide.addEventListener('click', function(e) {
            // Link will navigate directly to HuongDan.html
        });
    });

    // Contact Navigation - Now links to LienHe.html
    const navContact = document.querySelector('.nav-contact');
    if (navContact) {
        navContact.addEventListener('click', function(e) {
            // Link will navigate directly to LienHe.html
        });
    }
    // ===== END NAVIGATION MENU FUNCTIONALITY =====

    // ===== SEARCH FUNCTIONALITY =====
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            return;
        }

        // Navigate to products page with search query
        window.location.href = 'SanPham.html?search=' + encodeURIComponent(searchTerm);
    }
    // ===== END SEARCH FUNCTIONALITY =====

    // Footer Support Links Handler
    const supportLinks = document.querySelectorAll('.support-link');
    supportLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const supportType = this.getAttribute('data-support');
            showSupportInfo(supportType);
        });
    });

    // Footer About Links Handler
    const aboutLinks = document.querySelectorAll('.about-link');
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutType = this.getAttribute('data-about');
            showAboutInfo(aboutType);
        });
    });

    // Social Media Links
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const index = Array.from(socialIcons).indexOf(this);
            const socialLinks = ['https://facebook.com', 'https://instagram.com', 'https://twitter.com', 'https://youtube.com'];
            window.open(socialLinks[index], '_blank');
        });
    });
});

// Support Information Display with Modal
function showSupportInfo(type) {
    const supportInfo = {
        shipping: {
            title: 'Dịch vụ Vận chuyển',
            content: `
                <h3>Các phương thức vận chuyển</h3>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71; margin: 10px 0 5px 0;">📦 Giao hàng tiêu chuẩn</h4>
                    <p>Thời gian: 2-3 ngày làm việc</p>
                    <p>Phí vận chuyển: <strong style="color: #2ecc71;">Miễn phí</strong> (với đơn từ 500.000đ)</p>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71; margin: 10px 0 5px 0;">⚡ Giao hàng nhanh</h4>
                    <p>Thời gian: 1 ngày</p>
                    <p>Phí vận chuyển: <strong>50.000đ</strong></p>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71; margin: 10px 0 5px 0;">🚀 Giao hàng cùng ngày</h4>
                    <p>Thời gian: 2 giờ (cho HCM)</p>
                    <p>Phí vận chuyển: <strong>100.000đ</strong></p>
                </div>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p>📞 <strong>Liên hệ:</strong> 0385217674</p>
                <p>📧 <strong>Email:</strong> support@giaythethao.com</p>
            `
        },
        payment: {
            title: 'Phương thức Thanh toán',
            content: `
                <h3>Những cách thanh toán được hỗ trợ</h3>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71;">💵 Thanh toán khi nhận hàng (COD)</h4>
                    <p>Thanh toán trực tiếp cho nhân viên giao hàng - Không có phí</p>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71;">🏦 Chuyển khoản ngân hàng</h4>
                    <p>Hỗ trợ các ngân hàng chính: Vietcombank, Agribank, VP Bank...</p>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71;">💳 Thẻ tín dụng/Debit</h4>
                    <p>Hỗ trợ Visa, Mastercard - Thanh toán an toàn 100%</p>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71;">📱 Ví điện tử</h4>
                    <p>Momo, ZaloPay, Airpay - Nhanh chóng tiện lợi</p>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71;">0️⃣ Trả góp 0%</h4>
                    <p>Áp dụng cho đơn hàng từ 3.000.000đ trở lên</p>
                </div>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p>⏱️ Hoàn tiền được xử lý trong <strong>3-5 ngày làm việc</strong></p>
            `
        },
        return: {
            title: 'Chính sách Đổi trả',
            content: `
                <h3>Thông tin đổi trả sản phẩm</h3>
                <div style="background: #f0f8f0; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <h4 style="color: #2ecc71; margin-top: 0;">📋 Điều kiện đổi trả</h4>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>Đổi trả trong <strong>7 ngày</strong> kể từ khi nhận hàng</li>
                        <li>Sản phẩm <strong>chưa sử dụng</strong>, còn tag & hóa đơn</li>
                        <li>Hộp sản phẩm nguyên vẹn, không rách nát</li>
                    </ul>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71;">💰 Phí vận chuyển</h4>
                    <p>• Nếu sản phẩm lỗi: <strong>Chúng tôi chịu</strong></p>
                    <p>• Nếu khách đổi: <strong>Khách hàng chịu</strong></p>
                </div>
                <div style="margin: 15px 0;">
                    <h4 style="color: #2ecc71;">🛡️ Bảo hành sản phẩm</h4>
                    <p><strong>12 tháng</strong> cho các lỗi kỹ thuật từ nhà sản xuất</p>
                </div>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p>✉️ <strong>Liên hệ:</strong> support@giaythethao.com hoặc 0385217674</p>
            `
        }
    };

    const info = supportInfo[type];
    if (info) {
        showModal(info.title, info.content);
    }
}

// About Information Display with Modal
function showAboutInfo(type) {
    const aboutInfo = {
        intro: {
            title: 'Giới thiệu về Giày Thể Thao',
            content: `
                <h3>🏪 Giày Thể Thao - Cửa hàng chuyên bán giày thể thao chính hãng</h3>
                <p style="margin: 15px 0; line-height: 1.8;">
                    Chúng tôi là một cửa hàng hàng đầu chuyên kinh doanh giày thể thao từ các thương hiệu nổi tiếng trên thế giới như Nike, Adidas, Puma, New Balance...
                </p>
                <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <h4 style="color: #2ecc71; margin-top: 0;">✓ Cam kết của chúng tôi</h4>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>✅ Sản phẩm <strong>100% chính hãng</strong>, có chứng chỉ</li>
                        <li>✅ Giá <strong>cạnh tranh nhất</strong> thị trường</li>
                        <li>✅ Dịch vụ khách hàng <strong>tuyệt vời</strong></li>
                        <li>✅ Giao hàng <strong>nhanh & an toàn</strong></li>
                        <li>✅ Bảo hành & hỗ trợ <strong>tốt nhất</strong></li>
                    </ul>
                </div>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <h4 style="margin-top: 0;">📍 Địa chỉ liên hệ</h4>
                    <p><strong>Showroom chính:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
                    <p><strong>Hotline:</strong> 0385217674</p>
                    <p><strong>Email:</strong> info@giaythethao.com</p>
                </div>
            `
        },
        news: {
            title: 'Tin tức mới nhất',
            content: `
                <h3>📰 Những tin tức mới nhất từ Giày Thể Thao</h3>
                <div style="border-left: 3px solid #2ecc71; padding-left: 15px; margin: 15px 0;">
                    <h4 style="margin: 10px 0;">30/04/2024 - SALE KHỦNG - Giảm giá đến 50%</h4>
                    <p>Chương trình sale lớn nhất năm với hàng ngàn sản phẩm giảm giá sâu. Đừng bỏ lỡ!</p>
                </div>
                <div style="border-left: 3px solid #2ecc71; padding-left: 15px; margin: 15px 0;">
                    <h4 style="margin: 10px 0;">25/04/2024 - Ra mắt bộ sưu tập mùa hè 2024</h4>
                    <p>Những thiết kế mới, màu sắc tươi sáng và công nghệ mới nhất từ các thương hiệu hàng đầu</p>
                </div>
                <div style="border-left: 3px solid #2ecc71; padding-left: 15px; margin: 15px 0;">
                    <h4 style="margin: 10px 0;">20/04/2024 - Chương trình khách hàng thân thiết</h4>
                    <p>Tích điểm khi mua hàng, đổi lấy voucher và ưu đãi độc quyền</p>
                </div>
                <div style="border-left: 3px solid #2ecc71; padding-left: 15px; margin: 15px 0;">
                    <h4 style="margin: 10px 0;">15/04/2024 - Giao hàng miễn phí toàn quốc</h4>
                    <p>Áp dụng cho tất cả đơn hàng từ 500.000đ trở lên</p>
                </div>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p style="text-align: center;">
                    <a href="#" style="color: #2ecc71; text-decoration: none; font-weight: bold;">→ Xem tất cả tin tức tại blog.giaythethao.com</a>
                </p>
            `
        },
        recruit: {
            title: 'Tuyển dụng - Cơ hội nghề nghiệp',
            content: `
                <h3>🎯 Cơ hội làm việc tại Giày Thể Thao</h3>
                <p style="margin: 15px 0;">Chúng tôi luôn tìm kiếm những nhân tài có đam mê, trung thực và yêu thích lĩnh vực bán lẻ</p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <h4 style="color: #2ecc71; margin-top: 0;">📍 Các vị trí tuyển dụng</h4>
                    <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 3px;">
                        <p style="margin: 5px 0;"><strong>🟢 Nhân viên bán hàng</strong> - Toàn quốc (20 vị trí)</p>
                    </div>
                    <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 3px;">
                        <p style="margin: 5px 0;"><strong>🟢 Nhân viên kho</strong> - TP.HCM (5 vị trí)</p>
                    </div>
                    <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 3px;">
                        <p style="margin: 5px 0;"><strong>🟢 Nhân viên IT</strong> - TP.HCM (3 vị trí)</p>
                    </div>
                    <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 3px;">
                        <p style="margin: 5px 0;"><strong>🟢 Nhân viên NVVP</strong> - TP.HCM (2 vị trí)</p>
                    </div>
                </div>
                <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <h4 style="color: #2ecc71; margin-top: 0;">✅ Yêu cầu</h4>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>Có kỹ năng công việc tốt</li>
                        <li>Trung thực và chuyên nghiệp</li>
                        <li>Yêu thích lĩnh vực bán lẻ</li>
                        <li>Khả năng giao tiếp tốt</li>
                    </ul>
                </div>
                <div style="background: #fff3e0; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <h4 style="color: #f57c00; margin-top: 0;">📩 Ứng tuyển ngay</h4>
                    <p><strong>Email:</strong> hr@giaythethao.com</p>
                    <p><strong>Hotline:</strong> 0385217674</p>
                    <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
                </div>
            `
        }
    };

    const info = aboutInfo[type];
    if (info) {
        showModal(info.title, info.content);
    }
}

// Show Modal Function
function showModal(title, content) {
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modalBody');
    
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <div style="padding: 20px;">
                <h2 style="color: #2ecc71; margin-bottom: 20px; border-bottom: 2px solid #2ecc71; padding-bottom: 10px;">${ title }</h2>
                <div style="font-size: 14px; line-height: 1.8; color: #333;">
                    ${ content }
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    }
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Filter by category from footer
function filterByCategory(category) {
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => link.classList.remove('active'));
    
    const selectedLink = document.querySelector(`.category-link[data-category="${category}"]`);
    if (selectedLink) {
        selectedLink.classList.add('active');
    }

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        }
    });

    // Scroll to products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
