import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"

function Pelicula() {
    return (
        <>
        <div>
          <h1 className="text-4xl font-bold text-center mt-10 mb-6">Películas Destacadas</h1>
        </div>
        
            {/* MOSTRAR PELÍCULAS */}
            {/* mx-auto centra toda la fila en el centro */}
            <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
            {peliculas.map((pelicula) => (
              <Card
                key={pelicula.id}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}>

                <p><strong>Director:</strong> {pelicula.director}</p>
                <p><strong>Género:</strong> {pelicula.clasificacion}</p>
                <p><strong>Nota:</strong> {pelicula.nota}</p>
                <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
              </Card>
            ))}
            </div>
        </>
    )
}
export default Pelicula