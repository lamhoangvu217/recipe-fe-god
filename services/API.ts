
import Cuisine from "./APIs/cuisine";
import Recipe from "./APIs/recipe";

const API = {
  Cuisine: new Cuisine(),
  Recipe: new Recipe()
}

export default API;