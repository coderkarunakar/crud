
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./components/getuser/User";
import Add from "./components/adduser/Add";

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      // just rendering the add component
      element: <Add/>,
    },
    {
      path:"/edit",
      element: "Update users page",
    }

  ])
  return (
    <div className="App">
      {/* this provides routes to this complete application */}
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
