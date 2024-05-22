import { data } from "./data.js"
import { mixArr, getTwoElements } from "./helpers.js"

export function bigCardSlider(targetID) {

  const template = document.querySelector('.big-card-template')

  const slider = document.querySelector(`#${targetID}`)
  const container = slider.querySelector('.slider__body')
  const leftBtn = slider.querySelector('.next-btn_left')
  const rightBtn = slider.querySelector('.next-btn_right')

  let start = 0
  let end = 2
  
  const mixData = mixArr(data)

  const renderItem = (data) => {

    const clone = template.content.cloneNode(true)

    clone.querySelector('.big-card__img').src = data.productImg.slice(1) 
    clone.querySelector('.big-card__title').textContent = data.title 
    clone.querySelector('.big-card__new-price').textContent = `$${data.specialPrice}` 
    clone.querySelector('.big-card__old-price').textContent = data.regularPrice ? `$${data.regularPrice}` : ''

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