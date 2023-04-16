import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { useContext } from 'react';
import { Context } from './Components/Context';
import Products from './Components/Products';
import Technologies from './Components/Technologies';
import { Navigate, Route,Routes } from 'react-router-dom';
import Html from './Components/Html';
import Css from './Components/Css';
import Javascript from './Components/Javascript';
import Rcomp from './Components/Rcomp';

function App() {
  const {login}=useContext(Context)
  return (
    <div className="App">
      {login?<Nav/>:null}
      <Routes>
        <Route path='/' element={login?<Home/>:<Login/>}/>
        <Route path='/products' element={login?<Products/>:<Navigate to='/'/>} />
        <Route path='/tech' element={login?<Technologies/>:<Navigate to='/'/>}>
          <Route path='html' element={login?<Html/>:<Navigate to='/'/>} />
          <Route path='' element={<Navigate to='html'/>}/>
          <Route path='css' element={login?<Css/>:<Navigate to='/'/>}/>
          <Route path='js' element={login?<Javascript/>:<Navigate to='/'/>} />
          <Route path='react' element={login?<Rcomp/>:<Navigate to='/'/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
