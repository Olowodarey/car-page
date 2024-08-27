import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Productspage from "./pages/Productspage";
import ProductDetails from "./pages/ProductDetails"
import  Appointmentpage from "./pages/Appointmentpage"
import  LoginPage from "./pages/Loginpage"
import Checkout from "./pages/Checkout";


const App =() => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
             <Route index element={<Homepage  />} />
             <Route path="/product" element={<Productspage  />} />
             <Route path="/ProductDetails/:slug" element={<ProductDetails  />} />
             <Route path="/appointment" element={< Appointmentpage  />} />
             <Route path="/LoginPage" element={<  LoginPage  />} />
             <Route path="/checkout" element={<  Checkout  />} />

        </Route>
     
    ) );

  return (

    <RouterProvider router={router} />
  )



}

export default App
