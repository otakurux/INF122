import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './componentes/Login.js';
import Registro from './componentes/Registro.js';
import Perfil from './componentes/Perfil.js';

import Navbar from './componentes/Navbar.js';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <Router>
          <div className='main'>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path='/login' Component={Login} />
              <Route path='/registro' Component={Registro} />
              <Route path='/perfil' Component={Perfil} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
