import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";



const MainLayout = () => {


  return (
    <div>

          <main >
          <Navbar />
          <Outlet />
          
          

          </main>
       
    </div>

    
    
    
  );
};

export default MainLayout;
