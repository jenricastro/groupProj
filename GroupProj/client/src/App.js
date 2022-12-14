import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from './user/login/login';
import Register from './user/register/register';
import Content from "./components/Home";
import Form from "./components/Form";
import SCAdd from './components/SCadd';
import SCview from './components/SCview';
import SCedit from './components/SCedit';
import logo from './user/login/assets/logo.jpg';




function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("User", JSON.stringify(user))
    setLoginUser(user)
  }
    
  return (
    <div className="App">
      <div class="topnav">
        <img className="logo" src={logo} alt="logo"/>
        <h3> Soccer Tracker</h3>
        <a className= "moving-left" href="/form">My Calendar</a>
        <a className= "moving-left" href="/landingpage">Leagues</a>
        <a className="moving-left" onClick={() => updateUser({})} href="/">Logout</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="" element = {user && user._id ? <Content updateUser={updateUser} /> : <Login updateUser={updateUser}/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element ={<Register />}/>
          <Route path="/landingpage" element ={<Content />}/>
          <Route path="/form" element ={<Form />}/>
          <Route path="/add/" element ={<SCAdd />}/>
          <Route path="/view/:id" element ={<SCview />}/>
          <Route path="/edit/:id" element ={<SCedit />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;