import { useNavigate } from "react-router-dom";
import carhome from "../assets/images/carhome.jpg";
import data from "../data.json";
import adsr2 from "../assets/images/adsr2.png";
import Footer from "../components/Footer";
import Endnote from "../components/Endnote";
import Yearendsale from "../components/Yearendsale";

const Productspage = () => {
  const limitedProducts = data.slice(0, 12);

  const navigate = useNavigate();
  const handleSeeMoreClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <section className="bg-gray-300 rounded-2xl h-auto lg:h-[470px] p-5 lg:pl-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className=" lg:p-5 lg:pt-10">
              <h1 className="pl-5">Openings hours</h1>
              <div className="lg:pt-5 lg:space-y-1 pt-1">
                {["Mondays", "Tuesdays", "Wednesdays", "Thursdays"].map(
                  (day) => (
                    <div key={day}>
                      <h2 className="font-bold text-xs">
                        {day}:
                        <span className="font-normal block pl-5">
                          7:30am to 6:00pm
                        </span>
                      </h2>
                    </div>
                  )
                )}

                <div>
                  <h2 className="font-bold text-xs pt-1">
                    Fridays:
                    <span className="font-normal block pl-5">
                      7:30am to 10:00pm
                    </span>
                  </h2>
                </div>

                <div>
                  <h2 className="font-bold text-xs pt-1">
                    Saturdays:
                    <span className="font-normal block pl-5">
                      9:30am to 10:00pm
                    </span>
                  </h2>
                </div>

                <div className="">
                  <h2 className="font-bold text-xs pt-1">
                    Sundays:
                    <span className="font-normal block pl-5">
                      9:30am to 6:00pm
                    </span>
                  </h2>
                </div>
              </div>

              <div>
                <h2 className="font-bold text-xs pt-2 lg:pt-5">
                  Location:
                  <span className="font-normal block pl-5">
                    New York, Liverpool
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex-1  lg:p-5 lg:w-1/2">
              <img
                className="w-full  rounded-2xl h-[250px] lg:h-[400px] "
                src={carhome}
                alt="carhome"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mt-[50px] lg:mt-10">
            <h1 className="text-blue-800 font-bold text-xl">Product</h1>
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
                    className="w-[250px] h-50 object-cover mb-4 rounded-md"
                  />
                </div>

                <div className="  h-[40px] ">
                  <h3 className="text-sm font-semibold">{product.item}</h3>
                </div>

                <div className="p-2  px-1 flex gap-4 justify-between items-center">
                  <p className=" p-2 text-lg text-blue-800 font-bold">{product.price}</p>
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
      <div className="  mt-5  ">
        <img className="  " src={adsr2} alt="" />
      </div>

      <Yearendsale />

      <Footer />
      <Endnote />
    </div>
  );
};

export default Productspage;
