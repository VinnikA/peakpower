export function closePopup() {
  
  const closeBtns = document.querySelectorAll('.popup__close-btn')
  const overlays = document.querySelectorAll('.overlay')
  const continueShopping = document.querySelector('#continue-shopping')
  const closeThankYou = document.querySelector('#close-thank-you')

  const closeAllOverlays = (e) => {
    e.preventDefault()
    overlays.forEach(overlay => {
      overlay.classList.add('overlay_hidden')
    })
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      overlays.forEach(overlay => {
        overlay.classList.add('overlay_hidden')
      })
    })
  })

  continueShopping.addEventListener('click', () => {
    overlays.forEach(overlay => {
      overlay.classList.add('overlay_hidden')
    })
  })

  window.addEventListener('click', e => {
    overlays.forEach(item => {
      if(item === e.target) {
        item.classList.add('overlay_hidden')
      }
    })
  })

  closeThankYou.addEventListener('click', closeAllOverlays)
}

function openCart() {

  const opentCart = document.querySelector('#open-cart')
  const heroGetIt = document.querySelector('#hero-get-it-btn')

  const action = () => document.querySelector('#cart').classList.remove('overlay_hidden')

  opentCart.addEventListener('click', action)
  if(heroGetIt) heroGetIt.addEventListener('click', action)
  
}

export function openThankYou() {

  const open = document.querySelector('#cart-get-it')
  open.addEventListener('click', () => {
    document.querySelector('#thank-you').classList.remove('overlay_hidden')
  })
}

export function openThankYouForTheQuestion() {

}