import './App.css';
import Home from './components/Home'
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from './components/FAQ';

function App() {
  return (
    <>
      <div style={{height: '100vh'}}>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/faq" element={<FAQ />} />
      </Routes>
      </div>

      
    </>

  );
}

export default App;
