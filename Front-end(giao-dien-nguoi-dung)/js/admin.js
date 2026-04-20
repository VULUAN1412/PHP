// Admin Dashboard JavaScript
// Data Management System

class AdminDashboard {
    constructor() {
        this.users = this.loadFromLocalStorage('users') || [
            { id: 1, name: 'John M', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
            { id: 2, name: 'Sarah R', email: 'sarah@example.com', role: 'Editor', status: 'active', joinDate: '2024-02-20' },
            { id: 3, name: 'Michael A', email: 'michael@example.com', role: 'User', status: 'inactive', joinDate: '2024-03-10' },
        ];
        
        this.products = this.loadFromLocalStorage('products') || [
            { id: 1, name: 'Giày chạy bộ A', price: 1290000, stock: 45, status: 'active' },
            { id: 2, name: 'Giày thể thao B', price: 950000, stock: 32, status: 'active' },
            { id: 3, name: 'Giày tập Gym C', price: 1150000, stock: 0, status: 'out' },
        ];
        
        this.orders = this.loadFromLocalStorage('orders') || [
            { id: 2024001, user: 'John M', total: 1290000, status: 'completed', date: '2024-10-12' },
            { id: 2024002, user: 'Sarah R', total: 950000, status: 'pending', date: '2024-10-20' },
            { id: 2024003, user: 'Michael A', total: 2240000, status: 'processing', date: '2024-10-25' },
        ];
        
        this.nextUserId = 4;
        this.nextProductId = 4;
        this.nextOrderId = 2024004;
    }
    
    saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    loadFromLocalStorage(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    
    // User Management
    addUser(user) {
        user.id = this.nextUserId++;
        this.users.push(user);
        this.saveToLocalStorage('users', this.users);
        return user;
    }
    
    updateUser(id, updates) {
        const user = this.users.find(u => u.id === id);
        if (user) {
            Object.assign(user, updates);
            this.saveToLocalStorage('users', this.users);
        }
        return user;
    }
    
    deleteUser(id) {
        this.users = this.users.filter(u => u.id !== id);
        this.saveToLocalStorage('users', this.users);
    }
    
    // Product Management
    addProduct(product) {
        product.id = this.nextProductId++;
        this.products.push(product);
        this.saveToLocalStorage('products', this.products);
        return product;
    }
    
    updateProduct(id, updates) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            Object.assign(product, updates);
            this.saveToLocalStorage('products', this.products);
        }
        return product;
    }
    
    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
        this.saveToLocalStorage('products', this.products);
    }
    
    // Order Management
    addOrder(order) {
        order.id = this.nextOrderId++;
        this.orders.push(order);
        this.saveToLocalStorage('orders', this.orders);
        return order;
    }
    
    updateOrder(id, updates) {
        const order = this.orders.find(o => o.id === id);
        if (order) {
            Object.assign(order, updates);
            this.saveToLocalStorage('orders', this.orders);
        }
        return order;
    }
    
    deleteOrder(id) {
        this.orders = this.orders.filter(o => o.id !== id);
        this.saveToLocalStorage('orders', this.orders);
    }
    
    // Statistics
    getTotalUsers() {
        return this.users.length;
    }
    
    getActiveUsers() {
        return this.users.filter(u => u.status === 'active').length;
    }
    
    getTotalRevenue() {
        return this.orders.reduce((sum, o) => sum + o.total, 0);
    }
    
    getTotalOrders() {
        return this.orders.length;
    }
}

// Initialize Dashboard
const dashboard = new AdminDashboard();

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initializeCharts();

    // Modal functionality
    setupModals();

    // Sidebar toggle
    setupSidebarToggle();

    // Menu item active state
    setupMenuItems();
    
    // Setup form handlers
    setupFormHandlers();
    
    // Update KPI values
    updateKPICards();
});

// Initialize charts using Chart.js
function initializeCharts() {
    // Monthly Chart
    const monthlyCtx = document.getElementById('monthlyChart');
    if (monthlyCtx) {
        new Chart(monthlyCtx, {
            type: 'line',
            data: {
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Users',
                    data: [30000, 45000, 52000, 62000, 75000, 95000],
                    borderColor: '#00bcd4',
                    backgroundColor: 'rgba(0, 188, 212, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#2a2f3f'
                        },
                        ticks: {
                            color: '#9ca3af'
                        }
                    },
                    x: {
                        grid: {
                            color: '#2a2f3f'
                        },
                        ticks: {
                            color: '#9ca3af'
                        }
                    }
                }
            }
        });
    }

    // Pie Chart
    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: ['Nike', 'Adidas', 'Puma', 'Other'],
                datasets: [{
                    data: [30, 25, 20, 25],
                    backgroundColor: [
                        '#00bcd4',
                        '#4caf50',
                        '#ff9800',
                        '#9c27b0'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#9ca3af'
                        }
                    }
                }
            }
        });
    }
}

// Modal Setup
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        // Close modal when clicking outside (on the background)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Button handlers to open modals
    document.addEventListener('click', (e) => {
        // Example: you can add data attributes to buttons to open specific modals
        // For demo purposes, these would be implemented when connected to actual UI
    });
}

// Sidebar Toggle
function setupSidebarToggle() {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}

// Menu Navigation - Show/Hide Pages
function setupMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            menuItems.forEach(mi => mi.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get the page name from the menu item
            const page = item.textContent.trim().toLowerCase();
            
            // Show corresponding page
            showPage(page);
        });
    });
}

