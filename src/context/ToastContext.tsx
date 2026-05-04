import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ToastContextValue {
  show: (msg: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const show = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div
        className={`fixed bottom-8 right-8 z-[9999] bg-bark-900 text-cream-50 px-6 py-3 rounded-full text-sm font-medium shadow-2xl transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be inside ToastProvider');
  return ctx;
}
