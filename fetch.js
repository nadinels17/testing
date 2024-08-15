fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);


fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: 144,
          quantity: 4,
        },
        {
          id: 98,
          quantity: 1,
        },
      ]
    })
  })
  .then(res => res.json())
  .then(console.log);

// function 


async function AddCart() {
    // try {
    //     let body = 
    // } catch (error) {
        
    // }
}













async function cobain() {
    try {
        let dataCart = await fetch('https://dummyjson.com/carts/add')
        let respon = await dataCart.json()
        return respon;
    } catch (error) {
        
    }
     
}

cobain().then(respon =>{
    respon;
})