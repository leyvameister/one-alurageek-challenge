import { renderProducts } from "./renderProducts.js";
import { submitProduct } from "./formSubmitHandler.js";
import { registerEventListener } from "./registerFieldEventListener.js";

renderProducts();

document.querySelector("[data-form]").addEventListener("submit", submitProduct);

document.querySelectorAll("[required]").forEach(field => registerEventListener(field));