function showPage(pageType) {
    const content = document.getElementById('dashboardContent');
    let html = '';
    
    if (pageType.includes('bảng')) {
        html = getDashboardHTML();
    } else if (pageType.includes('người')) {
        html = getUsersHTML();
    } else if (pageType.includes('sản')) {
        html = getProductsHTML();
    } else if (pageType.includes('đơn')) {
        html = getOrdersHTML();
    } else if (pageType.includes('phân')) {
        html = getAnalyticsHTML();
    } else if (pageType.includes('báo')) {
        html = getReportsHTML();
    } else if (pageType.includes('cài')) {
        html = getSettingsHTML();
    } else if (pageType.includes('tin')) {
        html = getMessagesHTML();
    }
    
    content.innerHTML = html;
    
    // Initialize charts if on dashboard page
    if (pageType.includes('bảng')) {
        setTimeout(initializeCharts, 100);
    }
}

// Dashboard Page
function getDashboardHTML() {
    return `
        <div class="welcome-section">
            <h1>Chào mừng trở lại, Devoyni</h1>
            <p>Dưới đây là thông tin về cửa hàng của bạn hôm nay</p>
        </div>
        
        <div class="kpi-cards">
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-label">Tổng người dùng</span>
                    <i class="fas fa-arrow-up"></i>
                </div>
                <div class="kpi-value">${dashboard.getTotalUsers()}</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-label">Doanh thu</span>
                    <i class="fas fa-arrow-up"></i>
                </div>
                <div class="kpi-value">${dashboard.getTotalRevenue().toLocaleString('vi-VN')}₫</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-label">Phiên hoạt động</span>
                    <i class="fas fa-arrow-down"></i>
                </div>
                <div class="kpi-value">${dashboard.getTotalOrders()}</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-label">Tỷ lệ chuyển đổi</span>
                </div>
                <div class="kpi-value">${((dashboard.getTotalOrders() / dashboard.getTotalUsers()) * 100).toFixed(1)}%</div>
            </div>
        </div>
        
        <div class="charts-section">
            <div class="chart-container">
                <h3>Tăng trưởng người dùng hàng tháng</h3>
                <div class="chart-placeholder">
                    <canvas id="monthlyChart"></canvas>
                </div>
            </div>
            <div class="chart-container">
                <h3>Phân phối doanh số</h3>
                <div class="chart-placeholder">
                    <canvas id="pieChart"></canvas>
                </div>
            </div>
        </div>
        
        <div class="recent-activity">
            <h3>Hoạt động gần đây</h3>
            <table class="activity-table">
                <tr>
                    <td><span class="status badge-success">Hoàn thành</span></td>
                    <td>Đơn hàng #2024-001 hoàn thành</td>
                    <td>12 Tháng 10, 2024</td>
                </tr>
                <tr>
                    <td><span class="status badge-warning">Đang xử lý</span></td>
                    <td>Đăng ký người dùng mới</td>
                    <td>10 Tháng 10, 2024</td>
                </tr>
                <tr>
                    <td><span class="status badge-info">Đang kiểm tra</span></td>
                    <td>Xác minh thanh toán đang diễn ra</td>
                    <td>8 Tháng 10, 2024</td>
                </tr>
            </table>
        </div>
    `;
}

