import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { removeUser } from "../Store/Slices/UserSlice";

function DisplayUsers() {
  const data = useSelector((state) => {
    return state.users;
  });
const dispatch=useDispatch()
  const deleteUser=(index)=>{
    dispatch(removeUser(index))
  }
  console.log(data);
  return (
    <Wrapper>
        <div className="content">
            {
                data.map((user,index) =>{
                    return(
                    <li key={index}>{user}<button className=" btn delete-btn" onClick={()=>deleteUser(index)}> <AiFillDelete/></button></li>
                    )
                })
            }
            </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;
