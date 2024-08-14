
export const fetchProducts = async ({ limit = 15 }) => {

    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_API}/products?limit=${limit}`)

        console.log('response', response)

        const products = await response.json()

        console.log('products', products)

        return products
    } catch (e) {
        console.error(e)
    }

};
