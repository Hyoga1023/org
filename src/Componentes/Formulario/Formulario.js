import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../Campo"
import ListaOpciones from '../ListaOpciones/Index'
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }
    
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }
 

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el Colaborador.</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar Nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar Puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar Enlace de Foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear Colaborador
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <CampoTexto
                titulo="Titulo"
                placeholder="Ingresar Titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto
                titulo="Color"
                placeholder="Ingresar el Color en Hexagesimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type ="color"
                />
                <Boton>
                Registrar Equipo
            </Boton>
            </form>

    </section>
}

export default Formulario