const addProduct =()=>{
    const productNameField = document.getElementById('product-name');
    const product = productNameField.value;
    productNameField.value ='';
    
    const productQuantityField = document.getElementById('product-quantity');
    const quantity = productQuantityField.value;
    productQuantityField.value = '';
    
    setProduct(product,quantity);
}

const setProduct=(pd,qt)=>{
    window.localStorage.setItem(pd,qt);
}