import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate(); 

  const handleSeeMoreClick = (slug) => {
    navigate(`/ProductDetails/${slug}`); 
  };

  return (
    <div key={product.id} className="border-2 border-gray-500 rounded-2xl p-4">
      <div>
        <img
          src={product.imageUrl}
          alt={product.item}
          className="w-[250px] h-50 object-cover mb-4 rounded-md"
        />
      </div>

      <div className="h-[40px]">
        <h3 className="text-sm font-semibold">{product.item}</h3>
      </div>

      <div className="p-2 px-1 flex gap-4 justify-between items-center">
        <p className="p-2 text-lg text-blue-800 font-bold">{product.price}</p>
        <button
          onClick={() => handleSeeMoreClick(product.slug)}  
          className="bg-black text-white rounded-full px-2 h-6"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Card;
