// ====== SEARCH ======
function timSanPham() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(function(product) {
    let name = product.querySelector("h3").innerText.toLowerCase();

    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
// ====== GIỎ HÀNG ======
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("buy-btn")) {

    const product = e.target.closest(".product");
    const name = product.querySelector("h3").innerText;
    const color = product.querySelector(".color").value;
    const size = product.querySelector(".size").value;

    // ❌ chưa chọn
    if (!color || !size) {
      alert("Vui lòng chọn màu và size!");
      return;
    }

    // 👉 lưu cả thông tin
    const item = `${name} - ${color} - Size ${size}`;

    cart.push(item);
    updateCart();

    alert("Đã thêm vào giỏ!");
  }
});

function updateCart() {
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) {
    cartBtn.innerText = `🛒 Giỏ hàng (${cart.length})`;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

updateCart();
function resetSearch() {
  let products = document.querySelectorAll(".product");

  products.forEach(function(product) {
    product.style.display = "block";
  });

  document.getElementById("searchInput").value = "";
}
function orderNow() {
  let message = "Đơn hàng:\n";

  cart.forEach(item => {
    message += `- ${item.name} (${item.price})\n`;
  });

  window.open(`https://zalo.me/0382155536?text=${encodeURIComponent(message)}`);
}
<script>

document.querySelectorAll(".dropbtn").forEach(btn => {
  btn.addEventListener("click", function(e){
    e.preventDefault();
    this.parentElement.classList.toggle("active");
  });
});

document.querySelectorAll(".sub-dropdown > a").forEach(btn => {
  btn.addEventListener("click", function(e){
    e.preventDefault();
    this.parentElement.classList.toggle("active");
  });
});

</script>