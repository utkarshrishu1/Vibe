import { Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/welcome';
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<h1>Hello, welcome to home page</h1>}/>
      <Route path='*' element={<h1>Oops, Page Not Found!</h1>}/>
    </Routes>
  );
}

export default App;
