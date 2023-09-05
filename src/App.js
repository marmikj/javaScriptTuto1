
import "./App.css";
import HeaderContainer from "./Containers/HeaderContainer";
// import Users from "./Components/Users";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  return (
    <div className="App">
      
      <HeaderContainer/>
      {/* <Users data={{name:'marmik',age:27}}/> */}
      <HomeContainer/>
    </div>
  );
}

export default App;