// Users Page
function getUsersHTML() {
    let rows = dashboard.users.map(user => `
        <tr>
            <td><strong>${user.name}</strong></td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><span class="status badge-${user.status === 'active' ? 'success' : 'warning'}">${user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}</span></td>
            <td>${user.joinDate}</td>
            <td>
                <button class="btn-icon" onclick="editUser(${user.id})" title="Chỉnh sửa"><i class="fas fa-edit"></i></button>
                <button class="btn-icon btn-danger" onclick="deleteUser(${user.id})" title="Xóa"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    return `
        <div class="page-header">
            <h2>Quản lý người dùng</h2>
            <button class="btn btn-primary" onclick="openCreateUserModal()"><i class="fas fa-plus"></i> Thêm người dùng</button>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Vai trò</th>
                        <th>Trạng thái</th>
                        <th>Ngày tham gia</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

// Edit User Modal
function editUser(userId) {
    const user = dashboard.users.find(u => u.id === userId);
    if (!user) return;
    
    const modal = document.getElementById('createUserModal');
    const header = modal.querySelector('.modal-header h3');
    const inputs = modal.querySelectorAll('.form-input');
    const submitBtn = modal.querySelector('.modal-footer .btn-primary');
    
    header.textContent = 'Chỉnh sửa người dùng';
    inputs[0].value = user.name;
    inputs[1].value = user.email;
    inputs[2].value = user.role;
    inputs[3].value = user.password || '';
    inputs[4].value = user.status;
    
    submitBtn.textContent = 'Cập nhật người dùng';
    submitBtn.onclick = function() {
        handleUpdateUser(userId);
    };
    
    modal.style.display = 'flex';
}

// Handle Update User
function handleUpdateUser(userId) {
    const modal = document.getElementById('createUserModal');
    const inputs = modal.querySelectorAll('.form-input');
    
    const fullName = inputs[0].value;
    const email = inputs[1].value;
    const role = inputs[2].value;
    const status = inputs[4].value;
    
    if (!fullName || !email) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    
    dashboard.updateUser(userId, {
        name: fullName,
        email: email,
        role: role,
        status: status
    });
    
    alert('Cập nhật người dùng thành công!');
    
    // Reset form
    inputs.forEach(input => input.value = '');
    modal.querySelector('.modal-header h3').textContent = 'Tạo người dùng mới';
    modal.querySelector('.modal-footer .btn-primary').textContent = 'Tạo người dùng';
    modal.querySelector('.modal-footer .btn-primary').onclick = handleCreateUser;
    
    closeModal('createUserModal');
    showPage('người');
}

// Open Create User Modal
function openCreateUserModal() {
    const modal = document.getElementById('createUserModal');
    const header = modal.querySelector('.modal-header h3');
    const inputs = modal.querySelectorAll('.form-input');
    const submitBtn = modal.querySelector('.modal-footer .btn-primary');
    
    // Reset to create mode
    header.textContent = 'Tạo người dùng mới';
    inputs.forEach(input => input.value = '');
    submitBtn.textContent = 'Tạo người dùng';
    submitBtn.onclick = handleCreateUser;
    
    modal.style.display = 'flex';
}

// Products Page
function getProductsHTML() {
    let rows = dashboard.products.map(product => `
        <tr>
            <td><strong>${product.name}</strong></td>
            <td>${product.price.toLocaleString('vi-VN')}₫</td>
            <td>${product.stock}</td>
            <td><span class="status badge-${product.status === 'active' ? 'success' : 'warning'}">${product.status === 'active' ? 'Còn hàng' : 'Hết hàng'}</span></td>
            <td>
                <button class="btn-icon" onclick="editProduct(${product.id})" title="Chỉnh sửa"><i class="fas fa-edit"></i></button>
                <button class="btn-icon btn-danger" onclick="deleteProduct(${product.id})" title="Xóa"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    return `
        <div class="page-header">
            <h2>Quản lý sản phẩm</h2>
            <button class="btn btn-primary" onclick="openCreateProductModal()"><i class="fas fa-plus"></i> Thêm sản phẩm</button>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Kho</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

// Orders Page
function getOrdersHTML() {
    let rows = dashboard.orders.map(order => `
        <tr>
            <td>#${order.id}</td>
            <td>${order.user}</td>
            <td>${order.total.toLocaleString('vi-VN')}₫</td>
            <td><span class="status badge-${getStatusColor(order.status)}">${getStatusText(order.status)}</span></td>
            <td>${order.date}</td>
            <td>
                <button class="btn-icon" onclick="viewOrder(${order.id})" title="Xem chi tiết"><i class="fas fa-eye"></i></button>
                <button class="btn-icon btn-danger" onclick="deleteOrder(${order.id})" title="Xóa"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    return `
        <div class="page-header">
            <h2>Quản lý đơn hàng</h2>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Mã đơn</th>
                        <th>Khách hàng</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th>Ngày</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

// Analytics Page
function getAnalyticsHTML() {
    return `
        <div class="page-header">
            <h2>Phân tích dữ liệu</h2>
        </div>
        <div class="analytics-grid">
            <div class="stat-card">
                <h3>Tổng doanh thu</h3>
                <p class="stat-value">${dashboard.getTotalRevenue().toLocaleString('vi-VN')}₫</p>
            </div>
            <div class="stat-card">
                <h3>Tổng đơn hàng</h3>
                <p class="stat-value">${dashboard.getTotalOrders()}</p>
            </div>
            <div class="stat-card">
                <h3>Tổng người dùng</h3>
                <p class="stat-value">${dashboard.getTotalUsers()}</p>
            </div>
            <div class="stat-card">
                <h3>Người dùng hoạt động</h3>
                <p class="stat-value">${dashboard.getActiveUsers()}</p>
            </div>
        </div>

        <div class="analytics-details-section">
            <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 18px; color: #fff;">📋 Chi tiết đơn hàng gần đây</h3>
            <table class="details-table">
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Khách hàng</th>
                        <th>Giá trị (₫)</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                    </tr>
                </thead>
                <tbody>
                    ${dashboard.orders.map(order => `
                        <tr>
                            <td><strong>#${order.id}</strong></td>
                            <td>${order.user}</td>
                            <td style="color: #00bcd4; font-weight: bold;">${order.total.toLocaleString('vi-VN')}</td>
                            <td>
                                <span class="status-badge ${order.status === 'completed' ? 'status-completed' : order.status === 'pending' ? 'status-pending' : 'status-processing'}">
                                    ${order.status === 'completed' ? '✓ Hoàn thành' : order.status === 'pending' ? '⏳ Chờ xử lý' : '🔄 Đang xử lý'}
                                </span>
                            </td>
                            <td>${order.date}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 18px; color: #fff;">📦 Chi tiết sản phẩm</h3>
            <table class="details-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá (₫)</th>
                        <th>Tồn kho</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    ${dashboard.products.map(product => `
                        <tr>
                            <td><strong>#${product.id}</strong></td>
                            <td>${product.name}</td>
                            <td style="color: #00bcd4; font-weight: bold;">${product.price.toLocaleString('vi-VN')}</td>
                            <td>${product.stock}</td>
                            <td>
                                <span class="status-badge ${product.status === 'active' ? 'status-completed' : 'status-pending'}">
                                    ${product.status === 'active' ? '✓ Hoạt động' : product.status === 'out' ? '❌ Hết hàng' : '⏳ Chờ'}
                                </span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 18px; color: #fff;">👥 Chi tiết người dùng</h3>
            <table class="details-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Vai trò</th>
                        <th>Trạng thái</th>
                        <th>Ngày tham gia</th>
                    </tr>
                </thead>
                <tbody>
                    ${dashboard.users.map(user => `
                        <tr>
                            <td><strong>#${user.id}</strong></td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.role}</td>
                            <td>
                                <span class="status-badge ${user.status === 'active' ? 'status-completed' : 'status-pending'}">
                                    ${user.status === 'active' ? '✓ Hoạt động' : '⏸ Không hoạt động'}
                                </span>
                            </td>
                            <td>${user.joinDate}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Reports Page
function getReportsHTML() {
    return `
        <div style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: #fff; margin: 0;">Báo cáo</h2>
                <button onclick="openReportModal()" style="padding: 10px 20px; background: #00bcd4; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-plus"></i> Tạo báo cáo
                </button>
            </div>

            <!-- Report Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <!-- Sales Report Card -->
                <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); border: 1px solid #00bcd4; border-radius: 8px; padding: 20px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 8px 20px rgba(0,188,212,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; margin-bottom: 12px;">
                        <i class="fas fa-chart-bar" style="color: #00bcd4; font-size: 24px; margin-right: 10px;"></i>
                        <h3 style="color: #00bcd4; margin: 0; font-size: 16px;">Báo cáo bán hàng</h3>
                    </div>
                    <p style="color: #b0bec5; margin: 0 0 16px 0; font-size: 13px;">Xem chi tiết doanh số bán hàng hàng tháng</p>
                    <button onclick="viewReport('sales')" style="width: 100%; padding: 10px; background: rgba(0,188,212,0.2); color: #00bcd4; border: 1px solid #00bcd4; border-radius: 4px; cursor: pointer; font-weight: bold; transition: all 0.3s;">
                        <i class="fas fa-eye"></i> Xem báo cáo
                    </button>
                </div>

                <!-- User Activity Report Card -->
                <div style="background: linear-gradient(135deg, #2e1b47 0%, #3d2645 100%); border: 1px solid #00bcd4; border-radius: 8px; padding: 20px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 8px 20px rgba(0,188,212,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; margin-bottom: 12px;">
                        <i class="fas fa-users" style="color: #00bcd4; font-size: 24px; margin-right: 10px;"></i>
                        <h3 style="color: #00bcd4; margin: 0; font-size: 16px;">Báo cáo người dùng</h3>
                    </div>
                    <p style="color: #b0bec5; margin: 0 0 16px 0; font-size: 13px;">Thống kê hoạt động và tương tác người dùng</p>
                    <button onclick="viewReport('user-activity')" style="width: 100%; padding: 10px; background: rgba(0,188,212,0.2); color: #00bcd4; border: 1px solid #00bcd4; border-radius: 4px; cursor: pointer; font-weight: bold; transition: all 0.3s;">
                        <i class="fas fa-eye"></i> Xem báo cáo
                    </button>
                </div>

                <!-- Inventory Report Card -->
                <div style="background: linear-gradient(135deg, #1b472e 0%, #2d4a3a 100%); border: 1px solid #00bcd4; border-radius: 8px; padding: 20px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 8px 20px rgba(0,188,212,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; margin-bottom: 12px;">
                        <i class="fas fa-boxes" style="color: #00bcd4; font-size: 24px; margin-right: 10px;"></i>
                        <h3 style="color: #00bcd4; margin: 0; font-size: 16px;">Báo cáo kho</h3>
                    </div>
                    <p style="color: #b0bec5; margin: 0 0 16px 0; font-size: 13px;">Tính trạng tồn kho và sản phẩm</p>
                    <button onclick="viewReport('inventory')" style="width: 100%; padding: 10px; background: rgba(0,188,212,0.2); color: #00bcd4; border: 1px solid #00bcd4; border-radius: 4px; cursor: pointer; font-weight: bold; transition: all 0.3s;">
                        <i class="fas fa-eye"></i> Xem báo cáo
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Settings Page
function getSettingsHTML() {
    return `
        <div class="page-header">
            <h2>Cài đặt</h2>
        </div>
        <div class="settings-section">
            <div class="settings-group">
                <h3>Cài đặt chung</h3>
                <div class="setting-item">
                    <label>Tên cửa hàng</label>
                    <input type="text" value="Giày Thể Thao" class="form-input">
                </div>
                <div class="setting-item">
                    <label>Email liên hệ</label>
                    <input type="email" value="trungkhoa0209@gmail.com" class="form-input">
                </div>
                <div class="setting-item">
                    <label>Số điện thoại</label>
                    <input type="tel" value="0385217674" class="form-input">
                </div>
            </div>
            <div class="settings-group">
                <h3>Cài đặt bảo mật</h3>
                <div class="setting-item">
                    <label>Mật khẩu</label>
                    <input type="password" placeholder="••••••••" class="form-input">
                </div>
                <button class="btn btn-primary">Cập nhật mật khẩu</button>
            </div>
            <button class="btn btn-primary" style="margin-top: 20px;"><i class="fas fa-save"></i> Lưu cài đặt</button>
        </div>
    `;
}

// Messages Page
function getMessagesHTML() {
    return `
        <div class="page-header">
            <h2>Tin nhắn</h2>
        </div>
        <div class="messages-section">
            <div class="message-list">
                <div class="message-item">
                    <div class="message-header">
                        <strong>John M</strong>
                        <span class="message-date">10:45 SA</span>
                    </div>
                    <p class="message-content">Tôi muốn kiểm tra tình trạng đơn hàng của mình</p>
                </div>
                <div class="message-item">
                    <div class="message-header">
                        <strong>Sarah R</strong>
                        <span class="message-date">09:30 SA</span>
                    </div>
                    <p class="message-content">Có vấn đề trong quá trình thanh toán</p>
                </div>
                <div class="message-item">
                    <div class="message-header">
                        <strong>Michael A</strong>
                        <span class="message-date">08:15 SA</span>
                    </div>
                    <p class="message-content">Bạn có hỗ trợ đổi trả trong bao lâu?</p>
                </div>
            </div>
        </div>
    `;
}

// Helper functions
function getStatusColor(status) {
    if (status === 'completed') return 'success';
    if (status === 'pending') return 'warning';
    if (status === 'processing') return 'info';
    return 'warning';
}

function getStatusText(status) {
    if (status === 'completed') return 'Hoàn thành';
    if (status === 'pending') return 'Đang xử lý';
    if (status === 'processing') return 'Đang kiểm tra';
    return status;
}

function deleteUser(id) {
    const user = dashboard.users.find(u => u.id === id);
    if (user && confirm(`Bạn chắc chắn muốn xóa người dùng "${user.name}"?\n\nEmail: ${user.email}`)) {
        dashboard.deleteUser(id);
        showPage('người');
        alert('Xóa người dùng thành công!');
    }
}

// Edit Product Modal
function editProduct(productId) {
    const product = dashboard.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('createProductModal');
    const header = modal.querySelector('.modal-header h3');
    const inputs = modal.querySelectorAll('.form-input');
    const submitBtn = modal.querySelector('.modal-footer .btn-primary');
    
    header.textContent = 'Chỉnh sửa sản phẩm';
    inputs[0].value = product.name;
    inputs[1].value = product.price;
    inputs[2].value = product.stock;
    inputs[3].value = product.status;
    
    submitBtn.textContent = 'Cập nhật sản phẩm';
    submitBtn.onclick = function() {
        handleUpdateProduct(productId);
    };
    
    modal.style.display = 'flex';
}

// Handle Update Product
function handleUpdateProduct(productId) {
    const modal = document.getElementById('createProductModal');
    const inputs = modal.querySelectorAll('.form-input');
    
    const name = inputs[0].value;
    const price = parseFloat(inputs[1].value);
    const stock = parseInt(inputs[2].value);
    const status = inputs[3].value;
    
    if (!name || !price || stock < 0) {
        alert('Vui lòng điền đầy đủ thông tin hợp lệ');
        return;
    }
    
    dashboard.updateProduct(productId, {
        name: name,
        price: price,
        stock: stock,
        status: status
    });
    
    alert('Cập nhật sản phẩm thành công!');
    
    // Reset form
    inputs.forEach(input => input.value = '');
    modal.querySelector('.modal-header h3').textContent = 'Tạo sản phẩm mới';
    modal.querySelector('.modal-footer .btn-primary').textContent = 'Tạo sản phẩm';
    modal.querySelector('.modal-footer .btn-primary').onclick = handleCreateProduct;
    
    closeModal('createProductModal');
    showPage('sản');
}

// Open Create Product Modal
function openCreateProductModal() {
    const modal = document.getElementById('createProductModal');
    const header = modal.querySelector('.modal-header h3');
    const inputs = modal.querySelectorAll('.form-input');
    const submitBtn = modal.querySelector('.modal-footer .btn-primary');
    
    // Reset to create mode
    header.textContent = 'Tạo sản phẩm mới';
    inputs.forEach(input => input.value = '');
    submitBtn.textContent = 'Tạo sản phẩm';
    submitBtn.onclick = handleCreateProduct;
    
    modal.style.display = 'flex';
}

// Create Product Handler
function handleCreateProduct() {
    const modal = document.getElementById('createProductModal');
    const inputs = modal.querySelectorAll('.form-input');
    
    const name = inputs[0].value;
    const price = parseFloat(inputs[1].value);
    const stock = parseInt(inputs[2].value);
    const status = inputs[3].value;
    
    if (!name || !price || stock < 0) {
        alert('Vui lòng điền đầy đủ thông tin hợp lệ');
        return;
    }
    
    const newProduct = {
        name: name,
        price: price,
        stock: stock,
        status: status
    };
    
    dashboard.addProduct(newProduct);
    alert('Sản phẩm được tạo thành công!');
    
    // Reset form
    inputs.forEach(input => input.value = '');
    
    closeModal('createProductModal');
    showPage('sản');
    updateKPICards();
}

function deleteProduct(id) {
    const product = dashboard.products.find(p => p.id === id);
    if (product && confirm(`Bạn chắc chắn muốn xóa sản phẩm "${product.name}"?\n\nGiá: ${product.price.toLocaleString('vi-VN')}₫`)) {
        dashboard.deleteProduct(id);
        showPage('sản');
        alert('Xóa sản phẩm thành công!');
    }
}

function viewOrder(id) {
    const order = dashboard.orders.find(o => o.id === id);
    if (!order) return;
    
    const modal = document.getElementById('viewOrderModal');
    document.getElementById('orderDetailId').value = '#' + order.id;
    document.getElementById('orderDetailUser').value = order.user;
    document.getElementById('orderDetailTotal').value = order.total.toLocaleString('vi-VN') + '₫';
    document.getElementById('orderDetailStatus').value = getStatusText(order.status);
    document.getElementById('orderDetailDate').value = order.date;
    
    modal.style.display = 'flex';
}

function deleteOrder(id) {
    const order = dashboard.orders.find(o => o.id === id);
    if (order && confirm(`Bạn chắc chắn muốn xóa đơn hàng #${order.id}?\n\nKhách hàng: ${order.user}\nGiá: ${order.total.toLocaleString('vi-VN')}₫`)) {
        dashboard.deleteOrder(id);
        showPage('đơn');
        alert('Xóa đơn hàng thành công!');
    }
}

function generateSalesReport() {
    exportToCSV(dashboard.orders, 'báo_cáo_bán_hàng');
}

function generateUserReport() {
    exportToCSV(dashboard.users, 'báo_cáo_người_dùng');
}

function generateInventoryReport() {
    exportToCSV(dashboard.products, 'báo_cáo_kho');
}

// Utility functions for form handling
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff3b30';
            isValid = false;
        } else {
            input.style.borderColor = '#3a3f4f';
        }
    });

    return isValid;
}

// Form Handlers
function setupFormHandlers() {
    // Create User Form
    const createUserBtn = document.querySelector('a[href="#"]');
    if (createUserBtn) {
        createUserBtn.addEventListener('click', function(e) {
            if (this.textContent.includes('Người dùng')) {
                e.preventDefault();
                openModal('createUserModal');
            }
        });
    }
    
    // Form submission handlers
    const createUserForm = document.getElementById('createUserModal');
    if (createUserForm) {
        const submitBtn = createUserForm.querySelector('.btn-primary');
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                handleCreateUser();
            });
        }
    }
    
    const generateReportForm = document.getElementById('generateReportModal');
    if (generateReportForm) {
        const submitBtn = generateReportForm.querySelector('.btn-primary');
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                handleGenerateReport();
            });
        }
    }
    
    const supportForm = document.getElementById('supportModal');
    if (supportForm) {
        const submitBtn = supportForm.querySelector('.btn-primary');
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                handleSupportRequest();
            });
        }
    }
}

