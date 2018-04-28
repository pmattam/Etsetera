export let getAllCartItems = () =>
    fetch("https://etsetera.herokuapp.com/cartItem?user._id=5ae1fcdcad45d100146f3d6e", {
        method: "GET",
        headers: new Headers({
            "Authorization": `Bearer ${localStorage.getItem("authorization")}`
        })
    })

export let addItemToUserCart = (itemToCart, token_val) =>
    fetch("https://etsetera.herokuapp.com/cartItem", {
        method: "POST",
        body: JSON.stringify(itemToCart),
        headers: new Headers({
            "Authorization": `Bearer ${token_val}`,
            "Content-Type": "application/json"
        })
    })

export let editQuantityInUserCart = (itemToEdit) => {
    console.log("ITEMTOEDIT", itemToEdit);
    let bodyObj = {};
    bodyObj.quantity = itemToEdit.quantity;
    return fetch(`https://etsetera.herokuapp.com/cartItem/${itemToEdit.id}`, {
        method: "PUT",
        body: JSON.stringify(bodyObj),
        headers: new Headers({
            "Authorization": `Bearer ${localStorage.getItem("authorization")}`,
            "Content-Type": "application/json"
        })
    })
}

export let removeItemFromUserCart = (productId, token_val) =>
    fetch(`https://etsetera.herokuapp.com/cartItem/${productId}`, {
        method: "DELETE",
        headers: new Headers({
            "Authorization": `Bearer ${token_val}`,
            "Content-Type": "application/json"
        })
    })

export let fetchToken = (userCredentials) =>
    fetch("https://etsetera.herokuapp.com/auth/local", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })

export let getCategories = () =>
    fetch("https://etsetera.herokuapp.com/category")

export let getProducts = () =>
    fetch("https://etsetera.herokuapp.com/product")

export let registerUser = (userCredentials) =>
    fetch("https://etsetera.herokuapp.com/auth/local/register", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })