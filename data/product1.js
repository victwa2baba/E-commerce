import {cart, addToCart, checkMark} from './cart.js';


const product = [{
  id: 'dbq0',
  image: '../images/utopia-bedding.jpg',
  name: 'Utopia Bedding Twin Bed Sheets Set - 3 Piece Bedding - Brushed Microfiber - Shrinkage and Fade Resistant - Easy Care (Twin, White)',
  priceCents: 1995 
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
              Visit the Amazon Basics Store
            </p> <hr style="
            color: red;
            height: 1px;
            border-style: dotted;
            margin-left: 10px;">

            <div class="item-description">
            <p class="about-title">About this item</p>
            <p class="about-sub-text">
              <span>&bullet;</span> Microfiber Polyester<br>
              <span>&bullet;</span> BED SHEET SET - Twin size 3-piece bed sheet set comprising of 1 flat sheet measuring 66 by 96 inches with a 2 inches self-hem, 1 fitted sheet measuring 39 by 75 inches with a 15 inches box and 1 pillowcase measuring 20 by 30 inches with a 4 inches hem<br>
              <span>&bullet;</span> ALL-AROUND ELASTIC - The all-around elastic used in the fitted sheet makes it fit easily onto the mattress while giving a nice finish to the bed <br>
              <span>&bullet;</span> BRUSHED MICROFIBER POLYESTER - Brushed microfiber polyester fabric makes the sheet set exceptionally soft
            SMOOTH AND COMFORTABLE - The smooth feel of the sheet is very cozy which keeps you cool during summers and warm during winters <br>
            <span>&bullet;</span> SHRINK AND FADE RESISTANT - The microfiber material is processed to make it resistant to shrinkage and fading which adds to the longevity of the set by keeping it in great condition<br>
            <span>&bullet;</span>CARE INSTRUCTIONS - Machine wash, tumble dry or iron on low temperature; do not bleach
        
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
              <select name="cartquantity" class="cart-option js-cart-selector" id="cartQuantitySelector">
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

        cart.forEach((cartItem)=>{
          cartQuantity += cartItem.quantity;
        });

        document.querySelector('.js-cart-quantity')
          .innerHTML = cartQuantity;
      };

      updateCartQuantity();

      document.querySelector('.js-product-container') 
        .innerHTML = productHTML;

      document.querySelectorAll('.js-add-to-cart-button')
        .forEach((button) => {
          button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      checkMark();
      addToCart(productId);
      updateCartQuantity();

      console.log(cart);
    });
  });