// Create User Handler
function handleCreateUser() {
    const modal = document.getElementById('createUserModal');
    const fullName = modal.querySelector('input[type="text"]').value;
    const email = modal.querySelector('input[type="email"]').value;
    const role = modal.querySelector('select').value;
    const password = modal.querySelector('input[type="password"]').value;
    
    if (!fullName || !email || !password) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    
    const newUser = {
        name: fullName,
        email: email,
        role: role,
        password: password,
        status: 'active',
        joinDate: new Date().toISOString().split('T')[0]
    };
    
    dashboard.addUser(newUser);
    alert('Người dùng được tạo thành công!');
    
    // Reset form
    modal.querySelectorAll('input').forEach(input => input.value = '');
    
    closeModal('createUserModal');
    showPage('người');
    updateKPICards();
}

// Generate Report Handler - Export edited data
function handleGenerateReport() {
    const modal = document.getElementById('generateReportModal');
    const formats = Array.from(modal.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    
    if (formats.length === 0) {
        alert('Vui lòng chọn ít nhất một định dạng');
        return;
    }
    
    if (currentReportData.length === 0) {
        alert('Không có dữ liệu để xuất');
        return;
    }
    
    let filename;
    
    if (currentReportType === 'user-activity') {
        filename = 'báo_cáo_người_dùng';
    } else if (currentReportType === 'sales') {
        filename = 'báo_cáo_bán_hàng';
    } else {
        filename = 'báo_cáo_kho';
    }
    
    // Export with edited data
    formats.forEach(format => {
        if (format === 'csv') {
            exportToCSV(currentReportData, filename);
        } else if (format === 'excel') {
            alert('Tính năng Excel sẽ được cập nhật sớm');
        } else if (format === 'pdf') {
            alert('Tính năng PDF sẽ được cập nhật sớm');
        }
    });
    
    alert('Báo cáo được xuất thành công!');
    closeModal('generateReportModal');
}

// Support Request Handler
function handleSupportRequest() {
    const modal = document.getElementById('supportModal');
    const subject = modal.querySelector('select').value;
    const description = modal.querySelector('textarea').value;
    const relatedTo = modal.querySelectorAll('input[type="text"]')[0].value;
    const requestedBy = modal.querySelectorAll('input[type="text"]')[1].value;
    
    if (!description) {
        alert('Vui lòng nhập mô tả');
        return;
    }
    
    const request = {
        subject: subject,
        description: description,
        relatedTo: relatedTo,
        requestedBy: requestedBy,
        date: new Date().toLocaleString('vi-VN'),
        priority: 'High'
    };
    
    // Save support request
    let requests = JSON.parse(localStorage.getItem('supportRequests') || '[]');
    requests.push(request);
    localStorage.setItem('supportRequests', JSON.stringify(requests));
    
    alert('Yêu cầu hỗ trợ đã được gửi thành công!');
    modal.querySelector('textarea').value = '';
    modal.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
    closeModal('supportModal');
}

// Tab Switching for Report Modal
function switchTab(tabName, button) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.style.display = 'none');
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.style.borderBottomColor = 'transparent';
        btn.style.color = '#999';
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
    
    // Activate button
    button.style.borderBottomColor = '#00bcd4';
    button.style.color = '#00bcd4';
}

