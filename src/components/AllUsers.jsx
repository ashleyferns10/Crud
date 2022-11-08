import {Table, TableBody, TableCell, TableHead, TableRow, Button, styled} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Svc/api";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { deleteUserCount } from "../state/action-creators";

const StyledTable = styled(Table)`
  width: 70%;
  margin: 30px auto 0 auto;
`

const THead = styled(TableRow)`
  background: black;
  & > th{
    color: white;
  }
`


const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const { deleteUserCount } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response);
    //  console.log(response);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
    deleteUserCount(1);
  }

  
  return (
    <div>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Hobby</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user, count = 1) => (
            <TableRow key={user._id}>
              <TableCell>{count++}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.hobby}</TableCell>
              <TableCell>
                <Button variant="contained" color="success" style={{marginRight: "10px"}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant="contained" color="error" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default AllUsers;
