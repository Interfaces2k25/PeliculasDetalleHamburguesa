import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBurguer() {
    // Estado del menú: abierto o cerrado
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Botón hamburguesa que sea invisible en pantallas medianas y grandes */}
            <button onClick={() => setOpen(!open)} className="text-3xl md:hidden">
                ☰
            </button>
            {/* Menú controlado por el estado */}
            <nav className={open ? "block" : "hidden"}>
                <NavLink to="/" onClick={() => setOpen(false)}>Inicio</NavLink>
                <NavLink to="/peliculas" onClick={() => setOpen(false)}>Películas</NavLink>
                <NavLink to="/interpretes" onClick={() => setOpen(false)}>Intérpretes</NavLink>
            </nav>
        </>
    );
}