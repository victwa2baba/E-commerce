import {cart, addToCart, checkMark} from './cart.js';

const product = [{
  id: 'dbq1',
  image: '../images/amazon-basics-lightweight.jpg',
  name: 'Amazon Basics Lightweight Super Soft Easy Care Microfiber 3-Piece Bed Sheet Set with 14-Inch Deep Pockets, Twin, Bright White, Solid',
  priceCents: 1499
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
            <p class="about-sub-text">
            <span>&bullet;</span>Queen bed sheet set in Bright White includes (1) 90 x 102-inch flat sheet, (1) 60 x 80 x 19-inch Extra-Deep fitted sheet, and (2) 20 x 30-inch Standard pillowcases<br>
            <span>&bullet;</span> Polyester microfiber material offers reliable strength, exceptional softness, and all-season comfort <br>
            <span>&bullet;</span> Machine wash warm, no bleach, and tumble dry low for easy home care  <br>
            <span>&bullet;</span> Made in an OEKO-TEX Standard 100 factory, an independent certification system that ensures textiles meet high safety and environmental standards  <br>
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

        updateCartQuantity();
        checkMark();

        console.log(cart);
      });
  });
