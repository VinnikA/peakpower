export function formHandelr() {
  
  const form = document.querySelector('.form__body')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const usersRequest = {
      name: e.target.userName.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    console.log(usersRequest)
  })

}