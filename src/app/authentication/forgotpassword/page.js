'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Simulate email submission for password reset
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/logotalentos.png" alt="Logo" width={100} height={100} />
          </div>

          {isSubmitted ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-6 text-center">Check Your Email</h1>
              <p className="mb-6">We've sent you instructions to reset your password.</p>
              <Link href="/authentication/login">
                <button className="w-full py-2 px-4 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-700">
                  Back to Login
                </button>
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password?</h1>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
              <form onSubmit={handleForgotPassword}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-700"
                >
                  Send Reset Instructions
                </button>
              </form>

              <p className="text-sm mt-4 text-center text-gray-600">
                Remembered your password?{' '}
                <Link href="/authentication/login" className="text-indigo-600 hover:underline">
                  Log in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
