import { data } from "./data.js"

export function cartTable() {

   const template = document.querySelector('.cart-table-item-template')
   const container = document.querySelector('.cart__table-body')
   const cartItems = JSON.parse(localStorage.getItem('cartPeakPower'))

   const renderItem = (itemData) => {

    const clone = template.content.cloneNode(true)

    clone.querySelector('.item__name').textContent = itemData.title
    clone.querySelector('.item__quantity').textContent = itemData.quantity
    clone.querySelector('.item__price').textContent = itemData.price

    container.appendChild(clone)
   }

   container.innerHTML = ''
   
   cartItems?.forEach((el, index) => {
    const item = data.find(item => item.id === el.id)
    const title = `${index+1}) ${item?.title}`
    const quantity = el.quantity
    const price = `$${item.specialPrice * quantity}`
    renderItem({title, quantity, price})
   });

}