import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Page404 from "./Components/Page404";
import User from "./Components/User";
import Filter from "./Components/Filter";
import Contact from "./Components/Contact";
import Company from "./Components/Company";
import Channel from "./Components/Channel";
import Other from "./Components/Other";
import Login from "./Components/Login";
import Protected from "./Components/Protected";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/filter" element={<Filter />}></Route>
         
          <Route path="/*" element={<Navigate to="/" />}></Route>
          <Route path="/user/:name" element={<User />}></Route>
         <Route path="/contact/" element={<Contact/>}>
                <Route path="company" element={<Company/>}/>
                <Route path="channel" element={<Channel/>}/>
                <Route path="other" element={<Other/>}/>

         </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
