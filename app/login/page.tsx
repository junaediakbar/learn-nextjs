'use client';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import useLoadingToast from '@/hooks/useLoadingToast';
import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import logo from '@/public/images/logo.png';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';

import useAuthStore from '@/store/useAuthStore';
import api from '@/lib/axios';
import logger from '@/lib/logger';
import { ApiReturn } from '@/types/api';
import { User } from '@/types/auth';
import Button from '@/components/Button';

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const isLoading = useLoadingToast();

  const login = useAuthStore.useLogin();

  const methods = useForm<LoginData>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit } = methods;

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    logger({ data }, 'signin.tsx line 36');
    let tempToken: string;

    toast.promise(
      api
        .post(`/auth/login`, data)
        .then((res) => {
          const { token } = res.data.token;
          tempToken = token;
          localStorage.setItem('token', token);

          return api.get<ApiReturn<User>>('/');
        })
        .then((user) => {
          login({ ...user.data.user }, tempToken);
          router.push('/home');
        }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Successfully logged in',
      }
    );

    return;
  };
  return (
    <>
      <Seo />
      <Nav />

      <div className='flex min-h-screen bg-white'>
        <div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='w-full max-w-sm mx-auto lg:w-96'>
            <div>
              <Image className='w-20' src={logo} alt='' />
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                Masuk ke akun anda
              </h2>
            </div>
            <div className='mt-8'>
              <div className='mt-6'>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div>
                      <div className='mt-1'>
                        <Input
                          label='Email'
                          id='email'
                          type='email'
                          placeholder='you@example.com'
                          validation={{
                            required: 'Email tidak boleh kosong',
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: 'Format email salah',
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className='space-y-1'>
                      <div className='mt-1'>
                        <Input
                          label='Password'
                          id='password'
                          type='password'
                          validation={{
                            required: 'Password tidak boleh kosong',
                            minLength: {
                              value: 8,
                              message: 'Password harus lebih dari 8 karakter',
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <Button
                        isLoading={isLoading}
                        className='w-full justify-center'
                        type='submit'
                      >
                        Login
                      </Button>
                      <Toaster />
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex-1 hidden w-0 lg:block'>
          <img
            className='absolute inset-0 object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