// Switch to Preview Tab
function switchToPreviewTab() {
    const previewTab = document.querySelector('.tab-btn:nth-child(2)');
    switchTab('reportPreview', previewTab);
    generateReportPreview();
}

// Open Report Modal
function openReportModal() {
    const modal = document.getElementById('generateReportModal');
    modal.style.display = 'flex';
    
    // Reset form
    document.getElementById('reportType').value = 'user-activity';
    document.getElementById('reportStartDate').value = '';
    document.getElementById('reportEndDate').value = '';
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelector('input[value="csv"]').checked = true;
    
    // Switch to options tab
    const optionsTab = document.querySelector('.tab-btn:nth-child(1)');
    switchTab('reportOptions', optionsTab);
}

// View Specific Report
function viewReport(reportType) {
    const modal = document.getElementById('generateReportModal');
    modal.style.display = 'flex';
    
    // Set report type
    document.getElementById('reportType').value = reportType;
    
    // Set default date range (last 30 days)
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    document.getElementById('reportStartDate').value = startDate.toISOString().split('T')[0];
    document.getElementById('reportEndDate').value = endDate.toISOString().split('T')[0];
    
    // Reset checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelector('input[value="csv"]').checked = true;
    
    // Switch to preview tab and load report
    const previewTab = document.querySelector('.tab-btn:nth-child(2)');
    switchTab('reportPreview', previewTab);
    
    // Generate preview automatically
    setTimeout(() => {
        generateReportPreview();
    }, 100);
}

