import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerDeleteProduct, handlerAddProductCart } =
    useItemsCart();

  return (
    <>
      <Navbar />

      <div className="container my-4 ">
        <h3 className="text-white">Cart App</h3>

        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProduct={handlerDeleteProduct}
        />
      </div>
    </>
  );
};
