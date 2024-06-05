export function createCard(product) {
    const productCard = document.createElement("div");
    productCard.className = "products__list__card";
    productCard.setAttribute("data-product-card", "");
    productCard.setAttribute("data-product-id", `${product.id}`);

    productCard.innerHTML = `
    <img class="card__image" src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button class="card__delete_button" data-delete-button>
        <img class="card__delete__button_icon" src="./img/bin.png" alt="delete">
    </button>`;

    return productCard;
}