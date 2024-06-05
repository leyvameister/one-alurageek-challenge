import { getProductsFromDB } from "./getProductsFromDB.js";
import { createCard } from "./createCard.js";
import { deleteProduct } from "./deleteProductFromDB.js";

const productList = document.querySelector("[data-products-list]");

export async function renderProducts() {
    try {
        const products = await getProductsFromDB();
        products.forEach(product => {
            const card = createCard(product);
            productList.appendChild(card);

        });
        registerEventListeners();
    } catch (error) {
        console.log(error);
    }
}

function registerEventListeners() {
    const deleteButtons = document.querySelectorAll("[data-product-card]");
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener("click", async (event) => {
            try {
                const productCard = event.target.closest("[data-product-card]");
                await deleteProduct(productCard);
            } catch (error) {
                console.log(error);
            }
        });
    });
}
