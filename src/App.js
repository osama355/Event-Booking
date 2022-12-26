import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Home from '../src/pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Booking from './pages/Booking';
import MiladForm from './forms/MiladForm';
import OfficeForm from './forms/OfficeForm';
import BirthDayForm from './forms/BirthdayForm';
import SchoolForm from './forms/SchoolForm';
import WeddingForm from './forms/SchoolForm';
import DestinationForm from './forms/DestinationWeddingForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/register/wedding' element={<WeddingForm/>} />
        <Route path='/register/birthday' element={<BirthDayForm/>} />
        <Route path='/regiser/milad' element={<MiladForm/>} />
        <Route path='/register/official' element={<OfficeForm/>} />
        <Route path='/register/school' element={<SchoolForm/>} />
        <Route path='/register/destination' element={<DestinationForm/>} />
      </Routes>
    </div>
  );
}

export default App;
