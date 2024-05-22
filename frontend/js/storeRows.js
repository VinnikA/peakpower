import { data } from "./data.js"

export function storeRows() {

  const template = document.querySelector('.small-card-template')

  const containers = document.querySelectorAll('.products__cards')

  const renderItem = (data, container) => {

    const clone = template.content.cloneNode(true)

    clone.querySelector('.small-card__img').src = data.productImg 
    clone.querySelector('.small-card__title').textContent = data.title 
    clone.querySelector('.small-card__new-price').textContent = `$${data.specialPrice}` 
    clone.querySelector('.small-card__old-price').textContent = `$${data.regularPrice}` 

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

  containers.forEach(container => {
    
    const items = data.filter(item => item.category === container.id).slice(0, 4)

    items.forEach(item => renderItem(item, container))

  })

}