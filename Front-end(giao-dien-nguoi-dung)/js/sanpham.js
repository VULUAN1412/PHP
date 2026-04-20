// Product Data
const allProducts = [
    // Giày chạy bộ
    { id: 1, name: 'Giày chạy bộ Nike Ari Winflo 9', price: 1290000, oldPrice: 1720000, category: 'chay-bo', image: '../images/giaychaybo/giày chạy bộ nike ari winflo 9.jpg', discount: null, status: 'new' },
    { id: 2, name: 'Giày chạy bộ Adidas', price: 1500000, oldPrice: 2000000, category: 'chay-bo', image: '../images/giaychaybo/giày chạy bộ nam adidas.jpg', discount: -25, status: 'sale' },
    { id: 3, name: 'Giày chạy bộ Altra Running', price: 1800000, oldPrice: 2200000, category: 'chay-bo', image: '../images/giaychaybo/giày chạy bộ altra running.jpg', discount: null, status: 'bestseller' },
    { id: 4, name: 'Giày chạy bộ Nam Saucony', price: 2100000, oldPrice: 2800000, category: 'chay-bo', image: '../images/giaychaybo/giày chạy bộ nam saucony endorphin pro 4.jpg', discount: null, status: 'new' },
    { id: 5, name: 'Giày chạy bộ Nam JF190.1', price: 1650000, oldPrice: 2200000, category: 'chay-bo', image: '../images/giaychaybo/giày chạy bộ nam jf190.1.jpg', discount: null, status: 'bestseller' },
    { id: 6, name: 'Giày chạy bộ Nam Nike', price: 1450000, oldPrice: 1900000, category: 'chay-bo', image: '../images/giaychaybo/giày chạy bộ nam nike.jpg', discount: null, status: 'new' },
    { id: 7, name: 'Giày chạy bộ Nữ Adidas', price: 1380000, oldPrice: 1850000, category: 'chay-bo', image: '../images/giaychaybo/giày chạy bộ nữ adidas.jpg', discount: -20, status: 'sale' },
    { id: 8, name: 'Giày chạy bộ Lining ARST081', price: 1200000, oldPrice: 1600000, category: 'chay-bo', image: '../images/giaychaybo/lining arst081.jpg', discount: null, status: 'new' },

    // Giày thể thao
    { id: 9, name: 'Giày thể thao Nike Ari Max', price: 950000, oldPrice: 1280000, category: 'the-thao', image: '../images/giaythethao/nike ari max.jpg', discount: null, status: 'new' },
    { id: 10, name: 'Giày thể thao Adidas Galaxy 6', price: 1150000, oldPrice: 1540000, category: 'the-thao', image: '../images/giaythethao/adidas galaxy 6.jpg', discount: null, status: 'bestseller' },
    { id: 11, name: 'Giày thể thao Lacoste', price: 1350000, oldPrice: 1750000, category: 'the-thao', image: '../images/giaythethao/lacoste bayliss.jpg', discount: null, status: 'new' },
    { id: 12, name: 'Giày thể thao Nike Zoom', price: 1450000, oldPrice: 1900000, category: 'the-thao', image: '../images/giaythethao/nike Ari zoom.jpg', discount: null, status: 'bestseller' },
    { id: 13, name: 'Giày thể thao Nam SN11', price: 1100000, oldPrice: 1500000, category: 'the-thao', image: '../images/giaythethao/giay-the-thao-nam-sn11.jpg', discount: null, status: 'new' },
    { id: 14, name: 'Giày thể thao Louis Vuitton', price: 2800000, oldPrice: 3500000, category: 'the-thao', image: '../images/giaythethao/louis vuitton.jpg', discount: null, status: 'bestseller' },
    { id: 15, name: 'Giày thể thao MLB Chunky Liner', price: 1280000, oldPrice: 1700000, category: 'the-thao', image: '../images/giaythethao/mlb chunky liner.jpg', discount: -15, status: 'sale' },
    { id: 16, name: 'Giày thể thao Under Armour', price: 1350000, oldPrice: 1800000, category: 'the-thao', image: '../images/giaythethao/under armour.jpg', discount: null, status: 'new' },

    // Giày đá bóng
    { id: 17, name: 'Giày đá bóng Predator 20.3', price: 1400000, oldPrice: 2000000, category: 'da-bong', image: '../images/giaydabong/predator 20.3.jpg', discount: -30, status: 'sale' },
    { id: 18, name: 'Giày đá bóng Adidas F50', price: 1550000, oldPrice: 2100000, category: 'da-bong', image: '../images/giaydabong/adidas f50 pro.jpg', discount: null, status: 'new' },
    { id: 19, name: 'Giày đá bóng Kamito TA11 FG', price: 850000, oldPrice: 1200000, category: 'da-bong', image: '../images/giaydabong/kamito ta11 fg.jpg', discount: null, status: 'bestseller' },
    { id: 20, name: 'Giày đá bóng Mizuno', price: 1200000, oldPrice: 1600000, category: 'da-bong', image: '../images/giaydabong/mizuno.jpg', discount: null, status: 'new' },
    { id: 21, name: 'Giày đá bóng Biti\'s Hunter Football HSM003600', price: 980000, oldPrice: 1350000, category: 'da-bong', image: '../images/giaydabong/biti\'s hunter football hsm003600.jpg', discount: -25, status: 'sale' },
    { id: 22, name: 'Giày đá bóng Kamito TA11 Pro', price: 1100000, oldPrice: 1500000, category: 'da-bong', image: '../images/giaydabong/kamito ta11 pro.jpg', discount: null, status: 'new' },
    { id: 23, name: 'Giày đá bóng Lining YSTU036', price: 1050000, oldPrice: 1450000, category: 'da-bong', image: '../images/giaydabong/lining ystu036.jpg', discount: null, status: 'bestseller' },
    { id: 24, name: 'Giày đá bóng Wika Tiger X', price: 1180000, oldPrice: 1600000, category: 'da-bong', image: '../images/giaydabong/wika tiger X.jpg', discount: null, status: 'new' },

    // Giày thời trang
    { id: 25, name: 'Giày thời trang Sneaker Elly', price: 850000, oldPrice: 1140000, category: 'thoi-trang', image: '../images/giaythoitrang/sneaker elly.jpg', discount: null, status: 'new' },
    { id: 26, name: 'Giày thời trang Retro Leather', price: 750000, oldPrice: 1150000, category: 'thoi-trang', image: '../images/giaythoitrang/retro leadther.jpg', discount: -35, status: 'sale' },
    { id: 27, name: 'Giày thời trang Sneaker Puma Skye', price: 920000, oldPrice: 1300000, category: 'thoi-trang', image: '../images/giaythoitrang/sneaker puma skye.jpg', discount: null, status: 'bestseller' },
    { id: 28, name: 'Giày thời trang Retro Oxford', price: 680000, oldPrice: 980000, category: 'thoi-trang', image: '../images/giaythoitrang/retro oxford.jpg', discount: null, status: 'new' },
    { id: 29, name: 'Giày thời trang Adidas Advantage', price: 780000, oldPrice: 1050000, category: 'thoi-trang', image: '../images/giaythoitrang/adidas advantage.jpg', discount: -25, status: 'sale' },
    { id: 30, name: 'Giày thời trang Nam', price: 890000, oldPrice: 1200000, category: 'thoi-trang', image: '../images/giaythoitrang/giày thời trang nam.jpg', discount: null, status: 'new' },
    { id: 31, name: 'Giày thời trang Lining', price: 850000, oldPrice: 1150000, category: 'thoi-trang', image: '../images/giaythoitrang/lining.jpg', discount: null, status: 'bestseller' },
    { id: 32, name: 'Giày Sneaker', price: 750000, oldPrice: 1050000, category: 'thoi-trang', image: '../images/giaythoitrang/sneaker.jpg', discount: null, status: 'new' },

    // Phụ kiện
    { id: 33, name: 'Phụ kiện - Tất Yonex', price: 280000, oldPrice: 470000, category: 'phu-kien', image: '../images/phukiengiay/tất yonex.jpg', discount: -40, status: 'sale' },
    { id: 34, name: 'Phụ kiện - Tất Yonex Cổ Cao', price: 320000, oldPrice: 500000, category: 'phu-kien', image: '../images/phukiengiay/tất cổ cao yonex.jpg', discount: null, status: 'new' },
    { id: 35, name: 'Phụ kiện - Lót Giày Safety', price: 250000, oldPrice: 380000, category: 'phu-kien', image: '../images/phukiengiay/lót giày safety.jpg', discount: null, status: 'bestseller' },
    { id: 36, name: 'Phụ kiện - Miến Giữ Form', price: 180000, oldPrice: 300000, category: 'phu-kien', image: '../images/phukiengiay/miến giữ form giày.jpg', discount: null, status: 'new' },
    { id: 37, name: 'Phụ kiện - Lót Giày Cao Su Bluewind', price: 220000, oldPrice: 350000, category: 'phu-kien', image: '../images/phukiengiay/lót giày cao su bluewind.jpg', discount: -30, status: 'sale' },
    { id: 38, name: 'Phụ kiện - Vạch Sọc', price: 150000, oldPrice: 250000, category: 'phu-kien', image: '../images/phukiengiay/phukiengiay vạch sọc.jpg', discount: null, status: 'new' },
];

