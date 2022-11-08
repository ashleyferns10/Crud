import { FormControl, FormGroup, Input, InputLabel, styled, Button } from "@mui/material";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUser } from "../Svc/api";

const Container = styled(FormGroup)`
    width: 50%;
    margin: auto;
    & > div {
      margin-top: 20px;
    }
`

const defaultVal = {
  name:"",
  email:"",
  hobby:"",
}

const EditUser = () => {

  const[user, setUser] = useState({defaultVal});
  const {name, email, hobby} = user;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    loadUserDetails();
  }, [])

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data)
  }

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate('/all');
  }

  return (
    <div>
      <Container injectFirst>
          <h2>Edit User</h2>
        <FormControl>
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input onChange={(e) => {onValueChange(e)}} name="name" value={name} id="my-input" aria-describedby="my-helper-text" style={{marginTop: "30px"}}/>
        </FormControl>
        <FormControl htmlFor="my-input">
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => {onValueChange(e)}} name="email" value={email} id="my-input" aria-describedby="my-helper-text" style={{marginTop: "30px"}}/>
        </FormControl>
        <FormControl htmlFor="my-input">
          <InputLabel>Hobby</InputLabel>
          <Input onChange={(e) => {onValueChange(e)}} name="hobby" value={hobby} id="my-input" aria-describedby="my-helper-text" style={{marginTop: "30px"}}/>
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => {editUserDetails()}}>Edit User</Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default EditUser;
