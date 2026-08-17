// ============================================================
// data.js — DỮ LIỆU SẢN PHẨM & HÀM DÙNG CHUNG
// TV1 tạo, cả nhóm dùng. Không sửa trực tiếp.
// ============================================================

const PRODUCTS_DATA = [
  // ── HOA TƯƠI ──────────────────────────────────
  {
    id: 1, name: "Hoa Hồng Nhung Đỏ", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi", price: 580000, oldPrice: 720000, 
    img: "img/Hoa hồng nhung đỏ.jpg",
    desc: "Bó hoa hồng nhung đỏ cao cấp gồm 12 bông tươi thơm ngát. Phù hợp tặng người thân, bạn bè.",
    badge: "Bán chạy", stock: 50, rating: 4.8, reviews: 128
  },
  {
    id: 2, name: "Hoa Mẫu Đơn", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi", price: 1950000, oldPrice: 2400000,
    img: "img/Hoa mẫu đơn.jpg",
    desc: "Bó hoa mẫu đơn hồng nhập khẩu thượng hạng, biểu tượng của sự sang trọng, thịnh vượng và cát tường.",
    badge: "Mới", stock: 15, rating: 4.9, reviews: 42
  },
  {
    id: 3, name: "Hoa Tulip", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi", price: 890000, oldPrice: 1050000,
    img: "img/Hoa tulip.jpg",
    desc: "Bó hoa tulip hồng ngọt ngào và tràn đầy sức sống. Biểu tượng cho tình yêu tràn đầy sinh khí.",
    badge: "Hot", stock: 25, rating: 4.7, reviews: 58
  },
  {
    id: 4, name: "Hoa Cẩm Tú Cầu Xanh", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi", price: 450000, oldPrice: 550000,
    img: "img/Hoa cẩm tú cầu xanh.jpg",
    desc: "Bó hoa cẩm tú cầu xanh dịu mát, mang đến vẻ thanh lịch và tươi mát quyến rũ. ",
    badge: null, stock: 28, rating: 4.6, reviews: 45
  },
  {
    id: 5, name: "Hoa Hướng Dương Vàng", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi", price: 350000, oldPrice: 420000,
    img: "img/Hoa hướng dương vàng.jpg",
    desc: "Bó hướng dương tươi rực rỡ, biểu tượng của niềm vui và sự tích cực. ",
    badge: "Tươi mới", stock: 45, rating: 4.6, reviews: 138
  },
  {
    id: 6, name: "Hoa Tulip Hà Lan", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi", price: 1050000, oldPrice: 1250000,
    img: "img/Hoa tulip hà lan.jpg",
    desc: "Hoa tulip nhập khẩu Hà Lan, màu sắc rực rỡ đa dạng. Biểu tượng của sự hoàn hảo và tình yêu vĩnh cửu.",
    badge: "Nhập khẩu", stock: 18, rating: 4.9, reviews: 112
  },
  {
    id: 7, name: "Hoa Hồng Phấn", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi",  price: 520000, oldPrice: 650000,
    img: "img/Hoa hồng phấn.jpg",
    desc: "Bó hồng phấn nhẹ nhàng, tinh tế. Thích hợp tặng mẹ, chị, bạn gái nhân dịp đặc biệt.",
    badge: null, stock: 40, rating: 4.7, reviews: 95
  },
  {
    id: 8, name: "Hoa Ly Trắng", category: "hoa-tuoi",
    categoryLabel: "Hoa Tươi",  price: 420000, oldPrice: null,
    img: "img/Hoa ly trắng.jpg",
    desc: "Bó hoa ly trắng thanh khiết, thơm ngát dịu dàng. Bó gồm 5 cành ly to đẹp.",
    badge: "Thơm nhất", stock: 30, rating: 4.8, reviews: 74
  },

  // ── HOA THEO DỊP ──────────────────────────────
  {
    id: 9, name: "Hoa Sinh Nhật Mix Màu", category: "hoa-dip",
    categoryLabel: "Hoa Theo Dịp", price: 380000, oldPrice: 450000,
    img: "img/Hoa sinh nhật mix màu.jpg",
    desc: "Bó hoa sinh nhật đặc biệt mix many loại hoa tươi đầy màu sắc. Kèm thiệp miễn phí.",
    badge: "Phổ biến", stock: 40, rating: 4.7, reviews: 156
  },
  {
    id: 10, name: "Hoa Khai Trương Đỏ", category: "hoa-dip",
    categoryLabel: "Hoa Theo Dịp", price: 500000, oldPrice: null,
    img: "img/Hoa khai trương đỏ.jpg",
    desc: "Lẵng hoa khai trương đỏ rực rỡ, mang ý nghĩa may mắn và thịnh vượng. Kích thước lớn.",
    badge: null, stock: 25, rating: 4.8, reviews: 73
  },
  {
    id: 11, name: "Hoa Tốt Nghiệp Ý Nghĩa", category: "hoa-dip",
    categoryLabel: "Hoa Theo Dịp", price: 320000, oldPrice: 380000,
    img: "img/Hoa tốt nghiệp ý nghĩa.jpg",
    desc: "Bó hoa chúc mừng tốt nghiệp, thiết kế trang trọng và ý nghĩa. Kèm thiệp viết tay.",
    badge: "Ý nghĩa", stock: 30, rating: 4.7, reviews: 67
  },
  {
    id: 12, name: "Hoa 8/3 Đặc Biệt", category: "hoa-dip",
    categoryLabel: "Hoa Theo Dịp", price: 350000, oldPrice: 420000,
    img: "img/Hoa 8-3 đặc biệt.jpg",
    desc: "Bó hoa 8/3 đặc biệt dành tặng người phụ nữ bạn yêu thương. Thiết kế lãng mạn.",
    badge: "Hot", stock: 60, rating: 4.9, reviews: 210
  },

  // ── HOA CƯỚI ──────────────────────────────────
  {
    id: 13, name: "Hoa Cưới Cô Dâu Trắng", category: "hoa-cuoi",
    categoryLabel: "Hoa Cưới", price: 650000, oldPrice: 800000,
    img: "img/Hoa cưới cô dâu trắng.jpg",
    desc: "Bó hoa cưới sang trọng, kết hợp hoa hồng trắng và hoa baby. Thiết kế theo yêu cầu.",
    badge: "VIP", stock: 15, rating: 5.0, reviews: 89
  },
  {
    id: 14, name: "Hoa Cài Áo Chú Rể", category: "hoa-cuoi",
    categoryLabel: "Hoa Cưới", price: 150000, oldPrice: null,
    img: "img/Hoa cài áo chú rể.jpg",
    desc: "Hoa cài áo chú rể tinh tế, sang trọng. Phối hợp hoàn hảo với bó hoa cô dâu.",
    badge: null, stock: 50, rating: 4.8, reviews: 56
  },
  {
    id: 15, name: "Hoa Trang Trí Hôn Trường", category: "hoa-cuoi",
    categoryLabel: "Hoa Cưới", price: 1200000, oldPrice: 1500000,
    img: "img/Hoa trang trí hôn trường.jpg",
    desc: "Bộ hoa trang trí hôn trường đầy đủ, tạo không gian lễ cưới lung linh và ấn tượng.",
    badge: "Trọn gói", stock: 10, rating: 4.9, reviews: 42
  },

  // ── HOA GIẢ ───────────────────────────────────
  {
    id: 16, name: "Hoa Giả Lụa Cao Cấp", category: "hoa-gia",
    categoryLabel: "Hoa Giả", price: 350000, oldPrice: 400000,
    img: "img/Hoa giả lụa cao cấp.jpg",
    desc: "Bình hoa lụa giả cao cấp, màu sắc tinh tế, bền đẹp vĩnh cửu. Trang trí nhà cửa, văn phòng.",
    badge: "Sale", stock: 100, rating: 4.4, reviews: 201
  },
  {
    id: 17, name: "Hoa Giả Vintage Decor", category: "hoa-gia",
    categoryLabel: "Hoa Giả", price: 280000, oldPrice: null,
    img: "img/Hoa giả vintage decor.webp",
    desc: "Bình hoa giả phong cách vintage, màu pastel nhẹ nhàng. Thích hợp phòng ngủ, bàn làm việc.",
    badge: null, stock: 60, rating: 4.3, reviews: 94
  },
  {
    id: 18, name: "Cây Hoa Giả Để Bàn", category: "hoa-gia",
    categoryLabel: "Hoa Giả", price: 180000, oldPrice: 220000,
    img: "img/Cây hoa giả để bàn.jpg",
    desc: "Cây hoa giả nhỏ xinh để bàn, tươi mát cả năm không cần tưới nước. Nhiều màu sắc.",
    badge: "Tiết kiệm", stock: 80, rating: 4.5, reviews: 167
  }
];

