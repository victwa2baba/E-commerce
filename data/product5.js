import {cart, addToCart, checkMark} from './cart.js';
 

const product = [{
  id: 'dbq4',
  image: '../images/utopia-soft.jpg',
  name: 'Utopia Bedding Twin Fitted Sheet - Bottom Sheet - Deep Pocket - Soft Microfiber -Shrinkage and Fade Resistant-Easy Care -1 Fitted Sheet Only (White)',
  priceCents: 999
}];

let productHTML = '';
product.forEach((prod) => {
  productHTML = `
  <img src="${prod.image}" class="display-img">
          
  <div class="title-con">
    <p class="prod-title">
     ${prod.name}
    </p>
    <p class="product-seller">
      Visit the Utopia Bedding Store
    </p> <hr style="
    color: red;
    height: 1px;
    border-style: dotted;
    margin-left: 10px;">

    <div class="item-description">
      <p class="about-title">About this item</p>
      <p class="about-sub-text">
        <span>&bullet;</span> FITTED SHEET - Twin size fitted sheet measuring 39 by 75 inches with a 15 inches deep pocket that fits over-sized mattresses up to 15 inches deep and designing that complements your bed set quite well <br>
        <span>&bullet;</span> ALL-AROUND ELASTIC - All-around elastic to pull in the borders to make it easily stretch and fit the base of the mattress  <br>
        <span>&bullet;</span> BRUSHED MICROFIBER POLYESTER - Breathable brushed microfiber polyester fabric brings a soft and cozy feel to your bed that tempts you to stay in bed for long  <br>
        <span>&bullet;</span> SHRINK AND FADE RESISTANT - The microfiber material is processed to make it resistant to shrinkage and fading which adds to the longevity of the sheet by keeping it in great condition   <br>
      <span>&bullet;</span> CARE INSTRUCTIONS - Machine wash cold; do not bleach; tumble dry or iron on normal temperature 
  
      </p>
      
    </div>
  </div>
  <div class="left-area-container">
    <div class="prime">
      <img src="../../images/prime.png">
      <p class="prime-ex">
        Prime Exclusive Deal
      </p>
      <div class="flex-check">
        <div class="check-box">
        <input type="checkbox">
      </div>
        <p class="days-trial">
          Add your free 30-day trial of <span>Prime</span> to buy this item for only <span>$13.95</span> plus free expedited delivery. 
        </p>
      </div> 
    </div>
    <div class="add-to-cart-container">
      <div class="product-price"><sup><span>$</span></sup>${(prod.priceCents / 100).toFixed(2)}</span></div>
      <p> In Stock</p>
      <select name="cart-plus" id="cartQuantitySelector" class="cart-option">
        <option value="1">Quantity: 1</option>
        <option value="2">Quantity: 2</option>
        <option value="3">Quantity: 3</option>
        <option value="4">Quantity: 4</option>
      </select>
      <button class="add-to-cart-button js-add-to-cart-button" data-product-id="${prod.id}">Add to cart</button>
      <div class="js-add-to-cart added"></div>
    </div>
  </div>`
});


function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item)=>{
    cartQuantity += item.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity
};

updateCartQuantity();

  document.querySelector('.js-product-container') 
    .innerHTML = productHTML;

  document.querySelectorAll('.js-add-to-cart-button')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        checkMark();
        updateCartQuantity();
        console.log(cart);
      });
   });
