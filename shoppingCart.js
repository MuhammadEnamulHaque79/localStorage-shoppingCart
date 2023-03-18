//Add product;

const addProduct =()=>{
    const productNameField = document.getElementById('product-name');
    const product = productNameField.value;
    productNameField.value ='';
    
    const productQuantityField = document.getElementById('product-quantity');
    const quantity = productQuantityField.value;
    productQuantityField.value = '';
    
    displayProduct(product,quantity);
    console.log(product,quantity)
    setProduct(product,quantity);
}

//get product from localStorage;

const getStoredShoppingCart =()=>{
    let cart ={};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart =JSON.parse(storedCart);
    }
    return cart;
}

//save product into localStorage;

const setProduct=(pd,qt)=>{
    const cart = getStoredShoppingCart();
    cart[pd] = qt;
    const cartStringified = JSON.stringify(cart);

    window.localStorage.setItem('cart',cartStringified);
    // window.localStorage.setItem(pd,qt);
}

//display product in UI;

const displayProduct =(product,quantity)=>{
    const productContainer = document.getElementById('product-container');
    const productDiv = document.createElement('productDiv');
    productDiv.innerHTML =` 
                <h2>${product} </h2>
                <h3>${quantity}</h3>
    `;
    
    productContainer.appendChild(productDiv);
}