/* ---------- TỰ ĐỘNG XỬ LÝ ĐƯỜNG DẪN ẢNH CỤC BỘ (CHẠY OFFLINE) ---------- */
function getImagePath(imgSrc) {
  if (!imgSrc) return "img/no-image.jpg";
  // Base64 hoặc link mạng → giữ nguyên
  if (imgSrc.startsWith("http") || imgSrc.startsWith("data:")) {
    return imgSrc;
  }
  // Dò theo tên file HTML hiện tại thay vì pathname
  const currentFile = window.location.href;
  const inSubFolder = currentFile.includes("/pages/");
  if (inSubFolder) {
    if (imgSrc.startsWith("../")) return imgSrc;
    return "../" + imgSrc;
  }
  return imgSrc;
}

/* ---------- FORMAT TIỀN ---------- */
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}

/* ---------- GIỎ HÀNG (LocalStorage) ---------- */
function getCart() {
  return JSON.parse(localStorage.getItem('wbh_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('wbh_cart', JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(productId, qty = 1) {
  const allProducts = getProducts();
  const p = allProducts.find(x => x.id === productId);
  if (!p) return;
  const cart = getCart();
  const found = cart.find(x => x.id === productId);
  if (found) found.qty += qty;
  else cart.push({ id: p.id, name: p.name, price: p.price, img: p.img, qty });
  saveCart(cart);
  showToast(`Đã thêm "${p.name}" vào giỏ hàng!`, 'success');
}
function updateCartBadge() {
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

/* ---------- SESSION ---------- */
function getLoggedUser() {
  const s = sessionStorage.getItem('wbh_user');
  return s ? JSON.parse(s) : null;
}
function logout() {
  sessionStorage.removeItem('wbh_user');
  showToast('Đã đăng xuất!', 'info');
  const isSubPage = window.location.pathname.includes('/pages/');
  setTimeout(() => {
    window.location.href = isSubPage ? '../WebsiteShopHoa.html' : 'WebsiteShopHoa.html';
  }, 900);
}
function handleLogout(e) {
  if (e) e.preventDefault();
  logout();
}

/* ---------- NAVBAR AUTH ---------- */
function updateNavbarAuth() {
  // Hỗ trợ cả 2 id đang dùng trong các file HTML
  const authArea = document.getElementById('navbar-auth-area')
                || document.getElementById('nav-login-area');
  if (!authArea) return;

  const user = getLoggedUser();
  const isSubPage = window.location.pathname.includes('/pages/');
  const adminPath = isSubPage ? 'admin.html' : 'pages/admin.html';
  const loginPath = isSubPage ? 'dangnhap.html' : 'pages/dangnhap.html';
  const homePath  = isSubPage ? '../WebsiteShopHoa.html' : 'WebsiteShopHoa.html';

  if (user) {
    const isAdmin = user.email === 'admin@gmail.com';
    // Lấy chữ cái đầu tên để hiện avatar
    const initials = user.name.trim().split(' ').map(w => w[0]).slice(-2).join('').toUpperCase();

    authArea.innerHTML = `
      <div class="dropdown">
        <button class="btn-user-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
          style="display:flex;align-items:center;gap:8px;background:var(--primary-ultra);border:1.5px solid var(--primary-light);
                 border-radius:var(--radius-pill);padding:6px 14px 6px 8px;cursor:pointer;font-family:var(--font-heading);
                 font-size:0.85rem;font-weight:600;color:var(--dark);transition:var(--transition);"
          onmouseover="this.style.background='var(--primary-light)'"
          onmouseout="this.style.background='var(--primary-ultra)'">
          <span style="width:30px;height:30px;border-radius:50%;background:var(--primary);color:white;
                       display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0;">
            ${initials}
          </span>
          <span style="max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${user.name}</span>
          <i class="bi bi-chevron-down" style="font-size:0.7rem;color:var(--gray);"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm" style="border:1px solid var(--border);border-radius:12px;padding:6px;min-width:190px;">
          <li>
            <div style="padding:10px 14px 8px;border-bottom:1px solid var(--border);margin-bottom:4px;">
              <div style="font-size:0.7rem;color:var(--gray);text-transform:uppercase;letter-spacing:.8px;">Đã đăng nhập</div>
              <div style="font-weight:700;font-size:0.9rem;color:var(--dark);margin-top:2px;">${user.name}</div>
              <div style="font-size:0.75rem;color:var(--gray);">${user.email}</div>
            </div>
          </li>
          ${isAdmin ? `
          <li>
            <a class="dropdown-item d-flex align-items-center gap-2 px-3 py-2" href="${adminPath}"
               style="border-radius:8px;font-size:0.85rem;font-weight:600;color:#c8506a;">
              <i class="bi bi-person-gear"></i> Trang Admin
            </a>
          </li>
          <li><hr class="dropdown-divider my-1"></li>` : ''}
          <li>
            <a class="dropdown-item d-flex align-items-center gap-2 px-3 py-2" href="#"
               onclick="handleLogout(event)"
               style="border-radius:8px;font-size:0.85rem;color:var(--gray);">
              <i class="bi bi-box-arrow-right"></i> Đăng xuất
            </a>
          </li>
        </ul>
      </div>`;
  } else {
    authArea.innerHTML = `
      <a href="${loginPath}" class="btn-primary-custom" style="padding:8px 20px;font-size:0.84rem;">
        <i class="bi bi-person"></i> Đăng nhập
      </a>`;
  }
}

/* ---------- TOAST ---------- */
function showToast(msg, type = 'info') {
  let wrap = document.getElementById('toast-container');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-container';
    wrap.className = 'toast-container-custom';
    document.body.appendChild(wrap);
  }
  const icons = { success: 'bi-check-circle-fill', error: 'bi-x-circle-fill', info: 'bi-info-circle-fill' };
  const toast = document.createElement('div');
  toast.className = `toast-custom ${type}`;
  toast.innerHTML = `<i class="bi ${icons[type] || icons.info}"></i> ${msg}`;
  wrap.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateNavbarAuth();
  // Navbar scroll effect
  const nav = document.querySelector('.navbar-custom');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));
  }
  // Active nav link
  const path = location.pathname;
  document.querySelectorAll('.nav-link-custom[href]').forEach(a => {
    const href = a.getAttribute('href').replace('../', '');
    if (href && path.endsWith(href)) a.classList.add('active');
  });
});

