import {cart, updateQuantity, removeFromCart, updateDeliveryOption} from '../cart.js'
import {products, getProduct} from '../products.js';
import {deliveryOptions, getDeliveryOption} from '../deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function renderCartSummary () {
    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
      let productId = cartItem.productId;
      
      const matchingProduct = getProduct(productId);

      const deliveryOptionId = cartItem.deliveryOptionId;

      const deliveryOption = getDeliveryOption(deliveryOptionId);

      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays, 
        'days'
        );  
      const dateString = deliveryDate.format(
      'dddd, MMMM D'
      );

      cartSummaryHTML +=

      `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${(matchingProduct.priceCents / 100).toFixed(2)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity" data-product-id="${matchingProduct.id}" >
              Update
            </span>
            <input type="text" class="quantity-input js-quantity-input-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-quantity" data-product-id="${matchingProduct.id}"> 
              Save
            </span>

            <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>`;


    function deliveryOptionsHTML (matchingProduct, cartItem) {
      let html = '';

      deliveryOptions.forEach((deliveryOption) => {

        const today = dayjs();
        const deliveryDate = today.add(
          deliveryOption.deliveryDays, 
          'days'
          ); 
        const dateString = deliveryDate.format(
          'dddd, MMMM D'
        );

        const priceString = deliveryOption.priceCents === 0
        ? 'FREE'
        : `$${(deliveryOption.priceCents / 100).toFixed(2)} -`;

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

        html += `<div class="delivery-option js-delivery-option"   
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
        
            <input type="radio" ${isChecked ? 'checked' : ''}
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
              ${dateString}
            </div>
              <div class="delivery-option-price">
              ${priceString} Shipping
              </div>
            </div>
          </div>`
      })
      return html
    }

      document.querySelector('.js-order-summary')
      .innerHTML = cartSummaryHTML;
    });  

    function updateTheQuantity () {
        document.querySelectorAll('.js-quantity-input')
        .forEach((input) => {
        input.addEventListener('click', () => {
          const productId = input.dataset.productId;

          const innerHtml = input.innerHTML;
          let quantity = Number(innerHtml.value);

          let cartQuantity = 0;
          
          let matchingItem;

         cart.forEach((cartItem)=>{
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
          cartQuantity += cartItem.quantity;

          matchingItem += quantity;
         });

          console.log('yes');
      })
    })
    };

    updateTheQuantity();
      

      document.querySelectorAll('.js-save-quantity')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
        
                const container = document.querySelector(
                  `.js-cart-item-container-${productId}`
                );
                container.classList.remove('is-editing-quantity');
        
                const quantityInput = document.querySelector(
                  `.js-quantity-input-${productId}`
                );
                const newQuantity = Number(quantityInput.value);
                updateQuantity(productId, newQuantity);
                renderCartSummary();
                renderPaymentSummary();

          })
        });


    function checkoutInnerHTML () {
      let cartQuantity = 0;

      cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;
      });


        let checkoutItemCount = document.querySelector('.js-checkout-cart-count')
        .innerHTML = `${cartQuantity} items`;
      }
      checkoutInnerHTML();

    document.querySelectorAll('.js-update-quantity')
      .forEach((update) => {
        update.addEventListener('click', ()=> {
          const productId = update.dataset.productId;
          update.classList.add('remove');

          const container = document.querySelector(`.js-cart-item-container-${productId}`);
          const quantityLabel = update.parentElement.querySelector('.js-quantity-label');

          container.classList.add('is-editing-quantity');
          quantityLabel.classList.add('remove');

    
        })
      })


    document.querySelectorAll('.js-delete-quantity-link')
      .forEach((link) => {
        let checkoutInner = checkoutInnerHTML();

        link.addEventListener('click', () => {
          const productId = link.dataset.productId;
          const container = document.querySelector(`.js-cart-item-container-${productId}`);
          container.remove();
          
          removeFromCart(productId);
          renderCartSummary();
          renderPaymentSummary();
          console.log(cart);
        })
        
      });

      document.querySelectorAll('.js-delivery-option')
        .forEach((element) =>{
          element.addEventListener('click', () => {
            const {productId, deliveryOptionId} = element.dataset;

            updateDeliveryOption(productId, deliveryOptionId);

            renderCartSummary();
            renderPaymentSummary();

            console.log('Delivery date changed');
          })
        })
      };

      renderCartSummary();

