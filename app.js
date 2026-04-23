const products = [
  { id: 1, name: "Đèn ĐỐT", price: 300000, img: "https://picsum.photos/300/200?1" },
  { id: 2, name: "Photobooth AI", price: 5000000, img: "https://picsum.photos/300/200?2" },
  { id: 3, name: "AI Assistant", price: 299000, img: "https://picsum.photos/300/200?3" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} VND</p>
        <button onclick="addToCart(${p.id})">Mua</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
  const list = document.getElementById("cartList");
  let total = 0;
  list.innerHTML = "";

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} - ${item.price}</li>`;
    total += item.price;
  });

  document.getElementById("total").textContent = total;
  document.getElementById("count").textContent = cart.length;
}

function toggleCart() {
  const box = document.getElementById("cartBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

// init
renderProducts();
updateCart();