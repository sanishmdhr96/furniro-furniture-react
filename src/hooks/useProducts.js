import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../api/product"

export const useGetProducts = (params) => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => fetchProducts(params),
        enabled: true,
    })
}