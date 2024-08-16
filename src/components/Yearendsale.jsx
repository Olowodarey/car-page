import { useNavigate } from "react-router-dom";
import data from "../data.json";

const Yearendsale = () => {

  const carProducts = data.filter(product => product.type === "car").slice(0, 1);
  const exhaustProducts = data.filter(product => product.type === "Exhaust").slice(0, 1);
  const intakeProducts = data.filter(product => product.type === "Intake").slice(0, 1);
  const rimsProducts = data.filter(product => product.type === "Rim").slice(0, 1);

  const limitedProducts = [...carProducts, ...exhaustProducts, ...intakeProducts , ...rimsProducts ];


  const navigate = useNavigate();
  const handleSeeMoreClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10">
      <div className="mt-[500px] lg:mt-10">
        <h1 className="text-blue-800 font-bold text-xl">Year End Sales</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {limitedProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-500 rounded-2xl p-4"
          >
            <div className="">
              <img
                src={product.imageUrl}
                alt={product.item}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
            </div>

            <div className="  h-[40px] ">
              <h3 className="text-sm font-semibold">{product.item}</h3>
            </div>
            <p className=" p-2 text-lg text-blue-700 font-bold">{product.price}</p>

            <div className="p-2  px-5 flex gap-4 justify-between">
              <button className="bg-black text-white rounded-full px-3 ">
                Cart
              </button>
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
  );
};

export default Yearendsale;
