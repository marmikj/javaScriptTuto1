import "./App.css";
import { useEffect, useState } from "react";
import PostApi from "./Components/PostApi";
import PreviousState from "./Components/PreviousState";
import User from "./Components/User";
import StateWithObject from "./Components/StateWithObject";

import NoteState from "./Components/NoteState";
import About from "./Components/About";

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch("https://fakestoreapi.com/users").then((result) => {
      result.json().then((response) => {
        setData(response);
        setUsername(response[0].username);
        setPhone(response[0].phone);
        setEmail(response[0].email);
        setUserId(response[0].id);
      });
    });
  }

  function DeleteUser(id) {
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);

        getList();
      });
    });
  }
  function SelectUser(id) {
    let item = data[id - 1];
    setUsername(item.username);
    setPhone(item.phone);
    setEmail(item.email);
    setUserId(item.id);
  }
  function updateUser(id) {
    let item = { username, phone, email, userId };
    fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);

        getList();
      });
    });
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>username</th>
            <th>password</th>
            <th>city</th>
            <th>street</th>
            <th>number</th>
            <th>phone Number</th>
            <th>zip code</th>
            <th>lat</th>
            <th>long</th>
            <th>Delete Record</th>
            <th>Update Record</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name.firstname}</td>
              <td>{item.name.lastname}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.address.city}</td>
              <td>{item.address.street}</td>
              <td>{item.address.number}</td>
              <td>{item.address.zipcode}</td>
              <td>{item.phone}</td>
              <td>{item.address.geolocation.lat}</td>
              <td>{item.address.geolocation.long}</td>
              <td>
                <button
                  onClick={() => {
                    DeleteUser(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    SelectUser(item.id);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h1>Update user Form </h1>
        <input
          type="text "
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text "
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>

      <>
        <PostApi />
      </>

      <>
        <PreviousState />
      </>

      <>
        <User count={count} />
        <button onClick={() => setCount(Math.floor(Math.random() * 10))}>
          Update count
        </button>
      </>
      <>
        <StateWithObject />
      </>
      <>
        <NoteState>
          
          <About/>
        </NoteState>
      </>
    </div>
  );
}

export default App;
