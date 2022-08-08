import { House, IdentificationCard, SignIn, SignOut } from 'phosphor-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import { LogoCompose } from './LogoCompose';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isProfilePage = location.pathname === '/profile';

  const { user, logout } = useAuth();
  let isAuthenticated = user ? true : false;

  return (
    <header className="relative h-14 z-10 flex items-center justify-between bg-slate-200 dark:bg-zinc-800">
      <div className="flex items-center ml-4">
        <Link to={'/'}>
          <LogoCompose />
        </Link>
      </div>

      <div className="mr-4">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                className={`flex items-center gap-1 h-14 p-2 text-lg text-zinc-700 dark:text-zinc-300 border-purple-500 dark:border-purple-600 hover:text-zinc-100 hover:bg-purple-500 dark:hover:bg-purple-600 transition-colors duration-200 ${
                  isHomePage
                    ? 'border-t-slate-200 dark:border-t-zinc-800 hover:border-t-purple-500 dark:hover:border-t-purple-600 border-b-4 border-t-4'
                    : ''
                }`}
                to={'/'}
              >
                <House size={24} weight="regular" />
                <span>Início</span>
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    className={`flex items-center gap-1 h-14 p-2 text-lg text-zinc-700 dark:text-zinc-300 border-purple-500 dark:border-purple-600 hover:text-zinc-100 hover:bg-purple-500 dark:hover:bg-purple-600 transition-colors duration-200 ${
                      isProfilePage
                        ? 'border-t-slate-200 dark:border-t-zinc-800 hover:border-t-purple-500 dark:hover:border-t-purple-600 border-b-4 border-t-4'
                        : ''
                    }`}
                    to={'/profile'}
                  >
                    <IdentificationCard size={24} weight="regular" />
                    <span>Perfil</span>
                  </Link>
                </li>

                <li>
                  <a
                    className="flex items-center gap-1 h-14 p-2 text-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-100 hover:bg-purple-500 dark:hover:bg-purple-600 transition-colors duration-200"
                    onClick={logout}
                  >
                    <SignOut size={24} weight="regular" />
                    <span>Sair</span>
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className={`flex items-center gap-1 h-14 p-2 text-lg text-zinc-700 dark:text-zinc-300 border-purple-500 dark:border-purple-600 hover:text-zinc-100 hover:bg-purple-500 dark:hover:bg-purple-600 transition-colors duration-200 ${
                    isLoginPage
                      ? 'border-t-slate-200 dark:border-t-zinc-800 hover:border-t-purple-500 dark:hover:border-t-purple-600 border-b-4 border-t-4'
                      : ''
                  }`}
                  to={'/login'}
                >
                  <SignIn size={24} weight="regular" />
                  <span>Logar</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
