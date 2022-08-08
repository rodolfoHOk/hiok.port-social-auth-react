import { Home } from './Home';
import facebookLogo from '../assets/images/facebook-logo.png';
import githubLogo from '../assets/images/github-logo.png';
import googleLogo from '../assets/images/google-logo.png';
import { Provider, useAuth } from '../context/AuthenticationContext';
import { SpinnerGap } from 'phosphor-react';
import { LeftSide } from './LeftSide';

export function Login() {
  const { isLoggingIn, login } = useAuth();

  return (
    <div className="flex flex-col justify-around min-h-[calc(100vh_-_56px_-_32px)] md:flex-row md:justify-center">
      <div className="flex w-full items-center justify-center md:w-1/2 md:justify-start">
        <LeftSide />
      </div>

      <div className="flex flex-col items-center justify-center py-6 gap-6 md:w-1/2 bg-violet-400 dark:bg-purple-900">
        <div className="flex">
          <h2 className="font-Capriola text-zinc-900 dark:text-zinc-300">
            Logar no Portfólio de HiOk Dev
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <button
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px] overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-200 disabled:opacity-75"
            onClick={() => login(Provider.facebook)}
            disabled={isLoggingIn}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              {isLoggingIn ? (
                <SpinnerGap
                  size={32}
                  weight="bold"
                  className="ml-1 text-purple-600 animate-spin"
                />
              ) : (
                <img
                  className="w-8 h-8 ml-1"
                  src={facebookLogo}
                  alt="Facebook"
                />
              )}
            </div>

            <div className="flex items-center h-10 w-48 px-3 bg-blue-800">
              <span className="font-bold text-zinc-100">
                Logar com Facebook
              </span>
            </div>
          </button>

          <button
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px] overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-200 disabled:opacity-75"
            onClick={() => login(Provider.github)}
            disabled={isLoggingIn}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              {isLoggingIn ? (
                <SpinnerGap
                  size={32}
                  weight="bold"
                  className="ml-1 text-purple-600 animate-spin"
                />
              ) : (
                <img className="w-8 h-8 ml-1" src={githubLogo} alt="Github" />
              )}
            </div>

            <div className="flex items-center h-10 w-48 px-3 bg-neutral-800">
              <span className="font-bold text-zinc-100">Logar com Github</span>
            </div>
          </button>

          <button
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px] overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-200 disabled:opacity-75"
            onClick={() => login(Provider.google)}
            disabled={isLoggingIn}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              {isLoggingIn ? (
                <SpinnerGap
                  size={32}
                  weight="bold"
                  className="ml-1 text-purple-600 animate-spin"
                />
              ) : (
                <img className="w-8 h-8 ml-1" src={googleLogo} alt="Google" />
              )}
            </div>

            <div className="flex items-center h-10 w-48 px-3 bg-red-800">
              <span className="font-bold text-zinc-100">Logar com Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
