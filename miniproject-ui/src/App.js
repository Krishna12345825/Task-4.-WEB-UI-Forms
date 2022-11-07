import './App.css';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddActor from './actor/AddActor';
import EditActor from './actor/EditActor';
import ViewActor from './actor/ViewActor';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addactor" element={<AddActor />} />
        <Route exact path="/editactor/:id" element={<EditActor />} />
        <Route exact path="/viewactor/:id" element={<ViewActor />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
