
export const fetchProducts = async ({ limit = 15 }) => {

    console.log('api called')
    try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)

        console.log('response', response)

        const products = await response.json()

        console.log('products', products)

        return products
    } catch (e) {
        console.error(e)
    }

};
