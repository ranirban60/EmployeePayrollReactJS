import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import HomePage from './Pages/HomePage';
import HomePageTable from './Pages/HomePageTable';


function App() {
  return (
    
    <div>
      <Router>
        <Routes>
            <Route exact path='/homepage' element={< HomePage />}></Route>
            <Route exact path='/homepagetable' element={< HomePageTable />}></Route>
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
