import * as ACTIONS from "./action";

export const addContact = (value) => {
    console.log(value)
    return (dispatch) => {
        dispatch(ACTIONS.addContactRequest());

        fetch("https://fakestoreapi.com/users", {
            method: "POST",
            body: JSON.stringify({
                email: value?.email,
                username: value?.fullName,
                password: value?.subject,
                name: {
                    firstname: "John",
                    lastname: "Doe",
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
                phone: value?.message,
            }),
        })
            .then((res) => res.json())
            .then((response) => dispatch(ACTIONS.addContactRequestSuccess(response)))
            .catch((error) => dispatch(ACTIONS.addContactRequestFailure(error)));
    };
};
