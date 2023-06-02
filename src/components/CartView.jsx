/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { getProduct } from "../services/productService";

export const CartView = ({ handler }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const findAll = async () => {
    const prods = await getProduct();
    setProducts(prods);
    setIsLoading(false)
  };

  useEffect(() => {
    findAll()
  }, []);
  return (
    <>
    {
      isLoading && <div className="alert alert-info">Cargando...</div> 
    }
      <div className="row">
        {products.map((product) => (
          <div className="col-4 my-2" key={product.id}>
            <CartItem
              handler={handler}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};
