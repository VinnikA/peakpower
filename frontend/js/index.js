import { categories, search } from "./search.js";
import { timer } from "./timer.js";
import { formHandelr } from "./form.js";
import { storeRows } from "./storeRows.js";
import { smallCardSlider } from "./smallCardSlider.js";
import { bigCardSlider } from "./bigCardSlider.js";
import { closePopup, openCart } from "./popup.js";
import { cart } from "./cart.js";

document.addEventListener("DOMContentLoaded", function() {

  const page = window.location.pathname

  if(page.includes('index')) {
    categories()
    search()
    timer()
    formHandelr()
    bigCardSlider('top-sellers')
    bigCardSlider('week-sale')
    smallCardSlider('new-goods')
  }

  if(page.includes('nutrition-store')) {
    categories()
    search()
    storeRows()
  }

  if(page.includes('sporting-goods-store')) {
    categories()
    search()
    storeRows()
  }

  closePopup()
  openCart()
  cart()

})