// Variables
let currentPage = 1;
const itemsPerPage = 12;
let filteredProducts = [...allProducts];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupFilters();
    updateCartBadge();
    
    // Check for search query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        performSearch(searchQuery);
    }
});

// Setup Filters
function setupFilters() {
    // All products radio button
    const categoryFilterAll = document.querySelector('.category-filter-all');
    if (categoryFilterAll) {
        categoryFilterAll.addEventListener('change', function() {
            if (this.checked) {
                document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
                applyFilters();
            }
        });
    }

    // Category filters
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                document.querySelector('.category-filter-all').checked = false;
            }
            applyFilters();
        });
    });

    // Price filters
    document.querySelectorAll('.price-filter').forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    // Status filters
    document.querySelectorAll('.status-filter').forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    // Sort
    document.getElementById('sortBy').addEventListener('change', function() {
        sortProducts(this.value);
    });

    // Reset filter
    document.querySelector('.reset-filter').addEventListener('click', resetFilters);
}

// Apply Filters
function applyFilters() {
    filteredProducts = [...allProducts];

    // Category filter
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value)
        .filter(val => val !== 'all');

    if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
        filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    const selectedPrice = document.querySelector('.price-filter:checked').value;
    if (selectedPrice !== 'all') {
        filteredProducts = filteredProducts.filter(p => {
            if (selectedPrice === '0-500') return p.price < 500000;
            if (selectedPrice === '500-1000') return p.price >= 500000 && p.price <= 1000000;
            if (selectedPrice === '1000-2000') return p.price > 1000000 && p.price <= 2000000;
            if (selectedPrice === '2000') return p.price > 2000000;
            return true;
        });
    }

    // Status filter
    const selectedStatus = document.querySelector('.status-filter:checked').value;
    if (selectedStatus !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.status === selectedStatus);
    }

    currentPage = 1;
    loadProducts();
}

