import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ToastProvider } from './components/Toast';
import { AuthenticationProvider } from './context/AuthenticationContext';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider position="top-right">
        <AuthenticationProvider>
          <Header />
          <main className="min-h-[calc(100vh_-_56px_-_32px)] min-w-full bg-gray-50 dark:bg-neutral-900">
            <Router />
          </main>
          <Footer />
        </AuthenticationProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
