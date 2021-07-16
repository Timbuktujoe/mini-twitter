import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data'
import {useState} from 'react'
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  const [userData, setUserData] = useState(data)
 
  return (
    <div className="App">
      <Sidebar userData={userData} setUserData={setUserData} />
    </div>
  );
}

export default App;
