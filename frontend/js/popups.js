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

  const action = () => {
    document.querySelector('.overlay').classList.remove('overlay_hidden')
    document.querySelector('#cart').classList.remove('popup_hidden')
  }

  open.addEventListener('click', action)
}

export function openHelpForm() {

  const open = document.querySelector('#open-help-form')

  open.addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('overlay_hidden')
    document.querySelector('#help-form').classList.remove('popup_hidden')
  })
}

export function cartFormHandelr() {

  const cartForm = document.querySelector('#cart-form')

  cartForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!e.target[0].value) {
      e.target[0].placeholder = 'Enter your name!'
      return
    }
    if(!e.target[1].value) {
      e.target[1].placeholder = 'Enter your phone number!'
      return
    }

    const promocode = document.querySelector('#promo-code').value
    const order = JSON.parse(localStorage.getItem('cartPeakPower'))
    const userOrder = {
      name: e.target[0].value,
      telephone: e.target[1].value,
      message: e.target[2].value,
      promocode,
      order
    }

    document.querySelector('#cart').classList.add('popup_hidden')
    document.querySelector('#thank-you').classList.remove('popup_hidden')

    cartForm.reset()

    console.log(userOrder)
  })
  
}

export function helpFormHandler() {

  const questionForm = document.querySelector('#question-form')

  questionForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!e.target[0].value) {
      e.target[0].placeholder = 'Enter your email!'
      return
    }
    if(!e.target[1].value) {
      e.target[1].placeholder = 'Enter your question!'
      return
    }

    const userQuestion = {
      email: e.target[0].value,
      message: e.target[1].value,
    }

    document.querySelector('#help-form').classList.add('popup_hidden')
    document.querySelector('#thank-you-for-the-question').classList.remove('popup_hidden')

    questionForm.reset()

    console.log(userQuestion)
  })

}