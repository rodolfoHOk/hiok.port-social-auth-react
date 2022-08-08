import { LeftSide } from './LeftSide';

export function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh_-_56px_-_32px)] justify-center items-center">
      <LeftSide />
      <div className="flex md:flex-1">{''}</div>
    </div>
  );
}
