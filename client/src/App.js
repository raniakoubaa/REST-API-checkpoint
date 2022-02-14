
import './App.css';
import AddNewUser from './components/AddNewUser';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserInfo from './components/UserInfo';


function App() {
  return (
    <div className="App">
      <AddNewUser/>
      
      <Router>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/info/:id" element={<UserInfo/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
