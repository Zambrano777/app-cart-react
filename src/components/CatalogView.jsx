import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CatalogView = ({ items, handlerDelete }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const onDeleteProduct = (id) => {
    handlerDelete(id);
  };

  const onCatalog = () => {
    navigate("/catalog");
  };

  return (
    <>
      <div>
        <h3 className="text-white">Carro de Compras</h3>
      </div>
      <table className="table table-bordered text-white">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.product.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(item.product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-center fw-bold">
              total
            </td>
            <td colSpan="2" className="text-center fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-success" onClick={onCatalog}>
        Seguir comprando
      </button>
    </>
  );
};
