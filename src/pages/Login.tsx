import { Home } from './Home';
import facebookLogo from '../assets/images/facebook-logo.png';
import githubLogo from '../assets/images/github-logo.png';
import googleLogo from '../assets/images/google-logo.png';
import {
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  GOOGLE_AUTH_URL,
} from '../constants';

export function Login() {
  return (
    <div className="flex">
      <div className="flex w-1/2">
        <Home />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 w-1/2 bg-violet-400 dark:bg-purple-900">
        <div className="flex">
          <h2 className="font-Capriola text-zinc-900 dark:text-zinc-300">
            Logar no Portfólio de HiOk Dev
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <a
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px] overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-200"
            href={FACEBOOK_AUTH_URL}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              <img className="w-8 h-8 ml-1" src={facebookLogo} alt="Facebook" />
            </div>
            <div className="flex items-center h-10 w-48 px-3 bg-blue-800">
              <span className="font-bold text-zinc-100">
                Logar com Facebook
              </span>
            </div>
          </a>
          <a
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px] overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-200"
            href={GITHUB_AUTH_URL}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              <img className="w-8 h-8 ml-1" src={githubLogo} alt="Facebook" />
            </div>
            <div className="flex items-center h-10 w-48 px-3 bg-neutral-800">
              <span className="font-bold text-zinc-100">Logar com Github</span>
            </div>
          </a>
          <a
            className="flex justify-start items-center gap-1 h-10 bg-slate-50 dark:bg-slate-200 rounded-[4px] overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-200"
            href={GOOGLE_AUTH_URL}
          >
            <div className="bg-slate-50 dark:bg-slate-100">
              <img className="w-8 h-8 ml-1" src={googleLogo} alt="Facebook" />
            </div>
            <div className="flex items-center h-10 w-48 px-3 bg-red-800">
              <span className="font-bold text-zinc-100">Logar com Google</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
