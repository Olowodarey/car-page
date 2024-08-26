import { useNavigate } from "react-router-dom";
import data from "../data.json";
import Card from "../components/Card"

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
                   <Card
                   key={product.id} 
                   product={product}
                   onSeeMoreClick={handleSeeMoreClick}
                 />
        ))}
      </div>
    </div>
  );
};

export default Yearendsale;
