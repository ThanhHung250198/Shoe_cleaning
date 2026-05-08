let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    list.innerHTML += `
      <div>
        <img src="${item.img}" width="80">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button onclick="removeItem(${index})">Xóa</button>
      </div>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();