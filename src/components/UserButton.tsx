'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const UserButton = () => {
  const session = useSession();
  return (
    <div>
      <Link href="/profile">
        <Image
          className="rounded-full"
          src={session.data?.user?.image || `/public/images/user.jpeg`}
          alt={session.data?.user?.name || 'Kullanıcı resmi'}
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default UserButton;
