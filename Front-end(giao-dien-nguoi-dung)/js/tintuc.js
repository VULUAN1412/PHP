// News data structure
const newsData = [
    {
        id: 1,
        emoji: '📢',
        date: '30/04/2024',
        title: 'Sale khủng - Giảm giá đến 50%',
        shortDescription: 'Cơ hội vàng để sở hữu những đôi giày yêu thích với mức giá ưu đãi nhất. Hạn chế thời gian, chỉ trong tháng 4.',
        fullContent: `Sale khủng - Giảm giá đến 50%

Cơ hội vàng để sở hữu những đôi giày yêu thích với mức giá ưu đãi nhất. Chúng tôi rất vui mừng thông báo rằng cửa hàng đang diễn ra chương trình khuyến mãi lớn nhất trong năm.

Chi tiết chương trình:
• Giảm giá từ 20% đến 50% cho toàn bộ các sản phẩm
• Áp dụng cho tất cả các danh mục: giày chạy bộ, giày thể thao, giày đá bóng, giày thời trang, phụ kiện
• Miễn phí giao hàng cho đơn hàng từ 300,000đ
• Tặng voucher 50,000đ cho đơn hàng trên 1,000,000đ

Thời gian diễn ra: Hạn chế thời gian, chỉ trong tháng 4. Đừng bỏ lỡ cơ hội "vàng" này!

Hãy truy cập cửa hàng ngay hôm nay để tìm những đôi giày yêu thích của bạn với giá tốt nhất.`
    },
    {
        id: 2,
        emoji: '👟',
        date: '25/04/2024',
        title: 'Ra mắt bộ sưu tập mùa hè 2024',
        shortDescription: 'Khám phá những mẫu giày thời trang, năng động phù hợp cho mùa hè sôi động của bạn với các thiết kế mới lạ.',
        fullContent: `Ra mắt bộ sưu tập mùa hè 2024

Chúng tôi tự hào giới thiệu bộ sưu tập giày mùa hè 2024 với những thiết kế tươi mới, năng động và phù hợp với phong cách sống hiện đại.

Các đặc điểm nổi bật:
• Thiết kế hiện đại, phong cách Việt kết hợp xu hướng quốc tế
• Chất liệu thoáng khí, nhẹ nhàng, thoải mái cho những ngày hè nóng
• Nhiều lựa chọn màu sắc: xanh dương, trắng, hồng, vàng
• Phù hợp cho mọi độ tuổi và hoạt động

Bộ sưu tập bao gồm:
- Giày sneaker cơ bản với các màu pastel
- Giày thể thao performance cho các hoạt động ngoài trời
- Giày lưới thoáng khí cho những ngày thời tiết khắc nghiệt
- Giày đúc một khúc với công nghệ cushioning hiện đại

Đừng bỏ lỡ cơ hội sở hữu những đôi giày mùa hè hoàn hảo!`
    },
    {
        id: 3,
        emoji: '💎',
        date: '20/04/2024',
        title: 'Chương trình khách hàng thân thiết',
        shortDescription: 'Tích điểm mỗi lần mua hàng và đổi lấy những phần quà hấp dẫn. Triết vô hạn từ hôm nay!',
        fullContent: `Chương trình khách hàng thân thiết

Để tri ân những khách hàng lâu năm, chúng tôi ra mắt chương trình khách hàng thân thiết với nhiều ưu đãi hấp dẫn.

Cách tham gia:
1. Đăng ký tài khoản trên website (hoặc sử dụng OTP khi mua hàng)
2. Bắt đầu tích điểm ngay từ đơn hàng đầu tiên
3. Tích điểm không giới hạn thời gian

Quy tắc tích điểm:
• Mỗi 1,000đ chi tiêu = 1 điểm
• Điểm sẽ được cộng ngay sau khi đơn hàng được giao
• Không giới hạn số điểm tích lũy

Các hạng ưu đãi:
• Bạc (0-5000 điểm): Giảm 5% cho mỗi đơn hàng
• Vàng (5000-10000 điểm): Giảm 10% + giao hàng miễn phí
• Kim Cương (trên 10000 điểm): Giảm 15% + ưu tiên hỗ trợ + quà tặng đặc biệt

Bắt đầu tích lũy và hưởng những quyền lợi độc quyền từ hôm nay!`
    },
    {
        id: 4,
        emoji: '🚚',
        date: '15/04/2024',
        title: 'Giao hàng miễn phí toàn quốc',
        shortDescription: 'Để tri ân khách hàng, chúng tôi cung cấp dịch vụ giao hàng miễn phí cho tất cả các đơn hàng từ 300.000đ.',
        fullContent: `Giao hàng miễn phí toàn quốc

Chúng tôi vui mừng thông báo rằng, từ ngày hôm nay, tất cả các đơn hàng từ 300.000đ sẽ được giao hàng miễn phí tại toàn quốc.

Thông tin chi tiết:
• Miễn phí vận chuyển cho đơn hàng từ 300.000đ trở lên
• Áp dụng tại tất cả các thành phố, huyện, xã trên toàn quốc
• Thời gian giao hàng: 2-3 ngày tính từ lúc đặt hàng

Thời gian giao hàng dự kiến:
• Hà Nội, TP.HCM: 1-2 ngày
• Các thành phố lớn: 2 ngày
• Các tỉnh khác: 3-5 ngày

Chất lượng dịch vụ:
• Bao bì cẩn thận, chuyên nghiệp
• Kiểm tra hàng trước khi giao
• Hỗ trợ đổi trả miễn phí nếu sản phẩm bị lỗi hoặc không đúng mô tả
• Có bảo hiểm vận chuyển cho tất cả đơn hàng

Để tận dụng chương trình này, hãy đặt hàng ngay hôm nay!`
    },
    {
        id: 5,
        emoji: '🏆',
        date: '10/04/2024',
        title: 'Giải thưởng cửa hàng bán hàng uy tín số 1',
        shortDescription: 'Giày Thể Thao vinh dự nhận được giải thưởng từ Hiệp hội Thương mại Điện tử Việt Nam năm 2024.',
        fullContent: `Giải thưởng cửa hàng bán hàng uy tín số 1

Chúng tôi vô cùng vinh dự và tự hào khi nhận được giải thưởng "Cửa hàng bán hàng uy tín số 1" từ Hiệp hội Thương mại Điện tử Việt Nam năm 2024.

Về giải thưởng:
• Được tổ chức bởi: Hiệp hội Thương mại Điện tử Việt Nam (VECOM)
• Tiêu chí đánh giá: Uy tín, chất lượng sản phẩm, dịch vụ khách hàng tốt
• Năm trao tặng: 2024
• Vị trí: Hạng I - Cửa hàng uy tín hàng đầu

Điều này là kết quả của:
• Sự nỗ lực của toàn thể đội ngũ cửa hàng
• Niềm tin và sự ủng hộ của các khách hàng thân yêu
• Cam kết cung cấp sản phẩm chất lượng và dịch vụ tốt nhất

Chúng tôi sẽ tiếp tục nỗ lực để duy trì danh hiệu này và phục vụ khách hàng ngày càng tốt hơn.

Cảm ơn vì sự tin tưởng!`
    },
    {
        id: 6,
        emoji: '🎁',
        date: '05/04/2024',
        title: 'Hộp quà tặng miễn phí cho mỗi đơn hàng',
        shortDescription: 'Mua sắm và nhận tặng một hộp quà đẹp kèm theo phiếu chúc mừng cho người thân yêu của bạn.',
        fullContent: `Hộp quà tặng miễn phí cho mỗi đơn hàng

Để tạo thêm niềm vui cho khách hàng, chúng tôi quyết định tặng miễn phí một hộp quà đẹp cho mỗi đơn hàng.

Chi tiết chương trình:
• Mỗi đơn hàng sẽ được kèm theo một hộp quà cao cấp
• Hộp quà được thiết kế đẹp mắt với logo cửa hàng
• Kèm theo một phiếu chúc mừng viết tay cá nhân hoá

Các loại hộp quà (tùy theo mức đơn hàng):
• Đơn hàng từ 300.000đ: Hộp quà nhỏ với dây ruy băng
• Đơn hàng từ 700.000đ: Hộp quà vừa với giấy dán vàng
• Đơn hàng từ 1.500.000đ: Hộp quà lớn sang trọng với túi đựng

Ý tưởng sử dụng:
• Tặng cho người thân, bạn bè, đồng nghiệp
• Dùng làm quà sinh nhật, kỷ niệm
• Gửi tặng khách hàng B2B

Chương trình áp dụng:
• Từ ngày 01/04/2024 cho đến khi kết thúc
• Áp dụng tất cả các đơn hàng được mua trên website hoặc tại cửa hàng

Hãy mua sắm ngay để nhận hộp quà tặng đặc biệt!`
    }
];

// Initialize news cards on page load
document.addEventListener('DOMContentLoaded', function() {
    setupNewsCardListeners();
});

// Setup click event listeners for news cards
function setupNewsCardListeners() {
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            openNewsModal(index + 1);
        });
    });
}

// Open news detail modal
function openNewsModal(newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (!news) return;

    const modal = document.getElementById('newsModal');
    const modalTitle = document.getElementById('newsModalTitle');
    const modalDate = document.getElementById('newsModalDate');
    const modalIcon = document.getElementById('newsModalIcon');
    const modalContent = document.getElementById('newsModalContent');

    modalIcon.textContent = news.emoji;
    modalTitle.textContent = news.title;
    modalDate.textContent = news.date;
    modalContent.textContent = news.fullContent;

    modal.style.display = 'flex';
}

// Close news modal
function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target === modal) {
        closeNewsModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeNewsModal();
    }
});
