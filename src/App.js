import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthView from "./views/AuthView";
import HomeView from "./views/HomeView";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthView />,
    errorElement: <AuthView />,
  },
  {
    path: "/home",
    element: <HomeView />,
    errorElement: <AuthView />,
  }, 
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
