export function Home() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh_-_64px_-_32px)] justify-center gap-8">
      <div className="flex flex-col gap-2 px-8">
        <h2 className="font-Capriola font-bold text-2xl text-zinc-800 dark:text-zinc-200">
          OAuth2 Social Login
        </h2>
        <h2 className="font-Capriola font-bold text-lg text-zinc-800 dark:text-zinc-200">
          with Java Spring & React JS
        </h2>
      </div>
      <div className="flex px-8 gap-2">
        <img
          alt="Logo-Java"
          height="30"
          width="40"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        />
        <img
          alt="Logo-Spring"
          height="30"
          width="40"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
        />
        <img
          alt="Logo-Ts"
          height="30"
          width="40"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
        />
        <img
          alt="Logo-React"
          height="30"
          width="40"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        />
        <img
          alt="Logo-HTML"
          height="30"
          width="40"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        />
        <img
          alt="Logo-CSS"
          height="30"
          width="40"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        />
      </div>
    </div>
  );
}
