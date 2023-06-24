import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/Dishes';
import { useState } from 'react';
function App() {
  const [dishes1,setState] = useState(DISHES);

  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='contianer'>
          <NavbarBrand href='/'>
            Ristour Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes1}/>
    </div>
  );
}

export default App;
