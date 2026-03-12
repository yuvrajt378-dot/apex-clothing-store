const products = [

{
name:"Batman Hoodie",
price:1199,
category:"dc",
rating:4.7,
image:"images/dc/batman-hoodie.jpg"
},

{
name:"Joker Jacket",
price:1399,
category:"dc",
rating:4.5,
image:"images/dc/joker-jacket.jpg"
},

{
name:"Superman Shirt",
price:899,
category:"dc",
rating:4.3,
image:"images/dc/superman-shirt.jpg"
},

{
name:"Naruto Hoodie",
price:999,
category:"anime",
rating:4.8,
image:"images/anime/naruto-hoodie.jpg"
},

{
name:"Gojo Shirt",
price:799,
category:"anime",
rating:4.6,
image:"images/anime/gojo-shirt.jpg"
},

{
name:"AOT Jacket",
price:1299,
category:"anime",
rating:4.9,
image:"images/anime/aot-jacket.jpg"
},

{
name:"Spiderman Shirt",
price:899,
category:"marvel",
rating:4.4,
image:"images/marvel/spider-man-shirt.jpg"
}

];


const grid = document.getElementById("product-grid");
const search = document.getElementById("searchInput");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* update cart count */

function updateCartCount(){
const count=document.getElementById("cart-count");
if(count){
count.textContent=cart.length;
}
}

updateCartCount();


/* add to cart */

function addToCart(product){

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(product.name+" added to cart 🛒");

}


/* wishlist */

function toggleWishlist(product){

const index = wishlist.findIndex(p => p.name === product.name);

if(index === -1){
wishlist.push(product);
}else{
wishlist.splice(index,1);
}

localStorage.setItem("wishlist",JSON.stringify(wishlist));

showProducts(products);

}

function isWishlisted(product){
return wishlist.some(p => p.name === product.name);
}


/* star rating */

function renderStars(rating){

let stars="";

for(let i=1;i<=5;i++){
stars += i<=Math.round(rating) ? "⭐" : "☆";
}

return stars;

}


/* loading skeleton */

function showSkeleton(){

grid.innerHTML="";

for(let i=0;i<6;i++){

const card=document.createElement("div");

card.className="skeleton-card";

card.innerHTML=`

<div class="skeleton-img"></div>
<div class="skeleton-text"></div>
<div class="skeleton-text short"></div>

`;

grid.appendChild(card);

}

}


/* show products */

function showProducts(list){

grid.innerHTML="";

list.forEach(product=>{

const card=document.createElement("div");

card.className="product-card";

card.innerHTML=`

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

<span class="product-category">${product.category.toUpperCase()}</span>

<div class="wishlist-btn" onclick='toggleWishlist(${JSON.stringify(product)})'>
${isWishlisted(product) ? "❤️" : "🤍"}
</div>

</div>

<div class="product-info">

<h3>${product.name}</h3>

<div class="rating">
${renderStars(product.rating)} (${product.rating})
</div>

<p class="price">₹${product.price}</p>

<div class="product-buttons">

<button class="view-btn" onclick='openQuickView(${JSON.stringify(product)})'>
Quick View
</button>

<button class="cart-btn" onclick='addToCart(${JSON.stringify(product)})'>
Add to Cart
</button>

</div>

</div>

`;

grid.appendChild(card);

});

}


/* initial loading */

showSkeleton();

setTimeout(()=>{
showProducts(products);
},600);


/* open product page */

function viewProduct(product){

localStorage.setItem("product",JSON.stringify(product));

window.location="product.html";

}


/* search */

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=products.filter(p=>p.name.toLowerCase().includes(value));

showProducts(filtered);

});


/* category filter */

const links=document.querySelectorAll(".nav-links a");

links.forEach(link=>{

link.onclick=function(){

const category=link.dataset.category;

if(category==="all"){
showProducts(products);
}else{
const filtered=products.filter(p=>p.category===category);
showProducts(filtered);
}

};

});


/* quick view */

const quickView=document.getElementById("quick-view");
const quickImg=document.getElementById("quick-img");
const quickName=document.getElementById("quick-name");
const quickPrice=document.getElementById("quick-price");
const quickBtn=document.getElementById("quick-view-btn");
const closeQuick=document.getElementById("close-quick-view");

function openQuickView(product){

quickView.style.display="flex";

quickImg.src=product.image;
quickName.textContent=product.name;
quickPrice.textContent="₹"+product.price;

quickBtn.onclick=function(){
viewProduct(product);
}

}

closeQuick.onclick=function(){
quickView.style.display="none";
}
/* dark mode */

function toggleDarkMode(){

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

}

if(localStorage.getItem("darkMode")==="true"){
document.body.classList.add("dark");
}
function applyFilters(){

const maxPrice=document.getElementById("priceFilter").value;

const minRating=document.getElementById("ratingFilter").value;

const filtered=products.filter(product=>

product.price <= maxPrice &&
product.rating >= minRating

);

showProducts(filtered);

}
