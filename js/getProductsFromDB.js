export async function getProductsFromDB() {
    try {
        const products = await fetch("http://localhost:3000/products");
        return await products.json();
    } catch (error) {
        console.log(error);
    }
}