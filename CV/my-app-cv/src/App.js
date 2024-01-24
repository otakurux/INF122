import './App.css';
import Perfil from './componentes/Perfil';
import Info from './componentes/Info';
import ButtonContainer from './componentes/ButtonContainer';
import Work from './componentes/Work';
import Galeria from './componentes/Galeria';

function App() {
  return (
    <div className="App">
      <div className='section'>
        <Perfil 
          fotoPerfil={"./images/perfil_picture.jpeg"}
          name={"name"}
          cargo={"junio-basic"}
        />
      </div>
      <div className='section'>
        <Info />
      </div>
      <div className='section'>
        <ButtonContainer />
      </div>
      <div className='section'>
        <Work />
      </div>
      <div className='section'>
        <Galeria />
      </div>
    </div>
  );
}

export default App;
