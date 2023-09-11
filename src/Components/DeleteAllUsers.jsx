import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clearAllUsers } from "../Store/Slices/UserSlice"; 

function DeleteAllUsers() {
  const dispatch=useDispatch()
  const deleteAllUsers=()=>{
    dispatch(clearAllUsers())
  }
  return<Wrapper>
    <button className=" btn clear-btn" onClick={deleteAllUsers}> clear Users</button>
  </Wrapper>
}
const Wrapper = styled.section`
.clear-btn{
  text-transform:uppercase
  background-color:#db338a;
  margin-top:2rem;
}
`
export default DeleteAllUsers;
