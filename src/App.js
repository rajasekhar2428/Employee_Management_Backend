import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUsers from './users/AddUsers';
import EditUsers from './users/EditUser';
import ViewUsers from './users/ViewUsers';
import Login from './LoginPage/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUsers />} />
          <Route exact path="/edituser/:id" element={<EditUsers />} />
          <Route exact path="/viewuser/:id" element={<ViewUsers />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
