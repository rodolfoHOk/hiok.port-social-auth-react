import NotFoundImage from '../assets/images/404-error-animated.svg';

export function NotFound404() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-0">
      <div className="mt-16">
        <img className="w-[400px]" src={NotFoundImage} alt="Image Not Found" />
      </div>
      <div>
        <span className="font-bold font-Capriola text-xl sm:text-2xl text-center uppercase text-zinc-700 dark:text-zinc-400">
          Página não encontrada
        </span>
      </div>
    </div>
  );
}
