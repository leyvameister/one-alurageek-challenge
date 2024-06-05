export async function postProduct(productName, productPrice, productImageUrl) {
    try {
        await fetch("https://one-alurageek-json-server.vercel.app/products", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: productName,
                price: productPrice,
                image: productImageUrl
            })
        });
    } catch (error) {
        console.log(error);
    }
}