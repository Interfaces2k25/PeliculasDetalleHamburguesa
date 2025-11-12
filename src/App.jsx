import Contenedor from "./features/Contenedor.jsx"
import peliculas from "./data/peliculas.js"
import Card from "./features/Card.jsx"
import Interprete from "./pages/Interprete.jsx"

function App() {
  return (
    <>
      <h1 className="contenedor__h1">Mis Intérpretes</h1>
      <h2 className="titulo2">Listado de intérpretes disponibles:</h2>
      <Contenedor>
        {/* Centrar todas las tarjetas en el centro */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            {/* MOSTRAR INTÉRPETES */}
            {/* {peliculas.map((pelicula) => //Recorrer películas
              pelicula.actores.map((actor, index) => //Recorrer cada actor
                <Card
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen} >
                  {actor.biografia}
                </Card>
              ))} */}

            {/* MOSTRAR PELÍCULAS */}
            {peliculas.map((pelicula) => (
              <Card
                key={pelicula.id}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
              >
                <p><strong>Director:</strong> {pelicula.director}</p>
                <p><strong>Género:</strong> {pelicula.clasificacion}</p>
                <p><strong>Nota:</strong> {pelicula.nota}</p>
                <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
              </Card>
            ))}

          </div>
        </div>
      </Contenedor>
    </>
  )
}

export default App
