import { useMutation } from "@tanstack/react-query";

const checkoutProducts = async (value) => {
    console.log(value)
    try {
        const data = await fetch(`${import.meta.env.VITE_BASE_API}/users`, {
            method: "POST",
            body: JSON.stringify({
                email: "test@yopmail.com",
                username: value?.firstname,
                password: "112233",
                name: {
                    firstname: value?.firstname,
                    lastname: value?.lastname,
                },
                address: {
                    city: "kilcoole",
                    street: "7835 new road",
                    number: 3,
                    zipcode: "12926-3874",
                    geolocation: {
                        lat: "-37.3159",
                        long: "81.1496",
                    },
                },
                phone: "9860000000",
            }),
        });

        const response = await data.json()

        return response
    } catch (e) { return r }
};

export const useCheckoutProducts = (values) => {
    return useMutation({
        mutationFn: () => checkoutProducts(values),
    });
};
