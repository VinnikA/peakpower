import { data } from "./data.js"
import { mixArr, getFourElements } from "./helpers.js"
import { addItemToCart } from "./cart.js"

export function smallCardSlider(targetID) {

  const template = document.querySelector('.small-card-template')

  const slider = document.querySelector(`#${targetID}`)
  const container = slider.querySelector('.slider__body')
  const leftBtn = slider.querySelector('.next-btn_left')
  const rightBtn = slider.querySelector('.next-btn_right')

  let start = 0
  let end = 4
  
  const mixData = mixArr(data)

  const renderItem = (data) => {

    const clone = template.content.cloneNode(true)

    const addButton = clone.querySelector('.add-to-cart')

    clone.querySelector('.small-card__img').src = data.productImg.slice(1) 
    clone.querySelector('.small-card__title').textContent = data.title 
    clone.querySelector('.small-card__new-price').textContent = `$${data.specialPrice}` 
    clone.querySelector('.small-card__old-price').textContent = data.regularPrice ? `$${data.regularPrice}` : ''

    addButton.value = data.id
    addButton.addEventListener('click', addItemToCart)

    if(!data.freeShipping) {
      clone.querySelector('#free-shipping').style.display = 'none'
    }
    if(!data.discountOnSecondItem) {
      clone.querySelector('#discount-on-the-second-item').style.display = 'none'
    }
    if(!data.discountOnFirstOrder) {
      clone.querySelector('#discount-on-first-order').style.display = 'none'
    }

    container.appendChild(clone)
  }

  leftBtn.addEventListener('click', () => {

    start = start + 1
    container.innerHTML = ''
    getFourElements(data, start).forEach(renderItem)
    
  })

  rightBtn.addEventListener('click', () => {

    start = start > 0 ? start - 1 : start = mixData.length
    container.innerHTML = ''
    getFourElements(data, start).forEach(renderItem)
    
  })

  mixData.slice(start, end).forEach(renderItem)

}