
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "../data.json"; // Assuming you have the data.json file
import { changeQuantity, removeItem } from "../stores/Cartstore"; // Redux action for changing quantity
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = (props) => {
  const { data: cartItem } = props;
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

  const handleRemoveItem = () => {
    dispatch(removeItem(productId)); // Dispatch the removeItem action with the productId
};

  return (
    <div className="bg-gray-500 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md mt-1">
      <h3 className="text-xs">{detail.item}</h3>
      <div className="flex justify-between items-center">
        <img src={detail.imageUrl} alt={detail.item} className="w-12" />
        <p>
          ${(parseFloat(detail.price.replace("$", "")) * quantity).toFixed(2)}
        </p>
        <div className="flex justify-between gap-2">
          <button
            className="bg-red-400 rounded-full w-6 h-6 text-black"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-green-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handlePlusQuantity}
          >
            +
          </button>

          <button
          className=" "
          onClick={handleRemoveItem}
        >
          <  DeleteIcon fontSize="medium" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
