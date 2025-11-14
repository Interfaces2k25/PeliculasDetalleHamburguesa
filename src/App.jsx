import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"

import Contenedor from "./components/Contenedor.jsx"
import Card from "./components/Card.jsx"
import Interprete from "./pages/Interprete.jsx"
import Pelicula from "./pages/Peliculas.jsx"
import Inicio from "./pages/Inicio";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>

      <Navbar></Navbar>

      <Contenedor>
        <Routes>
          {/* <Route element={<Contenedor />}> */}
            <Route path="/" element={<Inicio />} />
            <Route path="/interpretes" element={<Interprete />} />
            <Route path="/peliculas" element={<Pelicula />} />
            <Route path="/admin" element={<Admin />} />
          {/* </Route> */}

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Contenedor>




      {/* <h1 className="contenedor__h1">Mis Intérpretes</h1>
      <h2 className="titulo2">Listado de intérpretes disponibles:</h2>
      <Contenedor> */}
      {/* Centrar todas las tarjetas en el centro */}
      {/* <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            <Interprete /> */}
      {/* <Pelicula /> */}

      {/* </div>
        </div>
      </Contenedor> */}


    </>
  )
}

export default App
