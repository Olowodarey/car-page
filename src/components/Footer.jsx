import { FaSearch, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-neutral-900 h-[200px]">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 ">
        <div className="">
          <div className="flex mt-10 pt-10 text-white justify-between">
            <div>
              <h1>JDJ MUSCLE</h1>
              <p>spare Parts and Turning</p>
            </div>
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-2 pr-4  text-black border rounded-lg focus:outline-none focus:border-blue-500 w-[120px] lg:w-[250px]"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>

              <div className="flex justify-between">
                <div className="hover:bg-blue-300 rounded-md p-1">
                  <FaFacebook />
                </div>

                <div className="hover:bg-blue-300 rounded-md p-1">
                  <FaInstagram />
                </div>

                <div className="hover:bg-blue-300 rounded-md p-1">
                  <FaTwitter />
                </div>
              </div>

              
            </div>
            
          </div>
          <div className="mt-5 text-xs text-white  ">
                <p>96/3 Hospital Road, Kalubowila, Dehiwela</p>
                <p>+94 76 700 0000</p>
                <p>jdjmuscletuning@gmail.com</p>
                <p>Help Center </p>

              </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
