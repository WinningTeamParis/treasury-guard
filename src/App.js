import './App.css';
import Home from './components/Home'
import Welcome from './components/Welcome';
import { Ipfs, ChartPoint } from './scripts/ipfs'
import fs from "fs";
import * as ethers from 'hardhat'

function App() {
  return (
    <div style={{height: '100vh'}}>
      <Home/>
    </div>
  );
}

(async () => {
    const ipfsContact = ethers.getContractAt("IpfsStorage", "0x5FbDB2315678afecb367f032d93F642f64180aa3")
    const ipfs = new Ipfs(ipfsContact);
    await ipfs.addChartPoint(
        new ChartPoint(
            Date.now(),
            10,
            [5, 3, 2]
        ),
        "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    )
})();

export default App;
