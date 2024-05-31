export let cart =   JSON.parse(localStorage.getItem('kart'))

if (!cart) {
  cart = [{
    productId: 'dbq3',
    quantity: 1,
    deliveryOptionId: '1'
  },
  {
    productId: 'dbq4',
    quantity: 3,
    deliveryOptionId: '2'
  }];
  
}


function saveToStorage() {
  localStorage.setItem('kart', JSON.stringify(cart));

}


export function addToCart(productId) {
  let matchingItem;

      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      const quantitySelector = document.getElementById('cartQuantitySelector');
      const quantity = Number(quantitySelector.value);
      
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId: productId,
          quantity: quantity,
          deliveryOptionId: '1'
        })}
      
      saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId || !cartItem.productId) {
      newCart.push(cartItem)
    }
  });
  cart = newCart;
  saveToStorage()
};

export function updateDeliveryOption (productId, deliveryOptionId) {
  let matchingItem;

      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();


}

export function checkMark () {
  let timeoutId; 

  const disp = document.querySelector('.js-add-to-cart');

  clearTimeout(timeoutId);
  
  timeoutId = setTimeout(() => {
  disp.innerHTML = `<img src="../../images/checkmark.png" style="height: 20px;"> Added`;
  }, 500);

  timeoutId = setTimeout(() => {
  disp.innerHTML = '';
  }, 1500);
}