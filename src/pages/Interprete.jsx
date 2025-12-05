import { useState, useMemo } from "react"

import peliculas from "../data/peliculas"

import Card from "../components/Card.jsx"
import SearchBar from "../components/SearchBar.jsx"


function Interprete() {
const [searchTerm, setSearchTerm] = useState(""); //Guardar el texto que el usuario introduce en el buscador

  // Usamos useMemo para memorizar la lista filtrada.
  // Solo se recalcula si 'searchTerm' cambia.
  const filteredInterpretes = useMemo(() => {

    // Crear un array con todos los actores
    const todosLosActores = peliculas.flatMap((pelicula) =>
      pelicula.actores.map((actor, idInterprete) => ({
        ...actor,
        idPelicula: pelicula.id, // Necesario para el Link
        idInterprete: idInterprete, // Necesario para el Link
        esNota10: pelicula.nota === 10, // Ejemplo de dato adicional
      }))
    );

    if (!searchTerm) {
      return todosLosActores;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return todosLosActores.filter((actor) =>
      // Filtra por el nombre del actor
      actor.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);


  return (
    <>
      <button>
        <a href="/" className="text-black hover:underline ml-4 bg-white p-2 rounded-2xl">← Volver al inicio</a>
      </button>

      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">Intérpretes Destacados</h1>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar intérpretes por nombre..."
      />

      {/* MOSTRAR INTÉRPETES */}
      <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
        {filteredInterpretes.length > 0 ? (
          filteredInterpretes.map((actor, index) => (
            <Card
              key={index}
              nombre={actor.nombre}
              foto={actor.imagen}
              //Ruta al detalle del intérprete
              to={`/interpretes/${index}`} >
              {actor.biografia}
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 p-4">
            No se encontraron intérpretes con el término `{searchTerm}`.
          </p>
        )}
      </div>

      {/* <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
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
      </div> */}
    </>
  )

}

export default Interprete