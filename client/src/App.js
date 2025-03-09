
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: "Home page",
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
