import peliculas from "../data/peliculas"
import Card from "../features/Card.jsx"

function Pelicula() {
    return (
        <>
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
        </>
    )

}
export default Pelicula