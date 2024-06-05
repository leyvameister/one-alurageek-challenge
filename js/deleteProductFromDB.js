export async function deleteProduct(productCard) {
    const productId = productCard.getAttribute("data-product-id");

    try {
        const response = await fetch(`https://one-alurageek-json-server.vercel.app/products/${productId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            productCard.remove();
        } else {
            console.error('Error al eliminar el producto');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}