// Sort Products
function sortProducts(sortType) {
    switch(sortType) {
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            filteredProducts.sort((a, b) => {
                const statusOrder = { bestseller: 0, new: 1, sale: 2 };
                return (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3);
            });
            break;
        default:
            filteredProducts = [...allProducts];
    }
    currentPage = 1;
    loadProducts();
}

// Load Products
function loadProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = filteredProducts.slice(start, end);

    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1;">
                <i class="fas fa-inbox"></i>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Vui lòng thay đổi bộ lọc để tìm sản phẩm</p>
            </div>
        `;
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    productsToShow.forEach(product => {
        const discountBadge = product.discount ? `<div class="discount-badge">${product.discount}%</div>` : '';
        const productHTML = `
            <div class="product-card">
                <div class="product-image" style="cursor: pointer;" onclick="viewProduct(${product.id})">
                    ${discountBadge}
                    <img src="${product.image}" alt="${product.name}" style="cursor: pointer;">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price.toLocaleString('vi-VN')}<span>đ</span></p>
                    ${product.discount ? `<p class="product-price-old">${product.oldPrice.toLocaleString('vi-VN')}đ</p>` : ''}
                    <button class="product-button" onclick="viewProduct(${product.id})">Xem chi tiết</button>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productHTML;
    });

    // Update product count
    document.getElementById('productCount').textContent = filteredProducts.length;

    // Load pagination
    loadPagination();
}

