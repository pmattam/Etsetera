export let addItemToUserCart = (product) =>
    fetch("https://etsetera.herokuapp.com/cartItem", {
        method: "POST",
        body: JSON.stringify()
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


// POST https: //etsetera.herokuapp.com/cartItem

//     Headers ===
//     === =
//     Authorization: Bearer y0url0ngjs0nw3bt0k3n

// Body(JSON) ===
//     === === == {
//         "quantity": 2,
//         "productId": "5ae0a5dddd0ecc0014542d0f",
//         "userId": "5ae0a5aedd0ecc0014542d0e"
//     }