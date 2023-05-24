/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getProduct } from "../services/productService";
import { CartItem } from "./CartItem";

export const CartView = ({ handler }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProduct());
  }, []);

  return (
    <>
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
