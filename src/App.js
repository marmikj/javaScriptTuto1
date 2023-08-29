import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


const API = "https://jsonplaceholder.typicode.com"

function App() {
  const [mydata, setMydata] = useState([]);
  const [iserr, setErr] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setMydata(response.data))
  //     .catch((error) => setErr(error.message));
  // }, []);

  const getApiaData = async (url) => { //url remove from parentis while using .get("/posts") is called
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");  //.get(url) or .get("/posts")
      setMydata(res.data);
    } catch (error) {
      setErr(error.message);
    }
  };

  useEffect(() => {
    // getApiaData(); 
    getApiaData(`${API}/posts`); // no need write anthing in parentesis
  }, []);
  return (
    <div className="App">
      <h1>data</h1>
      {iserr !== "" && <h2 style={{ color: "red" }}>{iserr}</h2>}
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>userId</th>
            <th>title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {mydata.slice(0, 12).map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
