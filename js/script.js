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
// ===== Product Search =====

const searchInput = document.getElementById("productSearch");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(product => {

let name = product.querySelector("h3").textContent.toLowerCase();

if(name.includes(filter)){
product.style.display = "";
}else{
product.style.display = "none";
}

});

});

}
