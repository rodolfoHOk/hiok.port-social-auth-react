import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';

export function Footer() {
  return (
    <footer className="h-8 z-10 flex bg-slate-200 dark:bg-zinc-900">
      <div className="w-full flex justify-center items-center gap-3 text-md text-zinc-500 dark:text-zinc-700">
        <span>Login Social</span>
        <div className="relative pl-3">
          <span className="before:content-none[''] before:w-1 before:h-1 before:rounded-sm before:bg-zinc-400 before:dark:bg-zinc-800 before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
            2022
          </span>
        </div>
        <div className="relative pl-3 flex items-center gap-1">
          <span className="before:content-none[''] before:w-1 before:h-1 before:rounded-sm before:bg-zinc-400 before:dark:bg-zinc-800 before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
            HiOk Dev
          </span>
          <a href="https://www.linkedin.com/in/rodolfohokino/" target="_blank">
            <LinkedinLogo size={24} />
          </a>
          <a href="https://github.com/rodolfoHOk" target="_blank">
            <GithubLogo size={20} />
          </a>
          <a href="mailto:hioktec@gmail.com">
            <Envelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
