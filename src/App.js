import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
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
      <Menu/>
    </div>
  );
}

export default App;
