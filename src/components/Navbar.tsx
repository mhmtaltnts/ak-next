'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { signOut, signIn, useSession } from 'next-auth/react';
import { Menu } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import UserButton from './UserButton';
import { ModeToggle } from './mode-toggle';
import { useRouter } from 'next/navigation';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export default function Navbar() {
  const session = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const handleSignIn = async () => {
    await signIn();
    router.push('profile');
  };
  console.log(session);
  return (
    <div className="h-12 md:h-16 p-4 ">
      <div className="flex justify-between items-center">
        <div className={cn('hidden md:block', font.className)}>
          {/*Logo*/}
          <h2 className="text-2xl font-bold uppercase">
            <Link href="/">Akbaşlar</Link>
          </h2>
        </div>
        <Menu className="block md:hidden" />
        <nav>
          <ul className="flex justify-evenly ">
            <li>
              {session.status === 'authenticated' ? (
                <Button onClick={handleSignOut}>Sistemden Çık</Button>
              ) : (
                <Button>
                  <Link href="sign">Sisteme Giriş</Link>
                </Button>
              )}
            </li>
          </ul>
        </nav>
        <div>
          <ModeToggle />
        </div>
        <div>{session.data?.user && <UserButton />}</div>
      </div>
      {/*MOBILE MENU*/}
    </div>
  );
}
