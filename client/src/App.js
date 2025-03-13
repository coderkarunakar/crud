
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./components/getuser/User";
import Add from "./components/adduser/Add";
import Edit  from './components/updateuser/Edit';
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
      path:"/edit/:id",
      element: <Edit/>,
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
