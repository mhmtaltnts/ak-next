'use client';
import { useState } from 'react';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, TypeOf, infer } from 'zod';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const loginSchema = object({
  email: string()
    .min(1, 'Email adresi gerekli')
    .email('Email adresiniz geçersiz'),
  password: string().min(1, 'Şifre gerekli'),
});

export type LoginType = TypeOf<typeof loginSchema>;

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error('Invalid credentials!');
      }

      if (callback?.ok) {
        router.push('/dorseler');
      }
    }).catch(() => toast.error('Something went wrong!'))
    .finally(() => setIsLoading(false));;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <Input placeholder="şifre" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          variant="outline"
          className="w-full text-2xl"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
