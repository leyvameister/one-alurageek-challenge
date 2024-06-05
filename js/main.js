import { renderProducts } from "./renderProducts.js";
import { submitProduct } from "./formSubmitHandler.js";
import { registerEventListener } from "./registerFieldEventListener.js";

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

renderProducts();

document.querySelector("[data-form]").addEventListener("submit", submitProduct);

document.querySelectorAll("[required]").forEach(field => registerEventListener(field));