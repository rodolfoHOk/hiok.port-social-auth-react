import { X, CheckCircle, WarningOctagon, Info, Warning } from 'phosphor-react';
import { useEffect, useState } from 'react';

export interface Notification {
  id: string;
  type: 'success' | 'danger' | 'info' | 'warning';
  title: string;
  message: string;
}

interface ToastProps {
  position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  autoClose?: boolean;
  autoCloseTime?: number;
  toastList: Notification[];
  setToastList: React.Dispatch<React.SetStateAction<Notification[]>>;
}

export function Toast({
  position,
  autoClose = false,
  autoCloseTime = 3000,
  toastList,
  setToastList,
}: ToastProps) {
  const [list, setList] = useState<Notification[]>([]);

  useEffect(() => {
    setList(toastList);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClose && toastList.length > 0) {
        deleteToast(toastList[0].id);
      }
    }, autoCloseTime);

    return () => clearInterval(interval);
  }, [toastList, autoClose, autoCloseTime]);

  function deleteToast(id: string) {
    const newToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(newToastList);
  }

  return (
    <div
      className={`fixed z-50 flex flex-col gap-2 ${
        position === 'top-right'
          ? 'top-16 right-4'
          : position === 'top-left'
          ? 'top-16 left-4'
          : position === 'top-center'
          ? 'top-16 left-auto right-auto'
          : position === 'bottom-right'
          ? 'bottom-12 right-4'
          : position === 'bottom-left'
          ? 'bottom-12 left-4'
          : 'bottom-12 left-[calc(50vw_-_150px)]'
      }`}
    >
      {toastList.map((toast) => (
        <div
          key={toast.id}
          className={`relative flex items-center pt-3 pb-3 w-[300px] rounded shadow-md shadow-neutral-600 dark:shadow-neutral-700 ${
            toast.type === 'success'
              ? 'bg-green-600'
              : toast.type === 'danger'
              ? 'bg-red-600'
              : toast.type === 'info'
              ? 'bg-blue-600'
              : 'bg-orange-500'
          }`}
        >
          <button
            className="absolute top-1 right-1 text-zinc-300"
            onClick={() => deleteToast(toast.id)}
          >
            <X size={24} weight="bold" />
          </button>
          <div className="ml-2 text-zinc-300">
            {toast.type === 'success' ? (
              <CheckCircle size={32} weight="fill" />
            ) : toast.type === 'danger' ? (
              <WarningOctagon size={32} weight="fill" />
            ) : toast.type === 'info' ? (
              <Info size={32} weight="fill" />
            ) : (
              <Warning size={32} weight="fill" />
            )}
          </div>
          <div className="flex flex-col gap-0 ml-2">
            <p className="font-bold text-lg text-zinc-200">{toast.title}</p>
            <p className="font-medium text-zinc-200">{toast.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
