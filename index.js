var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

var cart = {}

function getCart() {
  return cart
}

function addToCart(item) {
  return math.random(item)
}
  for (itemName in cart) {
  console.log ('${item[cart]} has been added to your cart.')
}
