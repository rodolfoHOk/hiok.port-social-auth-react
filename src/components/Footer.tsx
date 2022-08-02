export function Footer() {
  return (
    <footer className="h-8 z-10 flex bg-zinc-100 dark:bg-zinc-900">
      <div className="w-full flex justify-center items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
        <span>Login Social</span>
        <div className="relative pl-3">
          <span className="before:content-none[''] before:w-1 before:h-1 before:rounded-sm before:bg-zinc-500 before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
            Todos os direitos reservados
          </span>
        </div>
        <div className="relative pl-3">
          <span className="before:content-none[''] before:w-1 before:h-1 before:rounded-sm before:bg-zinc-500 before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
            2022
          </span>
        </div>
      </div>
    </footer>
  );
}
