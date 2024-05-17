import { categories, search } from "./search.js";
import { timer } from "./timer.js";
import { formHandelr } from "./form.js";

document.addEventListener("DOMContentLoaded", function() {
  categories()
  search()
  timer()
  formHandelr()
})
