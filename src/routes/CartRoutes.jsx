/* eslint-disable react/prop-types */
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";

export const CartRoutes = ({
  handlerAddProductCart,
  handlerDeleteProduct,
  cartItems,
}) => {
  const navigate = useNavigate();

  const onCartVoid = () => {
    navigate("/catalog");
  };
  return (
    <>
      <Routes>
        <Route
          path="catalog"
          element={
            <CartView handler={(product) => handlerAddProductCart(product)} />
          }
        />
        <Route
          path="cart"
          element={
            cartItems?.length <= 0 ? (
              <div className="alert alert-warning">
                No hay productos en el carro de compra <br />
                <button className="btn btn-success" onClick={onCartVoid}>
                  Ir a seleccionar productor
                </button>
              </div>
            ) : (
              <div className="my-4 w-50">
                <CatalogView
                  items={cartItems}
                  handlerDelete={handlerDeleteProduct}
                />
              </div>
            )
          }
        />
        <Route path="/" element={<Navigate to={"/catalog"} />} />
      </Routes>
    </>
  );
};
