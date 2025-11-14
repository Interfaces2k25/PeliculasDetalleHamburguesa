import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"

function Interprete() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">Intérpretes Destacados</h1>
      </div>

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