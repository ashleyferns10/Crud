import { FormControl, FormGroup, Input, InputLabel, styled, Button } from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Svc/api";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { addUserCount } from "../state/action-creators";

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

const AddUser = () => {

  const[user, setUser] = useState({defaultVal});

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { addUserCount } = bindActionCreators(actionCreators, dispatch)

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const handleClick = async () => {
    await addUser(user);
    navigate('/all');
    addUserCount(1)
  }

  return (
    <div>
      <Container>
          <h2>Add User</h2>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => {onValueChange(e)}} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => {onValueChange(e)}} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Hobby</InputLabel>
          <Input onChange={(e) => {onValueChange(e)}} name="hobby" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => {handleClick()}}>Add User</Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddUser;
