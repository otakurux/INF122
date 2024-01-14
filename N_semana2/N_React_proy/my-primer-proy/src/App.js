import './App.css';
import Evento from './N_Components/Evento.js'
import EventoB from './N_Components/EventoB.js'
// import evento2 from './N_Imagenes/valentina.jpg';

function App() {
  return (
    <div className="App">
      <Evento />
      <EventoB title="Py Pizza 03 - PyPuzzle"
        image={require(`./N_Imagenes/img1.jpg`)}
        dateLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
        placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
        description="
        ¡Hola Pythonista!
        Participa en este Evento Presencial de la comunidad Python La Paz
        ¿Cuánto conoces de Python?
        Aprende a trabajar en equipo resolviendo increíbles acertijo
        ¡Anímate a ser parte de esta actividad!
        "
      />
      <EventoB title="Valentina"
        
        image={require(`./N_Imagenes/valentina.jpg`)}
        dateLiteral="fecha de agregacion: 25 November 2021"
        placeLiteral="Role: Mage"
        description="
        ¡Hola jugadores de Mobile Legends!
        ¡Descubre cuál es el mejor héroe de Mobile Legends, para tu posición favorita y estilo de juego!
        Valentina es una maga letal a la par que curiosa, por varios motivos. El primero es que ella puede curarse con ataques y habilidades si tiene más nivel o experiencia que el enemigo. Otra razón es que puede hacer un buen daño y control de masas con las habilidades Golpe de las Sombras y Sombra Arcana. ¡Los enemigos no escaparán de ti!
        "
      />
    </div>
  );
}

export default App;