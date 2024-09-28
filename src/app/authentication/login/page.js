'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import { useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Perform login logic here
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Box sx={{ bgcolor: 'white', p: 4, borderRadius: 2, boxShadow: 3, width: '100%', maxWidth: 400 }}>
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/logotalentos.png" alt="Logo" width={100} height={100} />
          </div>

          <Typography variant="h5" component="h1" gutterBottom align="center">
            Welcome Back!
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />

            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />

            <div className="flex items-center justify-between mb-6">
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
              />
              <Link href="/authentication/forgotpassword" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: 'indigo.800', '&:hover': { bgcolor: 'indigo.700' } }}
              fullWidth
            >
              Log In
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don’t have an account?{' '}
              <Link href="/authentication/register" className="text-indigo-600 hover:underline">
                Sign up now
              </Link>
            </Typography>
          </form>
        </Box>
      </div>
    </>
  );
}
