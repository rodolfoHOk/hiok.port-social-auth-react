import { Popover, Transition } from '@headlessui/react';
import { CaretDown, SignOut, UserSquare } from 'phosphor-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';

export function LoggedUserButton() {
  const { user, logout } = useAuth();

  return (
    <Popover className="relative flex items-center h-14">
      {({ open }) => (
        <>
          <Popover.Button
            className={`flex items-center h-14 gap-1 rounded-full hover:opacity-80 hover:text-purple-500 dark:hover:text-purple-600 transition-all duration-200 ${
              open
                ? 'text-purple-500 dark:text-purple-600'
                : 'text-zinc-700 dark:text-zinc-300'
            }`}
          >
            <img
              className={`w-9 h-9 border-2  hover:border-purple-500 dark:hover:border-purple-600 rounded-full transition-all duration-200 ${
                open
                  ? 'border-purple-500 dark:border-purple-600'
                  : 'border-zinc-700 dark:border-zinc-300'
              }`}
              src={user?.imageUrl}
              alt="imagem do usuário"
            />
            <CaretDown size={14} weight="fill" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-75"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-75"
          >
            <Popover.Panel className="absolute top-16 right-0 py-3 z-20 flex bg-slate-200 dark:bg-zinc-800 rounded-md">
              <div className="flex flex-col gap-1 text-zinc-700 dark:text-zinc-300">
                <span className="font-Capriola px-3">
                  {user?.name.split(' ')[0]}
                </span>
                <Link
                  to="/profile"
                  className="flex items-center gap-1 px-3 h-10 hover:bg-purple-500 dark:hover:bg-purple-600"
                >
                  <UserSquare size={20} />
                  <span>Perfil</span>
                </Link>
                <button
                  className="flex items-center gap-1 px-3 h-10 hover:bg-purple-500 dark:hover:bg-purple-600"
                  onClick={logout}
                >
                  <SignOut size={20} weight="regular" />
                  <span>Sair</span>
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
