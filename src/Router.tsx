import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound404 } from './pages/NotFound404';
import { Profile } from './pages/Profile';

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/oauth2/redirect" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
