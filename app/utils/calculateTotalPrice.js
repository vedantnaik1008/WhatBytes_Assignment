export const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
};
