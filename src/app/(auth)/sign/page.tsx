import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default async function AuthPage() {
  return (
    <div
      className="
  flex 
  min-h-full 
  flex-col 
  justify-center 
  py-12 
  sm:px-6 
  lg:px-8 
 
"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="64"
          width="64"
          className="mx-auto w-auto rounded-full"
          alt="logo"
          src="/images/logo.png"
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
           
          "
        >
          Hesabınıza Giriş Yapın
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
