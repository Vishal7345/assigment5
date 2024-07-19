function shoppingCart() {
    const cartItems = [];

    function itemIndexInCart(productId) {
        return cartItems.findIndex(item => item.id === productId);
    }

    return {
        addItem: function(product) {
            const itemIndex = itemIndexInCart(product.id); 

            if (itemIndex !== -1) {
                cartItems[itemIndex].quantity++;
            } else {
                cartItems.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
            }
        },
        removeItem: function(productId) {
            const indexToRemove = itemIndexInCart(productId); 

            if (indexToRemove !== -1) {
                cartItems.splice(indexToRemove, 1);
            }
        },
        getCartItems: function() {
            return cartItems;
        }
    };
}

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());

const product1 = { id: 1, name: 'Product1', price: 600 };
const product2 = { id: 2, name: 'Product2', price: 100 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart Items:', cart.getCartItems()); 


