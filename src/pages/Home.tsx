import { SignIn } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import { LeftSide } from './LeftSide';

export function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh_-_56px_-_32px)] justify-center items-center">
      <div className="md:flex-1">
        <LeftSide />
      </div>

      <div className="flex md:flex-1 justify-center items-center">
        {!user ? (
          <Link
            className="sm:hidden flex items-center gap-1 h-14 my-12 px-6 text-lg text-zinc-700 dark:text-zinc-300 border-2 rounded-md border-purple-500 dark:border-purple-600 hover:text-zinc-100 hover:bg-purple-500 dark:hover:bg-purple-600 transition-colors duration-200"
            to={'/login'}
          >
            <SignIn size={24} weight="regular" />
            <span>Logar</span>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
