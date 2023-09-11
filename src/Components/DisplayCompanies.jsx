import React from "react";
import {useDispatch} from "react-redux"
import {getData} from "D:/redutoolkit1/src/API/employee.jsx"

function DisplayCompanies() {
  const dispatch =useDispatch()
  const addCompany = (name,city) => {
   
    dispatch(addCompany(name));
    dispatch(addCompany(city));
  };

    return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of comapny details</div>
        <button className="btn add-btn" onClick={()=>addCompany(getData())}>ADD Company</button>
      </div>
    </div>
  );
}

export default DisplayCompanies;
