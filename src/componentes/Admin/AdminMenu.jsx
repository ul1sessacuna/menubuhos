import { useEffect, useState } from 'react';
import './AdminMenu.css';

function AdminMenu() {
    const [tragos, setTragos] = useState([]);
    const [nuevoTrago, setNuevoTrago] = useState({ nombre: '', precio: '', descripcion: '' });
    const [mostrarLista, setMostrarLista] = useState(false);
    const [modoEdicion, setModoEdicion] = useState(null);

    useEffect(() => {
        const almacenados = JSON.parse(localStorage.getItem('tragos')) || [];
        setTragos(almacenados);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoTrago({ ...nuevoTrago, [name]: value });
    };

    const agregarTrago = () => {
        if (!nuevoTrago.nombre || !nuevoTrago.precio) return;
        const actualizados = [...tragos, nuevoTrago];
        setTragos(actualizados);
        localStorage.setItem('tragos', JSON.stringify(actualizados));
        setNuevoTrago({ nombre: '', precio: '', descripcion: '' });
    };

    const borrarTrago = (index) => {
        const actualizados = tragos.filter((_, i) => i !== index);
        setTragos(actualizados);
        localStorage.setItem('tragos', JSON.stringify(actualizados));
    };

    const editarTrago = (index) => {
        setModoEdicion(index);
        setNuevoTrago(tragos[index]);
    };

    const actualizarTrago = () => {
        const actualizados = [...tragos];
        actualizados[modoEdicion] = nuevoTrago;
        setTragos(actualizados);
        localStorage.setItem('tragos', JSON.stringify(actualizados));
        setNuevoTrago({ nombre: '', precio: '', descripcion: '' });
        setModoEdicion(null);
    };

    return (
        <div className="admin-container">
            <h2>Administrar Tragos</h2>

            <div className="formulario-trago">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={nuevoTrago.nombre}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="precio"
                    placeholder="Precio"
                    value={nuevoTrago.precio}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="descripcion"
                    placeholder="Descripción"
                    value={nuevoTrago.descripcion}
                    onChange={handleChange}
                />
                {modoEdicion !== null ? (
                    <button onClick={actualizarTrago}>Actualizar</button>
                ) : (
                    <button onClick={agregarTrago}>Agregar</button>
                )}
            </div>

            <button className="mostrar-btn" onClick={() => setMostrarLista(!mostrarLista)}>
                {mostrarLista ? 'Ocultar bebidas' : 'Mostrar bebidas'}
            </button>

            {mostrarLista && (
                <ul className="lista-tragos">
                    {tragos.map((trago, index) => (
                        <li key={index}>
                            <div className="trago-info">
                                <strong>{trago.nombre}</strong> - ${trago.precio}
                                <p>{trago.descripcion}</p>
                            </div>
                            <div className="botones">
                                <button onClick={() => editarTrago(index)}>Editar</button>
                                <button onClick={() => borrarTrago(index)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminMenu;
