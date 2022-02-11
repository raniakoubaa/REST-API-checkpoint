
import './App.css';
import AddNewUser from './components/AddNewUser';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <AddNewUser/>
      <UserList/>
    </div>
  );
}

export default App;
