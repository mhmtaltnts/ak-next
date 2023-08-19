'use client';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface AuthSocialButtonProps {
  icon: IconType;
  actionType: string;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  actionType,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials!');
        }

        if (callback?.ok) {
          router.push('/dorseler');
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <button
      type="button"
      onClick={() => socialAction(actionType)}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md
        px-4 
        py-2 
        shadow-sm 
        ring-1 
        ring-inset 
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
