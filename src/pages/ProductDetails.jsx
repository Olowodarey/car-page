import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import Endnote from "../components/Endnote";

const ProductDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const product = data.find((product) => product.id === parseInt(id));



  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    parseFloat(product.price.replace("$", ""))
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const similarProducts = data.filter(
    (item) => item.type === product.type && item.id !== product.id
  );

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * parseFloat(product.price.replace("$", "")));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * parseFloat(product.price.replace("$", "")));
    }
  };

  const handleSeeMoreClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div>
      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-10">
      Product / {product.type} / {product.item}
      </div>
      <div className="bg-blue-700 mt-5 h-15">
        <div className="flex text-white p-1 items-center justify-center">
          <p className="text-xs">Grab your offer soon!</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-10">
        <h1 className="text-xl font-bold ">{product.item}</h1>

        <div className="mt-10">
          <div className="flex justify-between gap-10">
            <div className="w-[950px] h-[300px] ">
              <img
                src={product.imageUrl}
                alt={product.item}
                className=" bg-transparent border rounded-2xl"
              />
            </div>
            <div>
              {" "}
              <p className="font-semibold text-sm">our price</p>
              <h1 className="mt-0 text-xl text-blue-800 font-bold ">{`  $ ${totalPrice.toFixed(
                2
              )}`}</h1>
              <p className="text-xs font-bold ">Free delivery</p>
              <p className="mt-5 text-xs">{product.details}</p>
              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={handleDecrease}
                  className="border-blue-700 border-2   text-blue-700 px-2   rounded"
                >
                  -
                </button>
                <span className="text-xl   text-blue-800 font-bold px-[45px]  border-blue-700 border-2 rounded ">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  className="border-blue-700 border-2   text-blue-700 px-2   rounded"
                >
                  +
                </button>
              </div>
              <button className="bg-blue-800 text-white p-2 rounded px-[50px] mt-1">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-[50px] lg:mt-20">
            <h1 className="text-blue-800 font-bold text-xl">Also You May Buy</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {similarProducts.slice(0, 2).map((product) => ( 
              <div
                key={product.id}
                className="border-2 border-gray-500 rounded-2xl p-4"
              >
                <div className="">
                  <img
                    src={product.imageUrl}
                    alt={product.item}
                    className="w-[250px] h-50 object-cover mb-4 rounded-md"
                  />
                </div>

                <div className="  h-[40px] ">
                  <h3 className="text-sm font-semibold">{product.item}</h3>
                </div>

                <div className="p-2  px-1 flex gap-4 justify-between items-center">
                  <p className=" p-2 text-lg text-blue-700 font-bold">{product.price}</p>
                  <button
                    onClick={() => handleSeeMoreClick(product.id)}
                    className="bg-black text-white rounded-full px-2 h-6"
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Endnote />
    </div>
  );
};

export default ProductDetails;
