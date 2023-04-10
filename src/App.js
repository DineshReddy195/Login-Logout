import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { useContext } from 'react';
import { Context } from './Components/Context';

function App() {
  const {login}=useContext(Context)
  return (
    <div className="App">
      {/* <Login/>
      <Nav/>
      <Home/> */}
     {
      login?<div><Nav/><Home/></div>:<Login/>
     }
    </div>
  );
}

export default App;
