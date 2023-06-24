import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='contianer'>
          <NavbarBrand href='/'>
            Ristour Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      
    </div>
  );
}

export default App;
