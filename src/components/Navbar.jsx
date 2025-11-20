import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [open, setOpen] = useState(false);
  <>
    return (

    {/* Botón hamburguesa que sea invisible en pantallas medianas y grandes */}
    <button onClick={() => setOpen(!open)} className="text-3xl md:hidden">
      ☰
    </button>

    {/* NavBar normal en pantallas medianas y grandes */}
    <nav
      className="w-full bg-white text-black p-4 shadow-lg justify-center gap-8 hidden md:flex text-lg"
      aria-label="Barra de navegación"
    >
      <Link to="/">Inicio</Link>
      <Link to="/peliculas">Películas</Link>
      <Link to="/interpretes">Intérpretes</Link>
      <Link to="/admin">Admin</Link>
    </nav>

    {/* Menú hamburguesa sólo visible para pantallas pequeñas controlado por el estado */}
    <nav className={`absolute top-16 left-0 w-full bg-green-900 flex flex-col p-4 gap-4 md:hidden transition-all ${open ? "block" : "hidden"}`}
>
                <NavLink to="/" onClick={() => setOpen(false)}>Inicio</NavLink>
                <NavLink to="/peliculas" onClick={() => setOpen(false)}>Películas</NavLink>
                <NavLink to="/interpretes" onClick={() => setOpen(false)}>Intérpretes</NavLink>
            </nav>
    );
  </>
}

export default Navbar;
