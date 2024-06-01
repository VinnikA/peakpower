export function categories() {

  const categoryList = document.querySelectorAll('.search__category')

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

  const nutritionList = document.querySelector('#search-go-to-nutrition')
  const nutritionListChildren = nutritionList.querySelectorAll('.search__item')
  nutritionListChildren.forEach(item => {
    item.addEventListener('click', () => {
      window.location.href = 'nutrition-store.html'
    })
  })
  
  const sportingGoodsList = document.querySelector('#search-go-to-sporting-goods')
  const sportingGoodsListChildren = sportingGoodsList.querySelectorAll('.search__item')
  sportingGoodsListChildren.forEach(item => {
    item.addEventListener('click', () => {
      window.location.href = 'sporting-goods-store.html'
    })
  })
}

export function search() {

  let form = document.querySelector('.search__form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    e.target[0].value = ''
  })

}