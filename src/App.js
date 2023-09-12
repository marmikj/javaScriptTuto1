import {
  Link,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Products from "./Components/Products";
import DashBoard from "./Components/DashBoard";
import Cart from "./Components/Cart";
import RootLayout from "./Components/RootLayout";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<RootLayout />}></Route>
          <Route index element={<DashBoard />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
