import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import {About} from './components/About/About'
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
    </div>
    
    
  );
}

export default App;
