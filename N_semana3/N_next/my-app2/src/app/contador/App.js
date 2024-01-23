// // import style from './App.module.css';

// import Button from './N_Components/Button';
// import Contador from './N_Components/Contador';

// import { React, useState } from 'react';

// function App() {
//   const [nroClicks, setNroClicks] = useState(0);
//   const [show, setShow] = useState(true);

//   const Click = () => {
//     setNroClicks(nroClicks + 1);
//     console.log("click");
//   }

//   const Reiniciar = () => {
//     setNroClicks(0);
//     console.log("reiniciar");
//   }
//   const restar3 = () => {
//     setNroClicks(nroClicks - 3);
//     console.log("reiniciar");
//   }
//   const restar1 = () => {
//     setNroClicks(nroClicks - 1);
//     console.log("reiniciar");
//   }
//   const sumar3 = () => {
//     setNroClicks(nroClicks + 3);
//     console.log("reiniciar");
//   }
//   const sumar1 = () => {
//     setNroClicks(nroClicks + 1);
//     console.log("reiniciar");
//   }

//   const mostrar = () => {
//     setShow(!show);
//   }

//   return (
//     <div className="App">
//       <div className="contenedor-principal">
//         <Contador nroClicks={nroClicks} mostrar={show} />

//         <div className='contenedor-principal'>
//           <div className='contendedor-botones-secundario'>
//             <Button texto="-3" esBotonClick={true}
//               funcionClick={restar3} />
//             <Button texto="+3" esBotonClick={true}
//               funcionClick={sumar3} />
//             <Button texto="-1" esBotonClick={true}
//               funcionClick={restar1} />
//             <Button texto="+1" esBotonClick={true}
//               funcionClick={sumar1} />
//           </div>
//         </div>
//         <div className='contendedor-botones'>
//           <Button texto="Reiniciar" esBotonClick={false}
//             funcionClick={Reiniciar} />
//           <Button texto="mostrar" esBotonClick={false}
//             funcionClick={mostrar} />
//         </div>
//       </div>


//     </div>
//   );
// }

// export default App;


// // react challenges