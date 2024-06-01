import { data } from "./data.js"
import { mixArr, getTwoElements } from "./helpers.js"
import { addItemToCart } from "./cart.js"

export function bigCardSlider(targetID) {

  const template = document.querySelector('.big-card-template')

  const slider = document.querySelector(`#${targetID}`)
  const container = slider.querySelector('.slider__body')
  const leftBtn = slider.querySelector('.next-btn_left')
  const rightBtn = slider.querySelector('.next-btn_right')

  let start = 0
  let end = 2
  
  const mixData = mixArr(data)

  const addAndOpenCart = (e) => {
    addItemToCart(e)
    document.querySelector('.overlay').classList.remove('overlay_hidden')
    document.querySelector('#cart').classList.remove('popup_hidden')
  }

  const renderItem = (data) => {

    const clone = template.content.cloneNode(true)

    const addButton = clone.querySelector('.add-to-cart')

    clone.querySelector('.big-card__img').src = data.productImg 
    clone.querySelector('.big-card__title').textContent = data.title 
    clone.querySelector('.big-card__description').textContent = data.description 
    clone.querySelector('.big-card__new-price').textContent = `$${data.specialPrice}` 
    clone.querySelector('.big-card__old-price').textContent = data.regularPrice ? `$${data.regularPrice}` : ''

    addButton.value = data.id
    addButton.addEventListener('click', addAndOpenCart)

    if(!data.freeShipping) {
      clone.querySelector('#free-shipping-big').style.display = 'none'
    }
    if(!data.discountOnSecondItem) {
      clone.querySelector('#discount-on-the-second-item-big').style.display = 'none'
    }
    if(!data.discountOnFirstOrder) {
      clone.querySelector('#discount-on-first-order-big').style.display = 'none'
    }

    container.appendChild(clone)
  }

  leftBtn.addEventListener('click', () => {
    start = start + 1
    container.innerHTML = ''
    getTwoElements(data, start).forEach(renderItem) 
  })

  rightBtn.addEventListener('click', () => {
    start = start > 0 ? start - 1 : start = mixData.length
    container.innerHTML = ''
    getTwoElements(data, start).forEach(renderItem)
  })

  mixData.slice(start, end).forEach(renderItem)

}