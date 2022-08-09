interface HamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Hamburger({ open, setOpen }: HamburgerProps) {
  return (
    <button
      className="absolute top-2 left-4 flex flex-col items-center justify-around py-[3px] w-10 h-10 z-20 bg-transparent rounded-md focus:outline-none"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`block relative w-8 h-1 bg-zinc-600 dark:bg-zinc-300 border-zinc-600 dark:border-zinc-300 border-2 rounded-full origin-left transition-all ease-linear duration-300 ${
          open ? 'rotate-45 translate-x-[5px]' : 'rotate-0'
        }`}
      />
      <div
        className={`block relative w-8 h-1 bg-zinc-600 dark:bg-zinc-300 border-zinc-600 dark:border-zinc-300 border-2 rounded-full transition-all ease-linear duration-300 ${
          open ? 'opacity-0 translate-x-[-50px]' : 'opacity-100 translate-x-0'
        }`}
      />
      <div
        className={`block relative w-8 h-1 bg-zinc-600 dark:bg-zinc-300 border-zinc-600 dark:border-zinc-300 border-2 rounded-full origin-left transition-all ease-linear duration-300 ${
          open ? '-rotate-45 translate-x-[5px]' : 'rotate-0'
        }`}
      />
    </button>
  );
}
