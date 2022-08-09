import { useAuth } from '../context/AuthenticationContext';
import { LogoCompose } from './LogoCompose';
import { LoggedUserButton } from './LoggedUserButton';
import { Hamburger } from './Hamburger';
import { Fragment, useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';

export function Header() {
  const { user } = useAuth();
  let isAuthenticated = user ? true : false;

  const [open, setOpen] = useState(false);

  return (
    <header className="relative h-14 z-10 flex items-center justify-between bg-slate-200 dark:bg-zinc-800 shadow-md dark:shadow-black">
      <div className="flex items-center ml-4">
        <div className="block sm:hidden">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <Hamburger open={open} setOpen={setOpen} />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="absolute top-14 left-0 flex justify-center w-full bg-slate-200 dark:bg-zinc-800 border-t-2 border-slate-300 dark:border-zinc-900 shadow-md dark:shadow-black animate-navInTop">
                    <NavBar />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <Link className="ml-14 sm:ml-0" to={'/'}>
          <LogoCompose />
        </Link>
      </div>

      <div className="flex gap-4 mr-4">
        <div className="hidden sm:block">
          <NavBar />
        </div>

        {isAuthenticated && <LoggedUserButton />}
      </div>
    </header>
  );
}
