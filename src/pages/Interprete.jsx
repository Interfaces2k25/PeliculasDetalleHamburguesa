import peliculas from "../data/peliculas"
import Card from "../features/Card.jsx"

function Interprete() {
  return (
    <>
    {/* <h1 className="contenedor__h1">Mis Intérpretes</h1>
    <h2 className="titulo2">Listado de intérpretes disponibles:</h2> */}

        {/* MOSTRAR INTÉRPETES */}
            {peliculas.map((pelicula) => //Recorrer películas
              pelicula.actores.map((actor, index) => //Recorrer cada actor
                <Card
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen} >
                  {actor.biografia}
                </Card>
              ))}
    </>
)
  
}

export default Interprete