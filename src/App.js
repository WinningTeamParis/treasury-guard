import './App.css';
import Home from './components/Home'
import Welcome from './components/Welcome';
import { Ipfs, ChartPoint } from './scripts/ipfs'
import fs from "fs";

function App() {
  return (
    <div style={{height: '100vh'}}>
      <Home/>
    </div>
  );
}

export default App;
