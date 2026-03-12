const products=[

{name:"Batman Hoodie",price:1199,category:"dc",image:"images/dc/batman-hoodie.jpg"},
{name:"Joker Jacket",price:1399,category:"dc",image:"images/dc/joker-jacket.jpg"},
{name:"Superman Shirt",price:899,category:"dc",image:"images/dc/superman-shirt.jpg"},

{name:"Naruto Hoodie",price:999,category:"anime",image:"images/anime/naruto-hoodie.jpg"},
{name:"Gojo Shirt",price:799,category:"anime",image:"images/anime/gojo-shirt.jpg"},
{name:"AOT Jacket",price:1299,category:"anime",image:"images/anime/aot-jacket.jpg"},

{name:"Spiderman Shirt",price:899,category:"marvel",image:"images/marvel/spider-man-shirt.jpg"}

];

const grid=document.getElementById("product-grid");
const search=document.getElementById("searchInput");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function updateCartCount(){
const count=document.getElementById("cart-count");
if(count){
count.textContent=cart.length;
}
}

updateCartCount();


function showProducts(list){

grid.innerHTML="";

list.forEach(product=>{

const card=document.createElement("div");

card.className="product-card";

card.innerHTML=`

<div class="product-image">

<img src="${product.image}">

</div>

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick='openQuickView(${JSON.stringify(product)})'>Quick View</button>

`;

grid.appendChild(card);

});

}

showProducts(products);


function addToCart(product){

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("Added to cart");

}


search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=products.filter(p=>p.name.toLowerCase().includes(value));

showProducts(filtered);

});


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


const quickView=document.getElementById("quick-view");
const quickImg=document.getElementById("quick-img");
const quickName=document.getElementById("quick-name");
const quickPrice=document.getElementById("quick-price");
const quickBtn=document.getElementById("quick-view-btn");
const quickAdd=document.getElementById("quick-add-cart");
const closeQuick=document.getElementById("close-quick-view");


function openQuickView(product){

quickView.style.display="flex";

quickImg.src=product.image;
quickName.textContent=product.name;
quickPrice.textContent="₹"+product.price;

quickBtn.onclick=function(){
localStorage.setItem("product",JSON.stringify(product));
window.location="product.html";
}

quickAdd.onclick=function(){
addToCart(product);
}

}

closeQuick.onclick=function(){
quickView.style.display="none";
}
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
