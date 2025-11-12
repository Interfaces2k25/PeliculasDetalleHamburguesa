import Contenedor from "./Contenedor"
import Interprete from "./Interprete.jsx"
import InterpretePeli10 from './InterpretePeli10.jsx'
import peliculas from "./data/peliculas.js"

function App() {
  return (
    <>
      <h1 className="contenedor__h1">Mis Intérpretes</h1>
      <h2 className="titulo2">Listado de intérpretes disponibles:</h2>
      <Contenedor>
        {/* Centrar todas las tarjetas en el centro */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            {/* <Interprete nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>

          {/* <Interprete nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/200px-Al_Pacino.jpg">
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete>


          <Interprete nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>


          <Interprete nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/200px-Al_Pacino.jpg">
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete> */}


            {peliculas.map((pelicula) => //Recorrer películas
            pelicula.actores.map((actor, index) => //Recorrer cada actor
              <Interprete 
              key={index} 
              nombre={actor.nombre} 
              foto={actor.imagen}>
                {actor.biografia}
              </Interprete>
          ))}


            {/* {peliculas.filter(p => p.clasificacion === "Drama") //Primero siempre el filtro
             .map(p => ( //Por cada pelicula
              p.actores.map((actor, index) => //Recorrer cada actor
              <Interprete 
              key={index} 
              nombre={actor.nombre} 
              foto={actor.imagen}>
                {actor.biografia}
              </Interprete>
          )))} */}

            {/* {peliculas.map(pelicula => ( // Recorrer películas
              pelicula.actores.map((actor, index) => ( // Recorrer cada actor
                <InterpretePeli10
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen}
                  esNota10={pelicula.nota === 10} 
                >
                  {actor.biografia}
                </InterpretePeli10>
              ))
            ))} */}


          </div>
        </div>
      </Contenedor>
    </>
  )
}

export default App
