// === LỚP BẢO MẬT: KIỂM TRA MẬT KHẨU ADMIN  ===
(function baoMatAdmin() {
  // Sử dụng sessionStorage để khi đã nhập đúng 1 lần, duyệt web trong tab đó sẽ không bị hỏi lại
  const daXacThực = sessionStorage.getItem("wbh_admin_logged");
  
  if (daXacThực !== "true") {
    const matKhau = prompt("Yêu cầu hệ thống: Vui lòng nhập mật khẩu Quản trị viên để truy cập:");
    
    if (matKhau === "admin123") {
      sessionStorage.setItem("wbh_admin_logged", "true");
      // Cho phép tiếp tục tải trang
    } else {
      alert("Sai mật khẩu! Bạn không có quyền truy cập vào khu vực này.");
      window.location.href = "index.html"; // Đẩy ngược người dùng về lại trang chủ công cộng
    }
  }
})();
// =============================================================

const CATEGORY_LABELS = {
  'hoa-tuoi': 'Hoa Tươi',
  'hoa-dip': 'Hoa Theo Dịp',
  'hoa-cuoi': 'Hoa Cưới',
  'hoa-gia': 'Hoa Giả'
};

let localProducts = [];
let isEditing = false;
let selectedImageBase64 = ""; // Biến lưu chuỗi Base64 của ảnh được chọn

document.addEventListener("DOMContentLoaded", () => {
  // Kích hoạt hiệu ứng cuộn trang AOS
  AOS.init({ duration: 800, once: true });

  // Đồng bộ dữ liệu gốc từ wbh_products
  const stored = localStorage.getItem("wbh_products");
  if (stored) {
    localProducts = JSON.parse(stored);
  } else {
    localProducts = PRODUCTS_DATA;
    localStorage.setItem("wbh_products", JSON.stringify(localProducts));
  }

  renderAdminTable();
  
  // Lắng nghe sự kiện chọn file để xử lý ảnh hiển thị Preview và chuyển đổi Base64
  const fileInput = document.getElementById("prod-img-file");
  if (fileInput) {
    fileInput.addEventListener("change", previewAdminImage);
  }

  document.getElementById("product-form").addEventListener("submit", saveProduct);
  document.getElementById("btn-cancel").addEventListener("click", resetForm);
});

// Hàm hiển thị xem trước ảnh và chuyển hóa thành dữ liệu Base64
function previewAdminImage() {
  const fileInput = document.getElementById("prod-img-file");
  const preview = document.getElementById("admin-img-preview");
  const placeholder = document.getElementById("preview-placeholder");

  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];

    // Chặn nếu file ảnh vượt quá 2MB để tránh làm tràn bộ nhớ LocalStorage công cộng
    if (file.size > 2 * 1024 * 1024) {
      showToast("Dung lượng ảnh quá lớn! Vui lòng chọn ảnh dưới 2MB.", "error");
      fileInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      selectedImageBase64 = e.target.result; // Lưu chuỗi Base64
      if (preview) {
        preview.src = e.target.result;
        preview.style.display = "block";
      }
      if (placeholder) {
        placeholder.style.display = "none";
      }
    };
    reader.readAsDataURL(file);
  }
}

