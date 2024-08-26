import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import CartTab from "../components/Carttap";
import { useSelector} from 'react-redux';

const MainLayout = () => {

  const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div>

          <main  className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56" }`}>
          <Navbar />
          <Outlet />

          </main>
       
          <CartTab />
    </div>
    
    
  );
};

export default MainLayout;
