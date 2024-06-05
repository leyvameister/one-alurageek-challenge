import { postProduct } from "./postProductInDB.js";

export async function submitProduct() {
    const productName = document.querySelector("[data-product-name]").value;
    const productPrice = document.querySelector("[data-product-price]").value;
    const productUrl = document.querySelector("[data-product-url]").value;

    try {
        await postProduct(productName, productPrice, productUrl);
    } catch (error) {
        console.log(error);
    }
}