// Store current report data for editing
let currentReportData = [];
let currentReportType = '';

// Generate Report Preview with Editable Table
function generateReportPreview() {
    const modal = document.getElementById('generateReportModal');
    const reportType = modal.querySelector('#reportType').value;
    const startDate = modal.querySelector('#reportStartDate').value;
    const endDate = modal.querySelector('#reportEndDate').value;
    
    if (!startDate || !endDate) {
        alert('Vui lòng chọn khoảng thời gian');
        return;
    }
    
    let data;
    let title;
    
    currentReportType = reportType;
    
    if (reportType === 'user-activity') {
        data = dashboard.users;
        title = 'Báo Cáo Hoạt Động Người Dùng';
    } else if (reportType === 'sales') {
        data = dashboard.orders;
        title = 'Báo Cáo Bán Hàng';
    } else {
        data = dashboard.products;
        title = 'Báo Cáo Kho';
    }
    
    // Deep copy data for editing
    currentReportData = JSON.parse(JSON.stringify(data));
    
    // Update header
    document.getElementById('reportTitle').textContent = title;
    document.getElementById('reportDateRange').textContent = `Khoảng thời gian: ${startDate} đến ${endDate}`;
    document.getElementById('reportCreatedTime').textContent = `Tạo lúc: ${new Date().toLocaleString('vi-VN')}`;
    
    // Build editable table
    buildEditableTable(currentReportData);
    
    // Build summary stats
    buildReportSummary(currentReportData);
}

