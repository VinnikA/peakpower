import { cartTable } from "./cartTable.js"

export function cart() {

  const inLocalJSON = localStorage.getItem('cartPeakPower')
  const cartQuatity = document.querySelector('#cart-quatity')
  let inLocal = inLocalJSON && JSON.parse(inLocalJSON)

  let quantity = inLocal?.map(item => item.quantity).reduce((result, item) => result + item) || '0'
  cartQuatity.innerText = quantity

  if(!inLocal?.length) {
    const container = document.querySelector('.cart__table-body')
    const empty = document.createElement('div')
    empty.classList.add('cart__empty')
    empty.innerText = 'There is nothing to see. Go shopping!'
    container.appendChild(empty)
  } else {
    cartTable()
  }

  const removeItemFromCart = () => {
    console.log('remove item from cart')
  }

}

export function addItemToCart(e) {

  const inLocalJSON = localStorage.getItem('cartPeakPower')
  const cartQuatity = document.querySelector('#cart-quatity')
  let inLocal = inLocalJSON && JSON.parse(inLocalJSON)

  if(inLocalJSON) {

    let inTheCart = !!inLocal.find(item => item.id === e.target.value)

    if(inTheCart) {
      inLocal = inLocal.map(item => {
        if(item.id === e.target.value) {
          item.quantity = ++item.quantity
        }
        return item
      })
    } else {
      inLocal.push({
        id: e.target.value,
        quantity: 1
      })
    }

    localStorage.setItem('cartPeakPower', JSON.stringify(inLocal))

  } else {

    const cartPeakPower = []
  
    cartPeakPower.push(
      {
        id: e.target.value,
        quantity: 1
      }
    )

    localStorage.setItem('cartPeakPower', JSON.stringify(cartPeakPower))
  }

  let quantity = inLocal?.map(item => item.quantity).reduce((result, item) => result + item)
  cartQuatity.innerText = quantity

  cart()

}