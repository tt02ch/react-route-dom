const initialState = {
    cart: []
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CART_ADD":
        const existProduct = state.cart.find(
          item => item.productDetail.id === action.productDetail.id
        );
        if(existProduct) {
          return {
            cart: state.cart.map(
              item => item.productDetail.id === action.productDetail.id ?
              {
                ...item,
                quantity: item.quantity + action.quantity
              }
              :
              item
            )
          };
        } else {
          return {
            cart: [
              ...state.cart,
              {
                id: Date.now(),
                quantity: action.quantity,
                productDetail: action.productDetail
              }
            ]
          };
        }
      case "CART_UPDATE_QUANTITY":
        return {
          cart: state.cart.map(
            item => item.productDetail.id === action.productId ?
            {
              ...item,
              quantity: action.quantity
            }
            :
            item
          )
        };
      case "CART_DELETE":
        return {
          cart: state.cart.filter(item => item.productDetail.id !== action.productId)
        }
      default:
        return state;
    }
  }