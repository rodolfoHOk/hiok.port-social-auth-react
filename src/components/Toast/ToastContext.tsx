import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer, ToastInfos } from './ToastContainer';

interface ToastContextData {
  notify: (toast: ToastInfos) => void;
}

const ToastContext = createContext({} as ToastContextData);

interface ToastProviderProps {
  children: ReactNode;
  position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
}

export function ToastProvider({ children, position }: ToastProviderProps) {
  const [toastList, setToastList] = useState<ToastInfos[]>([]);

  function addToast(toast: ToastInfos) {
    setToastList((currentList) => [...currentList, toast]);
  }

  function deleteToast(id: string) {
    setToastList((currentList) =>
      currentList.filter((toast) => toast.id !== id)
    );
  }

  function notify(toast: ToastInfos) {
    addToast(toast);
  }

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}

      {createPortal(
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
            <ToastContainer
              key={toast.id}
              toastInfos={toast}
              onClose={deleteToast}
            />
          ))}
        </div>,

        document.body
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
