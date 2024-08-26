import data from "../data.json";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card"

const Product = () => {
  const navigate = useNavigate();
  

  const limitedProducts = data.slice(0, 12);





  const handleSeeMoreClick = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10">
      <div className="mt-[50px] lg:mt-10">
        <h1 className="text-blue-800 font-bold text-xl">Product</h1>
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

export default Product;
