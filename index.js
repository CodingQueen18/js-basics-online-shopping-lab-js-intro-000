var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //turns items into JavaScript objects before adding them to the cart:
 /*properly structures the cart item as object with a key of `itemName` and the corresponding v
alue { itemName: itemName } format:*/
//sets the price (integer between 1 and 100) on the cart object using the key `price`
  var price = Math.floor(Math.random() * 100);
  var itemObj = {itemName: item, itemPrice: price};

 //add items to the cart:
  cart.push(itemObj);

//returns a message indicating that the item has been added
  return `${item} has been added to your cart.`

}

function viewCart() {
  //prints 'Your shopping cart is empty.' if the cart is empty
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }


    //Object.assigm({}, {itemName: item, itemPrice: price})
    //correctly prints a one-item cart:
    if(cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if (cart.length === 2) {
      //correctly prints a two-item cart
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    else if (cart.length > 2) {
      for(var i = 0; i < cart.length; i++) {
      //correctly prints a three-or-more-item cart

      
    }


  }
}

function total() {
  // adds up the price of all items in the cart:

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
