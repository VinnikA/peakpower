export function categories() {

  let categoryList = document.querySelectorAll('.search__category')

  for(let category of categoryList) {
    category.addEventListener('click', () => {

      let arrow = category.querySelector('.search__arrow')
      let list = category.querySelector('.search__list')

      arrow?.classList.toggle('search__arrow_reverse')
      list?.classList.toggle('search__list_open')

    })
  }

  let searchItems = document.querySelectorAll('.search__item')

  for(let item of searchItems) {
    item.addEventListener('click', () => {
      console.log(item.textContent.toLowerCase())
    })
  }
  
}

export function search() {

  let form = document.querySelector('.search__form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    e.target[0].value = ''
  })

}