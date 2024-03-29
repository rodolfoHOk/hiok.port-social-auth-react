import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '../components/Toast';
import { ToastInfos } from '../components/Toast/ToastContainer';
import {
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  GOOGLE_AUTH_URL,
  OAUTH2_REDIRECT_URI,
} from '../constants';
import { api } from '../lib/api';
import { v4 as uuidV4 } from 'uuid';

export enum Provider {
  'facebook',
  'github',
  'google',
}

export interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
}

interface AuthenticationContextData {
  user: User | null;
  isLoggingIn: boolean;
  login: (provider: Provider) => void;
  logout: () => void;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

interface AuthenticationProviderProps {
  children: ReactNode;
}

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  function login(provider: Provider) {
    let providerUrl = '';
    switch (provider) {
      case Provider.facebook:
        providerUrl = FACEBOOK_AUTH_URL;
        break;
      case Provider.github:
        providerUrl = GITHUB_AUTH_URL;
        break;
      case Provider.google:
        providerUrl = GOOGLE_AUTH_URL;
        break;
      default:
        throw new Error('Provider not informed');
    }

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    const redirectUri = `${
      import.meta.env.VITE_APP_BASE_URL
    }${OAUTH2_REDIRECT_URI}`;

    const queryParams = new URLSearchParams();
    queryParams.set('redirect_uri', redirectUri);

    const loginUrl = `${apiBaseUrl}${providerUrl}?${queryParams.toString()}`;
    window.location.href = loginUrl;
  }

  function logout() {
    localStorage.removeItem('@portfolio:token');
    api.defaults.headers.common.Authorization = '';
    setUser(null);
  }

  async function getUserInfos() {
    setIsLoggingIn(true);

    api
      .get<User>('/user/me')
      .then((response) => {
        setUser(response.data);
        if (pathname === '/login' || pathname === '/oauth2/redirect') {
          const toastInfo: ToastInfos = {
            id: uuidV4(),
            type: 'success',
            title: 'Sucesso',
            message: 'Login realizado com sucesso',
            duration: 3000,
          };
          toast.notify(toastInfo);
          navigate('/');
        }
      })
      .catch((err) => {
        const toastInfo: ToastInfos = {
          id: uuidV4(),
          type: 'danger',
          title: 'Erro ao tentar autenticar',
          message: err.response.data,
          duration: 4000,
        };
        toast.notify(toastInfo);
        navigate('/login');
      })
      .finally(() => setIsLoggingIn(false));
  }

  useEffect(() => {
    const token = localStorage.getItem('@portfolio:token');
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      getUserInfos();
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    if (url.includes('/oauth2/redirect?token=')) {
      const token = new URLSearchParams(window.location.search).get('token');
      if (token) {
        localStorage.setItem('@portfolio:token', token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        getUserInfos();
      }
    } else if (url.includes('/oauth2/redirect?error=')) {
      const error = new URLSearchParams(window.location.search).get('error');
      let message = '';
      if (error) {
        if (error.includes('github')) {
          message = 'Por favor use sua conta do Github para logar';
        } else if (error.includes('facebook')) {
          message = 'Por favor use sua conta do Facebook para logar';
        } else if (error.includes('google')) {
          message = 'Por favor use sua conta do Google para logar';
        }
      }
      const toastInfo: ToastInfos = {
        id: uuidV4(),
        type: 'danger',
        title: 'Erro ao tentar autenticar',
        message: message,
        duration: 4000,
      };
      toast.notify(toastInfo);
      navigate('/login');
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ user, isLoggingIn, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuth = () => useContext(AuthenticationContext);
