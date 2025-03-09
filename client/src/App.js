
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./components/getuser/User";

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      element: "User add page",
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
