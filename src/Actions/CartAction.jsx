export const cartAdd = (quantity, productDetail) => {
    return {
      type: "CART_ADD",
      quantity: quantity,
      productDetail: productDetail
    };
  }
  
  export const cartUpdateQuantity = (quantity, productId) => {
    return {
      type: "CART_UPDATE_QUANTITY",
      quantity: quantity,
      productId: productId
    };
  }
  
  export const cartDelete = (productId) => {
    return {
      type: "CART_DELETE",
      productId: productId
    };
  }