export function closeOverlay() {

  const overlay = document.querySelector('.overlay')
  const popups = document.querySelectorAll('.popup')
  const closeBtns = document.querySelectorAll('.popup__close-btn')
  const continueShopping = document.querySelector('#continue-shopping')


  const closeAll = () => {
    popups.forEach(popup => {
      popup.classList.add('popup_hidden')
    })
    overlay.classList.add('overlay_hidden')
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeAll)
  })

  window.addEventListener('click', (e) => {
    if(overlay === e.target) { closeAll() }
  })

  continueShopping.addEventListener('click', closeAll)

}

export function openCart() {

  const open = document.querySelector('#open-cart')
  const heroGetIt = document.querySelector('#hero-get-it-btn')

  const action = () => {
    document.querySelector('.overlay').classList.remove('overlay_hidden')
    document.querySelector('#cart').classList.remove('popup_hidden')
  }

  open.addEventListener('click', action)
  if(heroGetIt) heroGetIt.addEventListener('click', action)
}

export function openHelpForm() {

  const open = document.querySelector('#open-help-form')

  open.addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('overlay_hidden')
    document.querySelector('#help-form').classList.remove('popup_hidden')
  })
}