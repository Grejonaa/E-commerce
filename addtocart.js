const product = [
    {
        id:  0,
        class: "pro",
        image: "imgs/products/f1.jpeg",
        title: "STRAPPY JUMPSUIT WITH BUCKLES",
        price: 40,
    },
    {
        id:  1,
        class: "pro",
        image: "imgs/products/f2.jpeg",
        title: "FLOWY HALTER NECK JUMPSUIT",
        price: 60,
        
    },
    {
        id:  2,
        class: "pro",
        image: "imgs/products/f3.jpeg",
        title: "WIDE FIT RUFFLED JUMPSUIT",
        price: 50,
    },
    {
        id:  3,
        class: "pro",
        image: "imgs/products/f4.jpeg",
        title: "DOTTED MESH BELTED MIDI DRESS",
        price: 80,
    },
    {
        id: 4,
        class: "pro",
        image: "imgs/products/f5.jpeg",
        title: "CONTRASTING TULLE JUMPSUIT DRESS",
        price: 40,
    },
    {
        id: 5,
        class: "pro",
        image: "imgs/products/f6.jpeg",
        title: "RUCHED MIDI DRESS",
        price: 90,
    },
    {
        id:  6,
        class: "pro",
        image: "imgs/products/f7.jpeg",
        title: "VOLUMINOUS LONG JUMPSUIT",
        price: 50,
    },
    {
        id: 7,
        class: "pro",
        image: "imgs/products/f8.jpeg",
        title: "HIGH COLLAR KNIT DRESS",
        price: 70,
    },
    {
        id:  8,
        class: "pro",
        image: "imgs/products/p1.jpeg",
        title: "FAUX LEATHER SHORT DRESS ZW COLLECTION",
        price: 70,
    },
    {
        id:  9,
        class: "pro",
        image: "imgs/products/p2.jpeg",
        title: "VELVET MIDI DRESS",
        price: 40,
    },
    {
        id:  10,
        class: "pro",
        image: "imgs/products/p3.jpeg",
        title: "SHORT DRESS WITH RUCHING",
        price: 56,
    },
    {
        id:  11,
        class: "pro",
        image: "imgs/products/p4.jpeg",
        title: "FLORAL PRINT SATIN EFFECT MIDI DRESS",
        price: 77,
    },
    {
        id:  12,
        class: "pro",
        image: "imgs/products/p5.jpeg",
        title: "SEQUIN VELVET DRESS ZW COLLECTION",
        price: 70,
    },
    {
        id:  13,
        class: "pro",
        image: "imgs/products/p6.jpeg",
        title: "LONG SEQUIN DRESS",
        price: 86,
    },
    {
        id:  14,
        class: "pro",
        image: "imgs/products/p7.jpeg",
        title: "SEQUIN HALTER DRESS ZW COLLECTION",
        price: 70,
    },
    {
        id:  15,
        class: "pro",
        image: "imgs/products/p8.jpeg",
        title: "SEQUIN FRINGED MINI DRESS",
        price: 55,
    }

];

document.addEventListener("DOMContentLoaded", function(){
const container = document.querySelector('.pro-container');
 if (!container) { console.error("Error: '.pro-container' not found in the DOM.");
  }
});
let i=0;

 const renderedHTML = product.map(({ image, title, price }) => {
     return ` <div class="pro">
      <img src="${image}" alt=""> 
      <div class="des">
       <span>Zara</span>
        <h5>${title}</h5>
         <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
         <h4>$ ${price}.00</h4>
         <a class="linku" href="sproduct${i}.html" target="blank">View product</a>
        </div> <button style="cursor:pointer;" onClick="addtocart(${i++})" id="add-to-cart"><i class="fal fa-shopping-cart cart"></i></button>
         </div>`;
 }).join("");
  console.log(renderedHTML);
  document.querySelector(".pro-container").innerHTML = renderedHTML;

  var cart= [];
  function loadCartFromLocalStorage(){
    const savedCart= localStorage.getItem('cart');
    if(savedCart){
        cart= JSON.parse(savedCart);
    }
    displaycart();
  }

  function saveCartToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function saveCartHTMLToLocalStorage(){
    const cartContainer= document.querySelector('.cartItem');
    if(cartContainer){
        localStorage.setItem('cartHTML', cartContainer.innerHTML);
    } else{
        console.error("Element with class 'cartItem' not found");
    }
  }


  function addtocart(a){
    cart.push({...product[a]});
    saveCartToLocalStorage()
    displaycart();
  }

  function delElement(a){
    cart.splice(a, 1);
    saveCartToLocalStorage()
    displaycart();
  }

  function displaycart() { 
     let cartContainer = document.querySelector(".cartItem");
      if (!cartContainer) {
         console.error("Element with class 'cartItem' not found in DOM");
          return; }
     let j = 0,total=0;
         document.getElementById('count').innerHTML= cart.length;
     if (cart.length === 0) {
            cartContainer.innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML= "$ "+0+".00";
        
        }
        
     else {
              
        cartContainer.innerHTML = cart.map((item) => {
                total+= item.price; 
             return ` <div class="cart-item">
             <div class="row-img">
             <img class="rowimg" src="${item.image}" alt=""> 
             </div>
            <h5 style='font-size:12px;'>${item.title}</h5>
            <p style='font-size:12px; color:red; font-weight:700;'>$ ${item.price}.00</p>`+
            "<i class='fas fa-trash' onclick='delElement("+(j++)+")'></i></div>";
             }).join(""); 
             document.getElementById("total").innerHTML = "$ "+total+".00";
            } 
            saveCartHTMLToLocalStorage();
        }

        loadCartFromLocalStorage()
        saveCartHTMLToLocalStorage();