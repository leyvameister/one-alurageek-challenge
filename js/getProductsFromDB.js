export async function getProductsFromDB() {
    try {
        const products = await fetch("https://one-alurageek-json-server.vercel.app/products");
        return await products.json();
    } catch (error) {
        console.log(error);
    }
}