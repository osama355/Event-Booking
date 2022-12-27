import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import MiladForm from "./forms/MiladForm";
import OfficeForm from "./forms/OfficeForm";
import BirthDayForm from "./forms/BirthdayForm";
import SchoolForm from "./forms/SchoolForm";
import WeddingForm from "./forms/WeddingForm";
import DestinationForm from "./forms/DestinationWeddingForm";
import { AuthProvider } from "./context/AuthContext";
import PrivateBook from "./private/PrivateBook";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<PrivateBook/>} />
          <Route path="/register/wedding" element={<WeddingForm />} />
          <Route path="/register/birthday" element={<BirthDayForm />} />
          <Route path="/register/milad" element={<MiladForm />} />
          <Route path="/register/official" element={<OfficeForm />} />
          <Route path="/register/school" element={<SchoolForm />} />
          <Route path="/register/destination" element={<DestinationForm />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
