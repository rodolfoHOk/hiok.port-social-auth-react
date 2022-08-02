import { Home } from './Home';

export function Profile() {
  const imageUrl = 'https://avatars.githubusercontent.com/u/57463848?v=4';
  const name = 'Rudolf HiOk';
  const email = 'rudolf.test@email.com';

  return (
    <div className="flex ">
      <div className="flex w-1/2">
        <Home />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-1/2">
        <div className="flex mb-4">
          <h2 className="font-Capriola text-2xl text-zinc-900 dark:text-zinc-300">
            Profile
          </h2>
        </div>
        <div className="flex">
          {imageUrl ? (
            <img
              className="max-w-[250px] rounded-full"
              src={imageUrl}
              alt={name}
            />
          ) : (
            <div className="flex justify-center items-center rounded-full w-52 h-52 bg-gradient-to-br from-violet-400 to-purple-900">
              <span className="text-zinc-300 dark:text-zinc-300 text-4xl text-center overflow-hidden">
                {name}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center text-zinc-900 dark:text-zinc-300">
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-md">{email}</p>
        </div>
      </div>
    </div>
  );
}
