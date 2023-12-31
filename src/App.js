import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
   </Routes>
  );
}

export default App;
