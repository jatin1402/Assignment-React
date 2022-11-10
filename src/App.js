import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Editpage from './pages/Editpage';
import Homepage from './pages/Homepage';
// import Homepage from './components/Homepage';
function App() {
  return (
    <div className="container">
      <div className='card'>
        <div className='card-body bg-light'>
          <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Homepage />} />
            <Route  path="editInfo" element={<Editpage />} />
        
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
