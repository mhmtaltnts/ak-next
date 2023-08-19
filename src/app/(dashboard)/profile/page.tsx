'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
  const session = useSession();

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        <span>{session.data?.user?.name}</span>
        <br />
        <span>{session.data?.user?.email}</span>
        <Image
          src={session.data?.user?.image || ''}
          alt={session.data?.user?.name || ''}
          width={36}
          height={36}
        />
        <span>{session.data?.user.role}</span>
        <span>Selam</span>
      </div>
    </div>
  );
};

export default Profile;
