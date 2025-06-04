import { Routes, Route } from 'react-router-dom';
import PublicMenu from './componentes/Publico/PublicMenu';
import AdminMenu from './componentes/Admin/AdminMenu';
import Login from './componentes/Login/Login'
import ProtectedRoute from './componentes/ProtectedRoute';

function App() {
  const [logeado, setLogeado] = useState(false);

  return (
    <>
      {logeado ? (
        <AdminMenu />
      ) : (
        <>
          <PublicMenu />
          <Login onLogin={() => setLogeado(true)} />
        </>
      )}
    </>
  );
}

export default App;
