import './App.css';
import { NavBar } from './components/Navbar';
import { Presentation } from './pages/Presentation';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation/>
     
    </div>
  );
}

export default App
