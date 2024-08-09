export const setItemToLocalStorage = (key, value) => {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue)

}

export const getItemFromLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
}