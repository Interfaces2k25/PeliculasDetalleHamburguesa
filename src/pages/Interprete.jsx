import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"

function Interprete() {
  // Crear un array con todos los actores
  const todosLosActores = peliculas.flatMap(p => p.actores);

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">Intérpretes Destacados</h1>
      </div>

      {/* MOSTRAR INTÉRPETES */}
      <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
        {todosLosActores.map((actor, index) => //Recorrer cada actor
            <Card
              key={index}
              nombre={actor.nombre}
              foto={actor.imagen}
              //Ruta al detalle del intérprete
              to={`/interpretes/${index}`} >
              {actor.biografia}
            </Card>
          )}
      </div>
    </>
  )

}

export default Interprete