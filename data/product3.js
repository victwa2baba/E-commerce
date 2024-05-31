import {cart, addToCart, checkMark} from './cart.js';


const product = [{
    id: 'dbq2',
    image: '../images/utopia-bedding-white.jpg',
    name: 'Utopia Bedding Waterproof Mattress Protector Twin Size, Premium Terry Mattress Cover 200 GSM, Breathable, Fitted Style with Stretchable Pockets (White)',
    priceCents: 1299
  }];

  let productHTML = '';
  product.forEach( (prod)=> {
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
        <div class="about-sub-text">
          <span>&bullet;</span> MATTRESS PROTECTOR - Fits Twin size mattress perfectly with dimensions 39 inches by 75 inches by 15 inches, featuring professionally turned hems and deep fitted pockets <br>
          <span>&bullet;</span> COMFORT SURFACE: Soft blended surface is extra absorbent, cozy and breathable. The specially designed waterproof top and high quality seam construction stops liquids from passing through. <br>
          <span>&bullet;</span> FITTED STYLE ALL AROUND ELASTIC - Mattress protector with a fitted style all round elastic band creates a secure fit on mattress depths <br>
          <span>&bullet;</span> WATERPROOF TERRY TOP - The mattress protector protects your mattress from unwelcome spills and keeps your mattress clean and safe. High-quality TPU backing secures your mattress from the top and resists any leakage into the mattress.<br>
        <span>&bullet;</span> CARE INSTRUCTIONS - Machine wash cold on gentle cycle; tumble dry low; do not iron; do not bleach; do not use fabric softener <br>
    
        </div>
        
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
        <div class="product-price"><sup><span>$</span></sup>${(prod.priceCents / 100).toFixed(2)}</div>
        <p> In Stock</p>
        <select name="cartquantity" class="cart-option" id="cartQuantitySelector">
          <option value="1">Quantity: 1</option>
          <option value="2">Quantity: 2</option>
          <option value="3">Quantity: 3</option>
          <option value="4">Quantity: 4</option>
        </select>
        <button class="add-to-cart-button js-add-to-cart-button
        " data-product-id="${prod.id}">Add to cart</button>
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
