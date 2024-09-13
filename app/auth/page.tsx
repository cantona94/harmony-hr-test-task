'use client';

import { LOGIN } from '@/app/api/login';
import {
  removeTokenfromLocalStorage,
  setTokenToLocalStorage,
} from '@/app/helpers/localStorage.helper';
import { IGraphqlLogin } from '@/app/types';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { Login } from '@/app/components';

export default function LoginForm() {
  const [mutateLogin, { data, loading, error }] =
    useMutation<IGraphqlLogin>(LOGIN);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = () => {
    mutateLogin({ variables: { email, password } });
  };

  useEffect(() => {
    removeTokenfromLocalStorage('access_token');
  }, []);

  useEffect(() => {
    if (data) {
      setTokenToLocalStorage('access_token', data.login.access_token);
      redirect('/');
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('Вы не авторизованы', {
        description: 'Повторите попытку',
        action: {
          label: 'Close',
          onClick: () => {
            setEmail('');
            setPassword('');
          },
        },
      });
    }
  }, [error]);

  return (
    <main className="grid place-items-center h-svh">
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginHandler={loginHandler}
      />
    </main>
  );
}
