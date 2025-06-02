import { Routes, Route } from 'react-router-dom';
import PublicMenu from './componentes/Publico/PublicMenu';
import AdminMenu from './componentes/Admin/AdminMenu';
import Login from './componentes/Login/Login'
import ProtectedRoute from './componentes/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicMenu />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminMenu />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
