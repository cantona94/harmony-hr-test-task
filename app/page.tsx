'use client';

import { GET_USER } from '@/app/api/getUser';
import useStore from '@/app/store';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { IGraphqlUser } from '@/app/types';
import { LoadingSpinner } from '@/components/ui/spinner';
import { Header, Main } from '@/app/components';

export default function Home() {
  const { data, loading, error } = useQuery<IGraphqlUser>(GET_USER);

  const router = useRouter();

  const addUser = useStore((state) => state.login);
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (data) {
      addUser(data.myProfile);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('Вы не авторизованы');
      router.push('/auth');
    }
  }, [error]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );

  return (
    user && (
      <>
        <Header />
        <Main />
      </>
    )
  );
}
