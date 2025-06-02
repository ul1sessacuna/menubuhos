
import { useEffect, useState } from 'react';
import './PublicMenu.css';

function PublicMenu() {
  const [tragos, setTragos] = useState([]);

  useEffect(() => {
    const tragosGuardados = JSON.parse(localStorage.getItem('tragos')) || [
      { nombre: "Gin Tonic", precio: 3000, descripcion: "Gin con agua tónica y limón" },
      { nombre: "Fernet con Coca", precio: 2800, descripcion: "Clásico argentino con mucho hielo" },
      { nombre: "Mojito", precio: 3200, descripcion: "Ron, menta, azúcar y soda" },
    ];
    setTragos(tragosGuardados);
  }, []);

  return (
    <div className="menu-container">
      <video className="background-video" autoPlay loop muted onError={() => console.log('Error cargando video')}>
        <source src="/fondo.mp4" type="video/mp4" />
      </video>

      <div className="content-overlay">
        <header>
          <img src="/buhos.png" alt="Logo" className="logo" />
          <h1>Menú</h1>
        </header>

        <div className="tragos-list">
          {tragos.map((trago, index) => (
            <div key={index} className="trago-card" style={{ "--i": index }}>
              <h3>{trago.nombre}<span>${trago.precio}</span></h3>
              <p>{trago.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicMenu;
