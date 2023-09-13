import { Provider } from "react-redux";
import "./App.css";

import Data from "./store/Data";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import store from "./store/store";
import { productsApi } from "./store/ApiSlice";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ApiProvider api={productsApi}>
        <Data />
        </ApiProvider>
      </Provider>
    </div>
  );
}

export default App;