// Build Editable Table
function buildEditableTable(data) {
    const table = document.getElementById('reportTable');
    const thead = table.querySelector('thead tr');
    const tbody = table.querySelector('tbody');
    
    thead.innerHTML = '';
    tbody.innerHTML = '';
    
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="100%" style="padding: 20px; text-align: center; color: #999;">Không có dữ liệu</td></tr>';
        return;
    }
    
    // Build headers
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.style.cssText = 'padding: 8px; text-align: left; border: 1px solid #ddd; background: #f0f0f0;';
        thead.appendChild(th);
    });
    
    // Add checkbox header
    const thCheckbox = document.createElement('th');
    thCheckbox.style.cssText = 'padding: 8px; text-align: center; border: 1px solid #ddd; background: #f0f0f0; width: 30px;';
    thCheckbox.innerHTML = '<input type="checkbox" onchange="toggleAllCheckboxes(this)">';
    thead.appendChild(thCheckbox);
    
    // Build rows with editable cells
    data.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        tr.style.cssText = 'border-bottom: 1px solid #ddd; hover: background-color: #f9f9f9;';
        
        headers.forEach(header => {
            const td = document.createElement('td');
            const value = row[header];
            
            // Make numeric cells editable
            if (typeof value === 'number') {
                td.innerHTML = `<input type="number" value="${value}" style="width: 100%; padding: 6px; border: 1px solid #ddd; border-radius: 3px;" onchange="updateReportData(${rowIndex}, '${header}', this.value)">`;
            } else {
                td.innerHTML = `<input type="text" value="${value}" style="width: 100%; padding: 6px; border: 1px solid #ddd; border-radius: 3px;" onchange="updateReportData(${rowIndex}, '${header}', this.value)">`;
            }
            
            td.style.cssText = 'padding: 6px; border: 1px solid #ddd;';
            tr.appendChild(td);
        });
        
        // Add checkbox for row selection
        const tdCheckbox = document.createElement('td');
        tdCheckbox.style.cssText = 'padding: 6px; text-align: center; border: 1px solid #ddd;';
        tdCheckbox.innerHTML = `<input type="checkbox" data-row="${rowIndex}">`;
        tr.appendChild(tdCheckbox);
        
        tbody.appendChild(tr);
    });
}

// Update Report Data
function updateReportData(rowIndex, field, value) {
    if (currentReportData[rowIndex]) {
        // Try to convert to number if applicable
        const numValue = isNaN(value) ? value : parseFloat(value);
        currentReportData[rowIndex][field] = numValue;
    }
}

// Build Report Summary
function buildReportSummary(data) {
    const summary = document.getElementById('reportSummary');
    summary.innerHTML = '';
    
    const stats = {
        'Tổng bản ghi': data.length,
        'Hàng được cập nhật': data.length,
        'Trạng thái': 'Sẵn sàng xuất'
    };
    
    // Calculate specific stats based on report type
    if (currentReportType === 'sales') {
        const totalRevenue = data.reduce((sum, order) => sum + (order.total || 0), 0);
        stats['Tổng doanh thu'] = totalRevenue.toLocaleString('vi-VN') + '₫';
    } else if (currentReportType === 'inventory') {
        const totalStock = data.reduce((sum, product) => sum + (product.stock || 0), 0);
        stats['Tổng kho'] = totalStock;
    }
    
    Object.entries(stats).forEach(([key, value]) => {
        const statDiv = document.createElement('div');
        statDiv.style.cssText = 'padding: 12px; background: #f5f5f5; border-radius: 4px; border-left: 3px solid #00bcd4;';
        statDiv.innerHTML = `<div style="color: #999; font-size: 11px; margin-bottom: 4px;">${key}</div><div style="color: #333; font-weight: bold; font-size: 14px;">${value}</div>`;
        summary.appendChild(statDiv);
    });
}

// Delete Selected Rows
function deleteReportRow() {
    const selectedCheckboxes = document.querySelectorAll('input[data-row]:checked');
    if (selectedCheckboxes.length === 0) {
        alert('Vui lòng chọn dòng để xóa');
        return;
    }
    
    if (!confirm(`Xóa ${selectedCheckboxes.length} dòng?`)) {
        return;
    }
    
    // Remove in reverse order to maintain correct indices
    const rowsToDelete = Array.from(selectedCheckboxes)
        .map(cb => parseInt(cb.getAttribute('data-row')))
        .sort((a, b) => b - a);
    
    rowsToDelete.forEach(rowIndex => {
        currentReportData.splice(rowIndex, 1);
    });
    
    buildEditableTable(currentReportData);
    buildReportSummary(currentReportData);
}

// Add New Row
function addReportRow() {
    if (currentReportData.length === 0) {
        alert('Không có dữ liệu để sao chép cấu trúc');
        return;
    }
    
    const newRow = JSON.parse(JSON.stringify(currentReportData[0]));
    
    // Clear numeric values
    Object.keys(newRow).forEach(key => {
        if (typeof newRow[key] === 'number') {
            newRow[key] = 0;
        } else if (typeof newRow[key] === 'string') {
            newRow[key] = '';
        }
    });
    
    currentReportData.push(newRow);
    buildEditableTable(currentReportData);
    buildReportSummary(currentReportData);
}

// Refresh Report
function refreshReport() {
    generateReportPreview();
}

// Toggle All Checkboxes
function toggleAllCheckboxes(checkbox) {
    document.querySelectorAll('input[data-row]').forEach(cb => {
        cb.checked = checkbox.checked;
    });
}