function renderAdminTable() {
  const tbody = document.getElementById("admin-table-body");
  document.getElementById("total-count").textContent = `${localProducts.length} sản phẩm`;
  
  if (localProducts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center py-5 text-muted"><i class="bi bi-box-open d-block fs-2 mb-2"></i>Chưa có sản phẩm.</td></tr>`;
    return;
  }

  tbody.innerHTML = localProducts.map(p => {
    const imgSrc = typeof getImagePath === 'function' ? getImagePath(p.img) : p.img;
    // Nếu ảnh là Base64 thì dùng thẳng, nếu là đường dẫn file thì hiển thị icon hoa thay thế khi lỗi
    const imgTag = p.img && p.img.startsWith("data:")
      ? `<img src="${imgSrc}" alt="${p.name}" class="rounded border" style="width:44px;height:44px;object-fit:cover;">`
      : `<img src="${imgSrc}" alt="${p.name}" class="rounded border" style="width:44px;height:44px;object-fit:cover;"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div style="display:none;width:44px;height:44px;border-radius:6px;border:1px solid #ddd;
           background:#fff0f3;align-items:center;justify-content:center;font-size:1.3rem;">🌸</div>`;
    return `
    <tr>
      <td class="text-center">
        <div style="display:inline-flex;">${imgTag}</div>
      </td>
      <td>
        <div class="fw-bold text-dark small">${p.name}</div>
        ${p.badge ? `<span class="badge bg-danger" style="font-size:0.65rem; padding:2px 6px;">${p.badge}</span>` : ''}
      </td>
      <td><span class="text-secondary small">${p.categoryLabel || CATEGORY_LABELS[p.category]}</span></td>
      <td class="text-end fw-bold text-primary-c small">${formatPrice(p.price)}</td>
      <td class="text-center">
        <div class="d-flex justify-content-center gap-1">
          <button class="btn btn-sm btn-outline-primary border-0" onclick="startEdit(${p.id})"><i class="bi bi-pencil-square"></i></button>
          <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteProduct(${p.id})"><i class="bi bi-trash3"></i></button>
        </div>
      </td>
    </tr>
  `;
  }).join('');
}

function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById("prod-id").value;
  const name = document.getElementById("prod-name").value.trim();
  const price = parseInt(document.getElementById("prod-price").value);
  const oldPriceInput = document.getElementById("prod-old-price").value;
  const oldPrice = oldPriceInput ? parseInt(oldPriceInput) : null;
  const category = document.getElementById("prod-category").value;
  const badge = document.getElementById("prod-badge").value.trim() || null;
  const desc = document.getElementById("prod-desc").value.trim();

  if (isEditing) {
    localProducts = localProducts.map(p => {
      if (p.id === parseInt(id)) {
        // Nếu Admin không chọn file mới khi sửa, giữ nguyên đường dẫn ảnh cũ của sản phẩm đó
        const finalImg = selectedImageBase64 ? selectedImageBase64 : p.img;
        return { ...p, name, price, oldPrice, category, categoryLabel: CATEGORY_LABELS[category], badge, img: finalImg, desc };
      }
      return p;
    });
    showToast("Đã cập nhật thay đổi thành công!", "success");
  } else {
    // Nếu thêm mới mà quên chọn ảnh, gán ảnh mặc định của hệ thống
    const finalImg = selectedImageBase64 ? selectedImageBase64 : "img/no-image.jpg";
    const newProduct = {
      id: Date.now(),
      name, price, oldPrice, category, categoryLabel: CATEGORY_LABELS[category],
      badge, img: finalImg, desc, stock: 50, rating: 5.0, reviews: 0
    };
    localProducts.unshift(newProduct);
    showToast("Đã thêm sản phẩm thành công!", "success");
  }

  localStorage.setItem("wbh_products", JSON.stringify(localProducts));
  // Phát sự kiện để các tab khác (trang chủ, sản phẩm) tự làm mới
  localStorage.setItem("wbh_products_updated", Date.now().toString());
  resetForm();
  renderAdminTable();
}

