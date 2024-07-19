function shoppingCart(){

    const cartItems=[]
    return{

        getCartItems:function(){

            return cartItems;
        }
    };
}

const cart=shoppingCart();
console.log('Cart Items:' ,cart.getCartItems());