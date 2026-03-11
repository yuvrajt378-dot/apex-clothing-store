const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup",function(){

const value = searchInput.value.toLowerCase()

const products = document.querySelectorAll(".product-card")

products.forEach(product=>{

const name = product.innerText.toLowerCase()

if(name.includes(value)){
product.style.display="block"
}else{
product.style.display="none"
}

})

})
