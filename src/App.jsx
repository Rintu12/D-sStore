import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductsList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
// import { Switch } from "@material-ui/core";


  const App = () => {

   
  return (
    <Router>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
   </Routes>
   <Routes>
     <Route path="/products/:category" element={<ProductList/>}/>
   </Routes>
   <Routes>
     <Route path="/product/:id" element={<Product/>} />
   </Routes>
   <Routes>
   <Route path="/resister" element={<Register/>} />
   </Routes>
   <Routes>
     <Route path="/login" element={<Login/>} />
   </Routes>
   <Routes>
     <Route path="/cart" element={<Cart/>} />
   </Routes>
    </Router>
  );
};
 export default App;
