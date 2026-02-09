import ButtonPrueba from "./componentes/ButtonPrueba";
import eliminarTarea from "../servicios/eliminarTarea"

export default function Tarea({tarea}) {

    return (
        <li id={tarea.id}>
            {tarea.nombre}
            <ButtonPrueba mensaje="Eliminar tarea" onClick={elimnarTarea}/>
        </li>
    )
}