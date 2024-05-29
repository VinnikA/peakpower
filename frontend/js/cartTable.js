import { addItemToCart, deleteAll, removeItemFromCart } from "./cart.js"
import { data } from "./data.js"

export function cartTable() {

   const template = document.querySelector('.cart-table-item-template')
   const container = document.querySelector('.cart__table-body')
   const cartItems = JSON.parse(localStorage.getItem('cartPeakPower'))

   const renderItem = (itemData) => {

    const clone = template.content.cloneNode(true)

    const removeBtn = clone.querySelector('#remove-item')
    const addBtn = clone.querySelector('#add-item')
    const deleteAllBtn = clone.querySelector('.item__delete-btn')

    clone.querySelector('.item__name').textContent = itemData.title
    clone.querySelector('.item__quantity').textContent = itemData.quantity
    clone.querySelector('.item__price').textContent = itemData.price
    
    removeBtn.value = itemData.id
    addBtn.value = itemData.id
    deleteAllBtn.value = itemData.id

    removeBtn.addEventListener('click', removeItemFromCart)
    addBtn.addEventListener('click', addItemToCart)
    deleteAllBtn.addEventListener('click', deleteAll)

    container.appendChild(clone)
   }

   container.innerHTML = ''
   
   cartItems?.forEach((el, index) => {
    const item = data.find(item => item.id === el.id)
    const title = `${index+1}) ${item?.title}`
    const quantity = el.quantity
    const price = `$${(item.specialPrice * quantity).toFixed(2)}`
    renderItem({title, quantity, price, id: el.id})
   });

}