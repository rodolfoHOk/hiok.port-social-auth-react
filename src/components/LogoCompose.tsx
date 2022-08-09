import { FacebookLogo, GithubLogo, GoogleLogo } from 'phosphor-react';

export function LogoCompose() {
  return (
    <div className="flex justify-start items-center">
      <div className="flex items-center justify-center h-9 w-9 bg-gradient-to-r from-zinc-50 to-purple-300 rounded-full translate-x-[-0px]">
        <div className="flex items-center justify-center h-8 w-8 bg-gradient-to-tr from-blue-800 to-blue-400 rounded-full">
          <FacebookLogo size={40} weight="regular" className=" text-zinc-100" />
        </div>
      </div>

      <div className="flex items-center justify-center h-9 w-9 bg-gradient-to-r from-zinc-50 to-purple-300 rounded-full translate-x-[-15px]">
        <div className="flex items-center justify-center h-8 w-8 bg-gradient-to-tr from-zinc-900 to-zinc-500 rounded-full">
          <GithubLogo
            size={28}
            weight="regular"
            className="text-zinc-100 translate-y-[-2px]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center h-9 w-9 bg-gradient-to-r from-zinc-50 to-purple-300 rounded-full translate-x-[-30px]">
        <div className="flex items-center justify-center h-8 w-8 bg-gradient-to-tr from-red-800 to-red-400 rounded-full">
          <GoogleLogo size={40} weight="regular" className="text-zinc-100" />
        </div>
      </div>

      <div className="flex flex-col font-bold font-Capriola text-lg leading-5 text-purple-600 dark:text-purple-500 translate-x-[-25px]">
        <span>Login</span>
        <span className="ml-4">Social</span>
      </div>
    </div>
  );
}
