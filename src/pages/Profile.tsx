import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import { Home } from './Home';
import { LeftSide } from './LeftSide';

export function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-around min-h-[calc(100vh_-_56px_-_32px)] md:flex-row md:justify-center">
      <div className="flex w-full items-center justify-center pt-12 md:pt-0 md:w-1/2 md:justify-start">
        <LeftSide />
      </div>
      {user && (
        <div className="flex w-full justify-center items-center md:w-1/2">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex mb-2">
              <h2 className="font-Capriola text-2xl text-zinc-900 dark:text-zinc-300">
                Perfil
              </h2>
            </div>
            <div className="flex">
              {user.imageUrl ? (
                <img
                  className="max-w-[250px] rounded-full"
                  src={user.imageUrl}
                  alt={user.name}
                />
              ) : (
                <div className="flex justify-center items-center rounded-full w-52 h-52 bg-gradient-to-br from-violet-400 to-purple-900">
                  <span className="text-zinc-300 dark:text-zinc-300 text-4xl text-center overflow-hidden">
                    {user.name}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center text-zinc-900 dark:text-zinc-300">
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-md">{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
