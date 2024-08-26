import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/Cartstore";
import data from "../data.json";
import Endnote from "../components/Endnote";
import Card from "../components/Card";

const ProductDetails = () => {
  const { slug } = useParams();
  const [details, setDetails] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [similarProducts, setSimilarProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    const product = data.find((product) => product.slug === slug);
    if (product) {
      setDetails(product);
      setTotalPrice(parseFloat(product.price.replace("$", "")) * quantity);
      const similar = data.filter(
        (p) => p.type === product.type && p.slug !== product.slug
      );
      setSimilarProducts(similar);
    } else {
      window.location.href = "/";
    }
  }, [slug, quantity]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const totalPrice = parseFloat(details.price.replace("$", "")) * quantity;
    dispatch(
      addToCart({
        productId: details.id,
        quantity: quantity,
        price: totalPrice,
      })
    );
  };

  const handleSeeMoreClick = (slug) => {
    // Update to use slug
    navigate(`/products/${slug}`); 
  };

  return (
    <div>
      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-10">
        Product / {details.type} / {details.item}
      </div>
      <div className="bg-blue-700 mt-5 h-15">
        <div className="flex text-white p-1 items-center justify-center">
          <p className="text-xs">Grab your offer soon!</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-10">
        <h1 className="text-xl font-bold ">{details.item}</h1>

        <div className="mt-10">
          <div className="flex justify-between gap-10">
            <div className="w-[950px] h-[300px] ">
              <img
                src={details.imageUrl}
                alt={details.item}
                className=" bg-transparent border rounded-2xl"
              />
            </div>
            <div>
              <p className="font-semibold text-sm">Our price</p>
              <h1 className="mt-0 text-xl text-blue-800 font-bold ">
                {details.price
                  ? `$${(
                      parseFloat(details.price.replace("$", "")) * quantity
                    ).toFixed(2)}`
                  : "Price not available"}
              </h1>
              <p className="text-xs font-bold ">Free delivery</p>
              <p className="mt-5 text-xs">{details.details?.join(" ")}</p>
              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={handleMinusQuantity}
                  className="border-blue-700 border-2 text-blue-700 px-2 rounded"
                >
                  -
                </button>
                <span className="text-xl text-blue-800 font-bold px-[45px] border-blue-700 border-2 rounded ">
                  {quantity}
                </span>
                <button
                  onClick={handlePlusQuantity}
                  className="border-blue-700 border-2 text-blue-700 px-2 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-blue-800 text-white p-2 rounded px-[50px] mt-1"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-[50px] lg:mt-20">
            <h1 className="text-blue-800 font-bold text-xl">
              Also You May Buy
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {similarProducts.slice(0, 2).map((product) => (
              <Card
                key={product.id}
                product={product}
                onSeeMoreClick={handleSeeMoreClick}
              />
            ))}
          </div>
        </div>
      </div>
      <Endnote />
    </div>
  );
};

export default ProductDetails;