// Update KPI Cards with real data
function updateKPICards() {
    const totalUsers = dashboard.getTotalUsers();
    const revenue = dashboard.getTotalRevenue();
    const totalSessions = dashboard.getTotalOrders();
    const conversionRate = ((totalSessions / totalUsers) * 100).toFixed(1);
    
    // Update KPI values
    const kpiValues = document.querySelectorAll('.kpi-value');
    if (kpiValues[0]) kpiValues[0].textContent = totalUsers.toLocaleString('vi-VN');
    if (kpiValues[1]) kpiValues[1].textContent = revenue.toLocaleString('vi-VN') + '₫';
    if (kpiValues[2]) kpiValues[2].textContent = totalSessions.toLocaleString('vi-VN');
    if (kpiValues[3]) kpiValues[3].textContent = conversionRate + '%';
}

// Export data functions
function exportToCSV(data, filename) {
    let csv = [];
    
    // Header
    if (data.length > 0) {
        csv.push(Object.keys(data[0]).join(','));
    }
    
    // Data
    data.forEach(row => {
        csv.push(Object.values(row).map(v => `"${v}"`).join(','));
    });
    
    downloadFile(csv.join('\n'), filename + '.csv', 'text/csv');
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}


// KPI Cards Click Handlers
document.addEventListener('click', function(e) {
    const kpiCard = e.target.closest('.kpi-card');
    if (kpiCard) {
        const label = kpiCard.querySelector('.kpi-label').textContent;
        handleKPIClick(label);
    }
});

// Handle KPI Card Clicks
function handleKPIClick(label) {
    if (label.includes('Tổng người dùng')) {
        showDetailedUsers();
    } else if (label.includes('Doanh thu')) {
        showRevenueDetails();
    } else if (label.includes('Phiên hoạt động')) {
        showSessionDetails();
    } else if (label.includes('Tỷ lệ chuyển đổi')) {
        showConversionDetails();
    }
}

// Dashboard Sections Display Functions
function showDashboard() {
    console.log('Hiển thị Bảng điều khiển');
    document.getElementById('dashboardContent').style.display = 'block';
    alert('Bảng điều khiển chính - Tổng số người dùng: ' + dashboard.users.length);
}

function showUsers() {
    console.log('Hiển thị danh sách Người dùng');
    const userList = dashboard.users.map(u => u.name + ' (' + u.role + ')').join('\n');
    alert('Danh sách người dùng:\n' + userList);
}

function showProducts() {
    console.log('Hiển thị danh sách Sản phẩm');
    const productList = dashboard.products.map(p => p.name + ' - ' + p.price.toLocaleString('vi-VN') + '₫').join('\n');
    alert('Danh sách sản phẩm:\n' + productList);
}

function showOrders() {
    console.log('Hiển thị danh sách Đơn hàng');
    const orderList = dashboard.orders.map(o => '#' + o.id + ' - ' + o.user + ' - ' + o.total.toLocaleString('vi-VN') + '₫').join('\n');
    alert('Danh sách đơn hàng:\n' + orderList);
}

function showAnalytics() {
    console.log('Hiển thị Phân tích');
    const totalRevenue = dashboard.orders.reduce((sum, o) => sum + o.total, 0);
    alert('Thống kê phân tích:\n- Tổng doanh thu: ' + totalRevenue.toLocaleString('vi-VN') + '₫\n- Số đơn hàng: ' + dashboard.orders.length);
}

function showReports() {
    console.log('Hiển thị Báo cáo');
    alert('Báo cáo - Thời gian: ' + new Date().toLocaleDateString('vi-VN'));
}

function showSettings() {
    console.log('Hiển thị Cài đặt');
    alert('Cài đặt hệ thống - Đang cập nhật');
}

function showMessages() {
    console.log('Hiển thị Tin nhắn');
    alert('Tin nhắn: Bạn có 3 tin nhắn mới');
}

// KPI Details Functions
function showDetailedUsers() {
    console.log('Chi tiết Người dùng');
    const userCount = dashboard.users.length;
    const activeUsers = dashboard.users.filter(u => u.status === 'active').length;
    const message = 'Chi tiết Người dùng:\n' +
        '- Tổng: ' + userCount + ' người\n' +
        '- Đang hoạt động: ' + activeUsers + ' người\n' +
        '- Không hoạt động: ' + (userCount - activeUsers) + ' người';
    alert(message);
}

function showRevenueDetails() {
    console.log('Chi tiết Doanh thu');
    const totalRevenue = dashboard.orders.reduce((sum, o) => sum + o.total, 0);
    const avgOrder = Math.round(totalRevenue / dashboard.orders.length);
    const message = 'Chi tiết Doanh thu:\n' +
        '- Tổng doanh thu: ' + totalRevenue.toLocaleString('vi-VN') + '₫\n' +
        '- Số đơn hàng: ' + dashboard.orders.length + '\n' +
        '- Đơn hàng trung bình: ' + avgOrder.toLocaleString('vi-VN') + '₫';
    alert(message);
}

function showSessionDetails() {
    console.log('Chi tiết Phiên hoạt động');
    alert('Chi tiết Phiên hoạt động:\n' +
        '- Phiên tối nay: 1.250\n' +
        '- Phiên hôm qua: 1.150\n' +
        '- Tăng: +8.7%');
}

function showConversionDetails() {
    console.log('Chi tiết Tỷ lệ chuyển đổi');
    const completedOrders = dashboard.orders.filter(o => o.status === 'completed').length;
    const conversionRate = Math.round((completedOrders / dashboard.orders.length) * 100);
    alert('Chi tiết Tỷ lệ chuyển đổi:\n' +
        '- Tỷ lệ hiện tại: ' + conversionRate + '%\n' +
        '- Đơn hàng hoàn thành: ' + completedOrders + '\n' +
        '- Mục tiêu tháng: 85%');
}

// Refresh data (simulate API call)
function refreshData() {
    updateKPICards();
    console.log('Dữ liệu được cập nhật');
}

// Set interval to refresh data every 5 minutes
setInterval(refreshData, 5 * 60 * 1000);