/* ---------- ĐỒNG BỘ DỮ LIỆU THỜI GIAN THỰC (cross-tab) ----------
   Khi admin lưu/xóa/sửa sản phẩm ở tab khác, trang chủ & sản phẩm
   sẽ tự động render lại mà không cần F5.                           */
window.addEventListener('storage', (e) => {
  if (e.key === 'wbh_products_updated') {
    // Trang chủ: re-render khu vực sản phẩm nổi bật
    const featuredGrid = document.getElementById('featured-products');
    if (featuredGrid && typeof renderFeaturedProducts === 'function') {
      renderFeaturedProducts();
    }
    // Trang sản phẩm: re-render danh sách
    if (typeof renderProductListing === 'function') {
      renderProductListing();
    }
  }
});
// Hàm lấy danh sách sản phẩm hiện tại (Ưu tiên lấy từ kho lưu trữ)
function getProducts() {
  const localData = localStorage.getItem('wbh_products');
  if (!localData) {
    // Lần đầu tiên chạy, nạp dữ liệu mặc định từ PRODUCTS_DATA vào localStorage
    localStorage.setItem('wbh_products', JSON.stringify(PRODUCTS_DATA));
    return PRODUCTS_DATA;
  }
  return JSON.parse(localData);
}

// Hàm lưu lại danh sách sản phẩm sau khi Thêm/Xóa/Sửa
function saveProducts(productsArray) {
  localStorage.setItem('wbh_products', JSON.stringify(productsArray));
}