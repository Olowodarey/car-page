import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";


const App =() => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
             <Route index element={<Homepage  />} />
        </Route>
     
    ) );

  return (

    <RouterProvider router={router} />
  )



}

export default App
