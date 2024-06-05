export async function deleteProduct(productCard) {
    const productId = productCard.getAttribute("data-product-id");

    try {
        await fetch(`https://one-alurageek-json-server.vercel.app/products/${productId}`, {
            method: 'DELETE'
        });
            productCard.remove();
    } catch (error) {
        console.error('Error:', error);
    }
}
