import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  API_BASE_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  GOOGLE_AUTH_URL,
  OAUTH2_REDIRECT_URI,
} from '../constants';
import { api } from '../lib/api';

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
  const navigate = useNavigate();

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
    const loginUrl = `${API_BASE_URL}${providerUrl}?redirect_uri=${OAUTH2_REDIRECT_URI}`;
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
        navigate('/profile');
      })
      .catch((err) => {
        console.error('Erro ao tentar autenticar: ', err.response.data);
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
      console.error('Erro ao tentar autenticar: ', error);
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
