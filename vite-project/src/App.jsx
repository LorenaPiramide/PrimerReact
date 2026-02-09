import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componentes/ButtonPrueba.jsx'
import ButtonPrueba from './componentes/ButtonPrueba.jsx'
import { useState } from 'react'

function App() {

  const tareas = [{
      "id": "1",
      "nombre": "Tomar café",
      "completada": false
    }
    ];

    // Estado para controlar las tareas completadas. Hay que ponerlo abajo, en la ternaria
    const [mostrarTodas, setMostrarTodas] = useState(true);

  return (
    <>
      <h1>Lista de tareas</h1>
      <ButtonPrueba mensaje="Cambiar" onClick={(mostrarTodas) => {
        // El botón cambia el mostrarTodas de true a false
        // Creo que es como un switch, si está true mostrará las completadas y cuando cambie a false se mostrarán las no completadas
        setMostrarTodas(!mostrarTodas);
      }}/>
      {
        tareas.map((tarea) => {
          return (
            // Es importante poner los key
            // Aquí no hay que escapar {} porque este return ya está en el ts, por las llaves de arriba. Esto se puede hacer en el componente Tarea.jsx mejor
            mostrarTodas ? <Tarea tarea={tarea} key={tarea.id}/> : ""
          )
        })
      }
    </>
  )
}

export default App
