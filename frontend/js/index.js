import { categories, search } from "./search.js";
import { timer } from "./timer.js";
import { formHandelr } from "./form.js";
import { bigCard } from "./bigCard.js";
import { smallCard } from "./smallCard.js";

document.addEventListener("DOMContentLoaded", function() {
  categories()
  search()
  timer()
  formHandelr()
  bigCard('top-sellers')
  bigCard('week-sale')
  smallCard('new-goods')
})
