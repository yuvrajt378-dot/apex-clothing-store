```javascript
// APEX STORE CART SYSTEM

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) return;

    cartCount.textContent = cart.length;
}

// Add product to cart
function addToCart(productName, price) {

    const product = {
        name: productName,
        price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(productName + " added to cart!");
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});
```

