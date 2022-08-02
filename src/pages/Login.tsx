import { Home } from './Home';
import facebookLogo from '../assets/images/facebook-logo.png';
import githubLogo from '../assets/images/github-logo.png';
import googleLogo from '../assets/images/google-logo.png';

export function Login() {
  return (
    <div className="flex">
      <div className="flex w-1/2">
        <Home />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 bg-violet-400 dark:bg-purple-900">
        <div className="flex flex-col gap-4">
          <a
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px]"
            href={'/'}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              <img className="w-8 h-8 ml-1" src={facebookLogo} alt="Facebook" />
            </div>
            <div className="flex items-center h-10 w-44 px-3 rounded-r-[4px] bg-blue-800">
              <span className="font-bold text-zinc-100">
                Logar com Facebook
              </span>
            </div>
          </a>
          <a
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px]"
            href={'/'}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              <img className="w-8 h-8 ml-1" src={githubLogo} alt="Facebook" />
            </div>
            <div className="flex items-center h-10 w-44 px-3 rounded-r-[4px] bg-neutral-800">
              <span className="font-bold text-zinc-100">Logar com Github</span>
            </div>
          </a>
          <a
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px]"
            href={'/'}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              <img className="w-8 h-8 ml-1" src={googleLogo} alt="Facebook" />
            </div>
            <div className="flex items-center h-10 w-44 px-3 rounded-r-[4px] bg-red-800">
              <span className="font-bold text-zinc-100">Logar com Google</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
