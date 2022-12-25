import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Home from '../src/pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
