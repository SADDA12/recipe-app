import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";
import AddRecipe from "./pages/add-recipe";

const router = createBrowserRouter([
  { path:"/", element:<Recipes/> },
  { path:"/recipes", element: <Recipes/> },
  { path:"/recipes/:id", element: <Recipe/> },
  { path:"/recipes/addrecipe", element: <AddRecipe/> }
]);

function App() {
  return (
    <>
    <NavBar/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
