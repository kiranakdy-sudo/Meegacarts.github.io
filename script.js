let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

function loadCart() {
  let list = document.getElementById("cart");
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = "Total: $" + total;
}

function checkout() {
  alert("Checkout complete (demo only)");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

if(document.getElementById("cart")) loadCart();
