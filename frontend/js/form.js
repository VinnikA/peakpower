export function formHandelr() {
  
  const form = document.querySelector('.form__body')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!e.target.userName.value) {
      e.target.userName.placeholder = 'Enter your name!'
      return
    }
    if(!e.target.email.value) {
      e.target.email.placeholder = 'Enter your email!'
      return
    }
    if(!e.target.message.value) {
      e.target.message.placeholder = 'Enter your message!'
      return
    }

    const usersRequest = {
      name: e.target.userName.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

    document.querySelector('.overlay').classList.remove('overlay_hidden')
    document.querySelector('#thank-you-for-the-question').classList.remove('popup_hidden')

    form.reset()

    console.log(usersRequest)
  })

}