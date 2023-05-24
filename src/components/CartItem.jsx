import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CartItem = ({ handler, id, name, description, price }) => {

  const navigate = useNavigate()

  const onAddProduct = (product) => {
    console.log(product)
    handler(product)
    navigate("/cart")
  };
  return (
    <>
      <div className="card bg-dark">
        <div className="card-body">
          <h5 className="card-title text-white">{name}</h5>
          <p className="card-text text-white">{description}</p>
          <p className="card-text text-white">${price}</p>
          <button
            className="btn btn-primary"
            onClick={() => onAddProduct({ id,name, description, price })}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
