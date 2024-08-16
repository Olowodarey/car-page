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


const App =() => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
             <Route index element={<Homepage  />} />
             <Route path="/product" element={<Productspage  />} />
             <Route path="/ProductDetails/:id" element={<ProductDetails  />} />

        </Route>
     
    ) );

  return (

    <RouterProvider router={router} />
  )



}

export default App