function startEdit(id) {
  const p = localProducts.find(x => x.id === id);
  if (!p) return;

  isEditing = true;
  document.getElementById("form-title").innerHTML = `<i class="bi bi-pencil-square text-warning"></i> Chỉnh Sửa Sản Phẩm`;
  document.getElementById("btn-submit").className = "btn-primary-custom flex-grow-1 justify-content-center bg-warning border-0";
  document.getElementById("btn-submit").innerHTML = `<i class="bi bi-save"></i> Cập nhật ngay`;
  document.getElementById("btn-cancel").classList.remove("d-none");

  // Gỡ thuộc tính 'required' của ô chọn file khi sửa (để Admin có thể giữ lại ảnh cũ mà không bị ép chọn lại ảnh)
  document.getElementById("prod-img-file").removeAttribute("required");

  document.getElementById("prod-id").value = p.id;
  document.getElementById("prod-name").value = p.name;
  document.getElementById("prod-price").value = p.price;
  document.getElementById("prod-old-price").value = p.oldPrice || "";
  document.getElementById("prod-category").value = p.category;
  document.getElementById("prod-badge").value = p.badge || "";
  document.getElementById("prod-desc").value = p.desc;

  // Hiển thị ảnh hiện tại của sản phẩm lên khung xem trước khi bấm sửa
  const preview = document.getElementById("admin-img-preview");
  const placeholder = document.getElementById("preview-placeholder");
  
  if (p.img && p.img.startsWith("data:")) {
    // Ảnh Base64 → hiện trực tiếp, luôn hoạt động
    if (preview) { preview.src = p.img; preview.style.display = "block"; }
    if (placeholder) placeholder.style.display = "none";
  } else {
    // Ảnh đường dẫn cũ (img/...) → thử load, nếu lỗi hiện thông báo chọn ảnh mới
    const testImg = new Image();
    testImg.onload = function() {
      if (preview) { preview.src = testImg.src; preview.style.display = "block"; }
      if (placeholder) placeholder.style.display = "none";
    };
    testImg.onerror = function() {
      // Ảnh cũ không load được → hiện thông báo hướng dẫn
      if (preview) { preview.style.display = "none"; }
      if (placeholder) {
        placeholder.style.display = "block";
        placeholder.innerHTML = `
          <div style="text-align:center;color:#e05a7a;">
            <i class="bi bi-exclamation-triangle" style="font-size:1.5rem;display:block;margin-bottom:4px;"></i>
            <span style="font-size:0.8rem;font-weight:600;">Ảnh gốc không tìm thấy</span><br>
            <span style="font-size:0.75rem;color:#999;">Vui lòng chọn ảnh mới từ máy tính</span>
          </div>`;
      }
    };
    testImg.src = typeof getImagePath === 'function' ? getImagePath(p.img) : p.img;
  }
  
  selectedImageBase64 = ""; // Reset trạng thái chọn file mới khi bắt đầu sửa
  document.getElementById("prod-name").focus();
}

function deleteProduct(id) {
  const p = localProducts.find(x => x.id === id);
  if (!p) return;

  if (confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${p.name}"?`)) {
    localProducts = localProducts.filter(x => x.id !== id);
    localStorage.setItem("wbh_products", JSON.stringify(localProducts));
    localStorage.setItem("wbh_products_updated", Date.now().toString());
    showToast("Đã xóa sản phẩm khỏi hệ thống!", "info");
    renderAdminTable();
    if (isEditing && document.getElementById("prod-id").value == id) resetForm();
  }
}

function resetForm() {
  isEditing = false;
  document.getElementById("product-form").reset();
  document.getElementById("prod-id").value = "";
  document.getElementById("form-title").innerHTML = `<i class="bi bi-plus-circle-fill text-primary-c"></i> Thêm Sản Phẩm Mới`;
  document.getElementById("btn-submit").className = "btn-primary-custom flex-grow-1 justify-content-center";
  document.getElementById("btn-submit").innerHTML = `<i class="bi bi-check-lg"></i> Lưu sản phẩm`;
  document.getElementById("btn-cancel").classList.add("d-none");

  // Bật lại required cho ô file khi form quay về trạng thái Thêm sản phẩm mới
  document.getElementById("prod-img-file").setAttribute("required", "required");

  // Reset khung Preview ảnh về trạng thái trống ban đầu
  const preview = document.getElementById("admin-img-preview");
  const placeholder = document.getElementById("preview-placeholder");
  if (preview) {
    preview.src = "";
    preview.style.display = "none";
  }
  if (placeholder) {
    placeholder.style.display = "block";
    placeholder.innerHTML = `<i class="bi bi-image" style="font-size: 1.5rem; display: block; margin-bottom: 4px;"></i> Chưa có ảnh nào được chọn`;
  }
  selectedImageBase64 = ""; // Reset chuỗi ảnh tạm
}