import { createSlice } from "@reduxjs/toolkit";
import getComapnies from "../../API/companies";

const companySlice = createSlice({
  name: "comapanyList",
  initialState: {Value:getComapnies},
  reducers: {
    addCompany(state, action) {},
  },
});
export default companySlice.reducer;
console.log(companySlice.actions)