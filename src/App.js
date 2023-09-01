import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import DigitalClock from "./Component/DigitalClock";

function App() {
  const [mydata, setMydata] = useState([]);
  const [iserr, setErr] = useState("");
  const getApiaData = async (url) => {
    //url remove from parentis while using .get("/posts") is called
    try {
      const res = await axios.get("/posts"); //.get(url) or .get("/posts")
      setMydata(res.data);
    } catch (error) {
      setErr(error.message);
    }
  };

  // const postApi = async () => {
  //   try {
  //     const resp = await axios.post(
  //       "/posts",
  //       {
  //         id: 101,
  //         userId: 11,
  //         title: "hello",
  //         body: "welcome",
  //       }
  //     );
  //     console.log(resp);
  //   } catch (error) {
  //     setErr(error.message);
  //   }
  // };

  const putApi = async (id) => {
    try {
      const update = await axios.put(`/posts/2`, {
        userId: 9,
        title: "abc",
        body: "xyz",
      });
      console.warn(update);
      console.log(id);
    } catch (error) {
      setErr(error.message);
    }
  };

  const deleteApi = async (id) => {
    try {
      const resp1 = await axios.delete(`/posts/${id}`);
      console.warn(resp1);
      console.log(id);
    } catch (error) {
      setErr(error.message);
    }
  };
  useEffect(() => {
    // getApiaData();
    getApiaData(); // no need write anthing in parentesis
    // postApi(`${API}/posts`);
    putApi();
    deleteApi();
  }, []);

  return (
    <div className="App">
      <h1>API CRUD </h1>
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
              <th>opration</th>
            </tr>
          </thead>
          <tbody>
            {mydata.slice(0, 12).map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <button onClick={() => putApi(item.id)}>update</button>
                  <button onClick={() => deleteApi(item.id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <>
              <DigitalClock/>
      </>
    </div>
  );
}

export default App;
