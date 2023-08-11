
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddStudent from './students/AddStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewStudent from './students/ViewStudent';
import EditStudent from './students/EditStudent';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addStudent" element={<AddStudent />} />
          <Route exact path="/viewStudent/:id" element={<ViewStudent />} />
          <Route exact path="/editStudent/:id" element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
