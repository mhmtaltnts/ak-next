'use client';

import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';

import { useRouter } from 'next/navigation';

import AuthSocialButton from './AuthSocialButton';

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/dorseler');
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        {<div>{variant === 'LOGIN' ? <LoginForm /> : <RegisterForm />}</div>}
        <div className="mt-6 flex gap-2">
          <AuthSocialButton icon={BsGithub} actionType="github" />
          <AuthSocialButton icon={BsGoogle} actionType="github" />
        </div>
        <button
          onClick={toggleVariant}
          className="underline cursor-pointer mt-3"
        >
          {variant === 'LOGIN' ? 'Create an account' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
