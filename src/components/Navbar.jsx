import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = styled(AppBar)`
  background: #1111
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 50px;
  color: black;
  text-decoration: none
`

const Display = styled(Button)`
font-size: 17px;
margin-top: 4px;
margin-right: 50px;
color: black;
text-decoration: none
`

const Navbar = () => {
  const amount = useSelector((state) => state.amount)
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to='/'>CRUD</Tabs>
        <Tabs to='/add'>Add User</Tabs>
        <Tabs to='/all'>All Users</Tabs>
        <Display>Total Users: {amount}</Display>
      </Toolbar>
    </Header>
  )
}

export default Navbar
