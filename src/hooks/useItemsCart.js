import { useEffect, useReducer } from "react";
import { ItemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityCart } from "../reducer/itemActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {

  const [cartItems, dispatch] = useReducer(ItemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1
      //   },
      // ]);
      dispatch({
        type: UpdateQuantityCart,
        payload: product,
      });
    } else {
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  const handlerDeleteProduct = (id) => {
    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
  };
  
  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProduct
  };
};
