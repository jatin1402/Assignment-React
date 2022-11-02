import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Editpage from './pages/Editpage';
import Homepage from './pages/Homepage';
// import Homepage from './components/Homepage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
          <Route  path="/" element={<Homepage />} />
          <Route  path="editInfo" element={<Editpage />} />
        
      </Routes>
    </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
