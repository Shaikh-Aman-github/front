import './App.css';

import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import authService from './services/auth.service';
import Protected from './protect';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Home from './pages/Home/Home';
import Error from './pages/NotFound/notfound';


function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if(user){
      setCurrentUser(user);
    }
  }, []);



  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Protected Component={Home}/>}/>
          <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
