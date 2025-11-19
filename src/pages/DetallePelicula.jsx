import{ useParams } from 'react-router-dom';

function DetallePelicula() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">Detalle de la Película</h1>
      <p className="text-center">ID de la película: {id}</p>
    </div>
  );
 
}

export default  DetallePelicula;