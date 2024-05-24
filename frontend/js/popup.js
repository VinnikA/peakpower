export function closePopup() {
  
  const closeBtns = document.querySelectorAll('.popup__close-btn')
  const overlays = document.querySelectorAll('.overlay')
  const continueShopping = document.querySelector('#continue-shopping')

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
}

export function openPopup() {

  const opentCart = document.querySelector('#open-cart')

  opentCart.addEventListener('click', () => {
    document.querySelector('#cart').classList.remove('overlay_hidden')
  })
}