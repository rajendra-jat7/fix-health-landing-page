// import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorsInCity from "./components/Doctors";
import Landing from "./components/Landing";

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Landing/>
    },
    {
      path:"/:city",
      element:<DoctorsInCity/>
    }
  ])
  return (
    <div className="bg-black ">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
