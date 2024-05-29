import { cartTable } from "./cartTable.js"
import { data } from "./data.js"

export function cart() {

  const inLocalJSON = localStorage.getItem('cartPeakPower')
  const cartQuatity = document.querySelector('#cart-quatity')
  let inLocal = inLocalJSON && JSON.parse(inLocalJSON)

  let quantity = inLocal.length > 0 ? inLocal?.map(item => item.quantity).reduce((result, item) => result + item) : '0'
  cartQuatity.innerText = quantity

  const container = document.querySelector('.cart__table-body')

  if(!inLocal?.length) {
    container.innerHTML = ''
    const empty = document.createElement('div')
    empty.classList.add('cart__empty')
    empty.innerText = 'There is nothing to see. Go shopping!'
    container.appendChild(empty)
  } else {
    cartTable()
    const totalPriceDiv = document.createElement('div')
    totalPriceDiv.classList.add('cart__total-price') 
    let totalPrice = 0 
    inLocal.forEach(el => {
      const item = data.find(item => item.id === el.id)
      const price = item.specialPrice * el.quantity
      totalPrice = totalPrice + price
    })
    totalPriceDiv.innerHTML = `Total price: 
    <span>$${totalPrice.toFixed(2)}</span> `
    container.appendChild(totalPriceDiv)
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

  cart()
}

export function removeItemFromCart(e) {

  const inLocalJSON = localStorage.getItem('cartPeakPower')
  let inLocal = inLocalJSON && JSON.parse(inLocalJSON)

  let index = inLocal.findIndex(item => item.id === e.target.value)

  if(index !== -1) {
    inLocal[index].quantity -= 1

    if(inLocal[index].quantity === 0) {
      inLocal.splice(index, 1)
    }
  }

  localStorage.setItem('cartPeakPower', JSON.stringify(inLocal))

  cart()
}

export function deleteAll(e) {

  const inLocalJSON = localStorage.getItem('cartPeakPower')
  const inLocal = inLocalJSON && JSON.parse(inLocalJSON)

  const result = inLocal.filter(item => item.id !== e.target.value)

  localStorage.setItem('cartPeakPower', JSON.stringify(result))

  cart()
}