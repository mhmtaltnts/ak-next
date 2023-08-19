"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn()}>
      Giriş
    </Button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Kayıt
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <Button  onClick={() => signOut()}>
      Çıkış
    </Button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};