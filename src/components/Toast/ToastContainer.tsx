import { X, CheckCircle, WarningOctagon, Info, Warning } from 'phosphor-react';
import { useEffect } from 'react';

export interface ToastInfos {
  id: string;
  type: 'success' | 'danger' | 'info' | 'warning';
  title: string;
  message: string;
  duration?: number;
}

interface ToastContainerProps {
  toastInfos: ToastInfos;
  position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  onClose: (id: string) => void;
}

export function ToastContainer({
  toastInfos,
  position,
  onClose,
}: ToastContainerProps) {
  const { id, type, title, message, duration } = toastInfos;

  useEffect(() => {
    let interval = 0;
    if (duration) {
      interval = setInterval(() => {
        onClose(id);
      }, duration);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key={id}
      className={`relative flex items-center pt-3 pb-3 w-[300px] rounded shadow-md shadow-neutral-600 dark:shadow-neutral-700 ${
        type === 'success'
          ? 'bg-green-600'
          : type === 'danger'
          ? 'bg-red-600'
          : type === 'info'
          ? 'bg-blue-600'
          : 'bg-orange-500'
      } ${
        position === 'top-right'
          ? 'animate-toastInRight'
          : position === 'top-left'
          ? 'animate-toastInLeft'
          : position === 'top-center'
          ? 'animate-toastInTop'
          : position === 'bottom-right'
          ? 'animate-toastInRight'
          : position === 'bottom-left'
          ? 'animate-toastInLeft'
          : 'animate-toastInBottom'
      }`}
    >
      <button
        className="absolute top-1 right-1 text-zinc-300"
        onClick={() => onClose(id)}
      >
        <X size={24} weight="bold" />
      </button>

      <div className="ml-2 text-zinc-300">
        {type === 'success' ? (
          <CheckCircle size={32} weight="fill" />
        ) : type === 'danger' ? (
          <WarningOctagon size={32} weight="fill" />
        ) : type === 'info' ? (
          <Info size={32} weight="fill" />
        ) : (
          <Warning size={32} weight="fill" />
        )}
      </div>

      <div className="flex flex-col gap-0 ml-2">
        <p className="font-bold text-lg text-zinc-200">{title}</p>

        <p className="font-medium text-zinc-200">{message}</p>
      </div>
    </div>
  );
}
