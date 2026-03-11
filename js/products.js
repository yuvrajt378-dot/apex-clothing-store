const products = [

{
name:"Batman Hoodie",
price:1199,
category:"dc",
image:"images/dc/batman-hoodie.jpg"
},

{
name:"Joker Jacket",
price:1399,
category:"dc",
image:"images/dc/joker-jacket.jpg"
},

{
name:"Superman Shirt",
price:899,
category:"dc",
image:"images/dc/superman-shirt.jpg"
},

{
name:"Naruto Hoodie",
price:999,
category:"anime",
image:"images/anime/naruto-hoodie.jpg"
},

{
name:"Gojo Shirt",
price:799,
category:"anime",
image:"images/anime/gojo-shirt.jpg"
},

{
name:"AOT Jacket",
price:1299,
category:"anime",
image:"images/anime/aot-jacket.jpg"
},

{
name:"Spiderman Shirt",
price:899,
category:"marvel",
image:"images/marvel/spider-man-shirt.jpg"
}

];

const grid = document.getElementById("product-grid");

const searchInput = document.getElementById("searchInput");

function displayProducts(list){

grid.innerHTML="";

list.forEach(product => {

const card = document.createElement("div");

card.className="product-card";

card.innerHTML = `

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick='openProduct(${JSON.stringify(product)})'>
View Product
</button>

`;

grid.appendChild(card);

});

}

displayProducts(products);

function openProduct(product){

localStorage.setItem("selectedProduct",JSON.stringify(product));

window.location="product.html";

}

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

const filtered = products.filter(p => p.name.toLowerCase().includes(value));

displayProducts(filtered);

});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

link.addEventListener("click",()=>{

const category = link.dataset.category;

if(category==="all"){

displayProducts(products);

}else{

const filtered = products.filter(p => p.category===category);

displayProducts(filtered);

}

});

});
