import {cart, addToCart, checkMark} from './cart.js';


const product = [{
  id: 'dbq3',
  image: '../images/utopia-bedding-down.jpg',
  name: 'Utopia Bedding Down Alternative Comforter (Twin, White) - All Season Comforter - Plush Siliconized Fiberfill Duvet Insert - Box Stitched',
  priceCents: 2999
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
        <span>&bullet;</span> 100% Polyester<br>
        <span>&bullet;</span> HIGH-QUALITY - Ensures durability through strong stitching and is manufactured using high-quality filling <br>
        <span>&bullet;</span> BOX STYLE STITCHING - Crisp looking comforter featuring Piped Edges with an elegant Box Style Stitching Pattern that not only looks beautiful, but prevents the fill from shifting during the night, ensuring a comfortable sleep  <br>
        <span>&bullet;</span> SOFT & COMFORTABLE - Made using soft material with siliconized fiber filling that provides a comfy and cozy feel throughout the night  <br>
      <span>&bullet;</span> CONVENIENT SIZE - Twin comforter duvet insert measures 64 inches by 88 inches <br>
      <span>&bullet;</span>MACHINE WASHABLE - Machine wash in gentle cycle with cold water, sun-dry or tumble dry on low when needed
  
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
      <select name="cartquantity" class="cart-option" id="cartQuantitySelector">
        <option value="1">Quantity: 1</option>
        <option value="2">Quantity: 2</option>
        <option value="3">Quantity: 3</option>
        <option value="4">Quantity: 4</option>
      </select>
      <button class="add-to-cart-button js-add-to-cart-button" data-product-id="${prod.id}">Add to cart</button>
      <div class="js-add-to-cart added"></div>
    </div>
  </div>  
  `
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