// Load Pagination
function loadPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Previous button
    if (currentPage > 1) {
        pagination.innerHTML += `<button onclick="goToPage(${currentPage - 1})">← Trước</button>`;
    }

    // Page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        pagination.innerHTML += `<button onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            pagination.innerHTML += `<span>...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            pagination.innerHTML += `<span class="active">${i}</span>`;
        } else {
            pagination.innerHTML += `<button onclick="goToPage(${i})">${i}</button>`;
        }
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pagination.innerHTML += `<span>...</span>`;
        }
        pagination.innerHTML += `<button onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    // Next button
    if (currentPage < totalPages) {
        pagination.innerHTML += `<button onclick="goToPage(${currentPage + 1})">Tiếp →</button>`;
    }
}

// Go to Page
function goToPage(page) {
    currentPage = page;
    loadProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset Filters
function resetFilters() {
    document.querySelector('.category-filter-all').checked = true;
    document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
    document.querySelectorAll('.price-filter').forEach(cb => cb.checked = cb.value === 'all');
    document.querySelectorAll('.status-filter').forEach(cb => cb.checked = cb.value === 'all');
    document.getElementById('sortBy').value = 'default';

    filteredProducts = [...allProducts];
    currentPage = 1;
    loadProducts();
}

// View Product
function viewProduct(productId) {
    window.location.href = 'Thongtingiay.html?id=' + productId;
}

// Update Cart Badge
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

// Search Functionality
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

function performSearch(passedTerm) {
    const searchTerm = passedTerm ? passedTerm.toLowerCase().trim() : searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        return;
    }

    filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );

    currentPage = 1;
    loadProducts();
    if (searchInput) {
        searchInput.value = '';
    }
}

// Dropdown Menu Toggle
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const menu = dropdown.querySelector('.dropdown-menu');
        
        dropdowns.forEach(other => {
            if (other !== dropdown) {
                const otherMenu = other.querySelector('.dropdown-menu');
                if (otherMenu) {
                    otherMenu.style.display = 'none';
                }
            }
        });
        
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
});

// Dropdown menu items - filter by category
document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const text = this.textContent.trim();
        
        // Map category text to category value
        const categoryMap = {
            'Giày chạy bộ': 'chay-bo',
            'Giày bóng đá': 'da-bong',
            'Giày thể thao': 'the-thao',
            'Giày thời trang': 'thoi-trang',
            'Phụ kiện': 'phu-kien'
        };
        
        const categoryValue = categoryMap[text];
        
        if (categoryValue) {
            // Reset all category filters
            document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
            
            // Check only the selected category
            const selectedCheckbox = document.querySelector(`.category-filter[value="${categoryValue}"]`);
            if (selectedCheckbox) {
                selectedCheckbox.checked = true;
            }
            
            // Apply filter
            applyFilters();
            
            // Close dropdown
            const dropdown = this.closest('.dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
            
            // Scroll to products
            document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

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
