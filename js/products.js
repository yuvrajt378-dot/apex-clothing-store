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

const grid=document.getElementById("product-grid");

const search=document.getElementById("searchInput");

function showProducts(list){

grid.innerHTML="";

list.forEach(product=>{

const card=document.createElement("div");

card.className="product-card";

card.innerHTML=`

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick='viewProduct(${JSON.stringify(product)})'>
View
</button>

`;

grid.appendChild(card);

});

}

showProducts(products);


function viewProduct(product){

localStorage.setItem("product",JSON.stringify(product));

window.location="product.html";

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
