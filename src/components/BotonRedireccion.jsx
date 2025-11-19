import { useNavigate } from 'react-router-dom';

function BotonRedireccion() {
    const navInicio = useNavigate();
    const irAlInicio = () => {
        navInicio('/');
    };
    return <button onClick={irAlInicio}>Ir al inicio</button>;
}
export default BotonRedireccion;
