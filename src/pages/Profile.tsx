import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import { Home } from './Home';

export function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="flex ">
      <div className="flex w-1/2">
        <Home />
      </div>
      {user && (
        <div className="flex flex-col justify-center items-center gap-4 w-1/2">
          <div className="flex mb-4">
            <h2 className="font-Capriola text-2xl text-zinc-900 dark:text-zinc-300">
              Profile
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
      )}
    </div>
  );
}
