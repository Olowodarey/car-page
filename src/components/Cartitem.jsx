import React, { useState, useEffect } from "react";
import data from "../data.json";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/Cartstore";

const CartItem = (props) => {
  const { data: cartItem } = props;
  if (!cartItem) {
    console.error("CartItem data is undefined");
    return null; // Or return a fallback UI
  }

  const { productId, quantity } = cartItem;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = data.find((product) => product.id === productId);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      console.error("Product not found:", productId);
    }
  }, [productId]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(
        changeQuantity({
          productId: productId,
          quantity: quantity - 1,
        })
      );
    }
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  if (!detail) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <h3 className="text-xs">{detail.item}</h3>
      <div className="flex justify-between items-center">
        <img src={detail.imageUrl} alt={detail.item} className="w-12" />

        <p>
          ${(parseFloat(detail.price.replace("$", "")) * quantity).toFixed(2)}
        </p>
        <div className="w-20 flex justify-between gap-2">
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
