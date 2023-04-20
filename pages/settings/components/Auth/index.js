import { useCallback, useRef, useState } from 'react';
import { fetcher } from '@/lib/fetch';
import toast from 'react-hot-toast';
import AuthView from './AuthView';

const Auth = () => {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetcher('/api/user/password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldPassword: oldPasswordRef.current.value,
          newPassword: newPasswordRef.current.value
        })
      });
      toast.success('Your password has been updated');
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
      oldPasswordRef.current.value = '';
      newPasswordRef.current.value = '';
    }
  }, []);

  return (
    <AuthView
      isLoading={isLoading}
      onSubmit={onSubmit}
      oldPasswordRef={oldPasswordRef}
      newPasswordRef={newPasswordRef}
    />
  );
};

export default Auth;
