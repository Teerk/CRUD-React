import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import {v4 as uuidv4} from 'uuid';

function App() {

  const usersData = [
    {id:uuidv4(), name:'Jocelyn Paola', username:'ichbinjocely'},
    {id:uuidv4(), name:'Antonio', username:'un.agt'},
    {id:uuidv4(), name:'Cesar Garcia', username:'elbuencesar'},
  ]


  const [users, setUsers] = useState(usersData);

  const addUser = (user) =>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
    // console.log('Usuario insertado:', {user});
     console.log('Lista de usuarios:', {users});
  }

  const deleteUser = (id) =>{
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado)
  }

  //EDITAR
  const [editing, setEditing] = useState(false);

  const [currentUser, setcurrentUser] = useState({
    id:null,
    name:'',
    username:''
  });

  const editRow =(user)=>{
    setEditing(true);
    setcurrentUser({
      id:user.id, name:user.name, username:user.username
    })

  }

  const updateUser = (id,updatedUser) =>{
    setEditing(false);
    setUsers(users.map(user =>(user.id === id?updatedUser : user )));
  }

  return (
    <div className="container">
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Editar usuario</h2>
                <EditUserForm currentUser = {currentUser} updateUser = {updateUser}/>
              </div>
            ) : (
                <div>
                  <h2>Add user</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )
          }       

        </div>
      <div className="flex-large">
        <h2>View users</h2>
        <UserTable usuarios = {users} deleteUser={deleteUser} setEditing = {setEditing} editRow = {editRow}/>
      </div>
    </div>
  </div>
  );
}

export default App;
