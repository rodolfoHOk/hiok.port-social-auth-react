import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';

export function Header() {
  const { user, logout } = useAuth();
  let isAuthenticated = user ? true : false;

  return (
    <header className="relative h-14 z-10 flex items-center justify-between bg-slate-200 dark:bg-zinc-800">
      <div className="ml-4">
        <Link
          className="font-bold font-Capriola text-xl text-purple-600 dark:text-purple-500"
          to={'/'}
        >
          Login Social
        </Link>
      </div>
      <div className="mr-4">
        <nav>
          {isAuthenticated ? (
            <ul className="flex gap-4">
              <li>
                <Link
                  className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-purple-600 hover:dark:text-purple-500 transition-colors duration-200"
                  to={'/profile'}
                >
                  Profile
                </Link>
              </li>
              <li>
                <a
                  className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-purple-600 hover:dark:text-purple-500 transition-colors duration-200"
                  onClick={logout}
                >
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-4">
              <li>
                <Link
                  className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-blue-500 hover:dark:text-purple-500 transition-colors duration-200"
                  to={'/login'}
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
