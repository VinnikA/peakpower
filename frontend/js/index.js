import { categories, search } from "./search.js";
import { timer } from "./timer.js";
import { formHandelr } from "./form.js";
import { bigCard } from "./bigCard.js";
import { smallCard } from "./smallCard.js";
import { storeRows } from "./storeRows.js";

import { data } from "./data.js";

document.addEventListener("DOMContentLoaded", function() {

  const page = window.location.pathname

  if(page.includes('index')) {
    categories()
    search()
    timer()
    formHandelr()
    bigCard('top-sellers')
    bigCard('week-sale')
    smallCard('new-goods')
  }

  if(page.includes('nutrition-store')) {
    categories()
    search()
    storeRows()
  }

})
