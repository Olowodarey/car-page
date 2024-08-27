import Footer from "../components/Footer";
import Endnote from "../components/Endnote";



const Checkout = () => {
  return (
    <div className="bg-gray-300 h-[70vh]">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex justify-center pt-10 ">
          <h1>Check out</h1>
        </div>

        <div className="flex mt-10 gap-10 justify-between">
          <div className="  rounded-2xl bg-white h-[450px] w-[700px] px-10 p-10">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Name :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Email Address :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Address :
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-gray-300 px-3 py-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="gap-10 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Contact Number :
              </label>
              <div className="flex gap-10">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className=" w-[250px] bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button className=" bg-blue-700 border px-3 py-2 rounded-lg  w-[250px] ">
                  Confirm
                </button>
              </div>
            </div>
          </div>

          {/* item side */}

          <div className=" rounded-2xl bg-white h-[450px] w-[350px] px-12 p-10">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email2"
              >
                Items Total :
              </label>
              <input
                type="email"
                id="email2"
                name="email2"
                className=" w-[250px] bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password2"
              >
                Delivery fee :
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                className="w-[250px] bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword2"
              >
                Total Payment :
              </label>
              <input
                type="password"
                id="confirmPassword2"
                name="confirmPassword2"
                className="w-[250px] bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button className=" bg-blue-700 border px-3 py-2 rounded-lg  w-[250px] mt-11 ">
              Confirm
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Endnote />
    </div>
  );
};

export default Checkout;
