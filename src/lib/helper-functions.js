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