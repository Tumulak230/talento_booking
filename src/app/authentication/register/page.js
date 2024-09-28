"use client"; 

import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; 
import { Button, TextField, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';

export default function Register() {
  const [role, setRole] = useState(''); // Role 
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (role === 'client') {
      router.push('/dashboard/clientdashboard');
    } else if (role === 'talent') {
      router.push('/dashboard/talentdashboard');
    } else {
      alert('Please select a role to proceed.');
    }
  };

  return (
    <>
      <Head>
        <title>Create an Account</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Box sx={{ bgcolor: 'white', p: 4, borderRadius: 2, boxShadow: 3, width: '100%', maxWidth: 400 }}>
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image src="/logotalentos.png" alt="Logo" width={100} height={100} />
          </div>

          <Typography variant="h5" component="h1" gutterBottom align="center">
            Create an Account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              placeholder="Email address"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />

            <Box display="flex" gap={2}>
              <TextField
                type="text"
                placeholder="First Name"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                type="text"
                placeholder="Last Name"
                variant="outlined"
                required
                fullWidth
              />
            </Box>

            <TextField
              type="password"
              placeholder="Create Password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />

            <Box display="flex" gap={2} mb={2}>
              <Button
                variant="contained"
                color={role === 'client' ? 'grey' : 'default'}
                onClick={() => setRole('client')}
                fullWidth
              >
                CLIENT
              </Button>
              <Button
                variant="contained"
                color={role === 'talent' ? 'grey' : 'default'}
                onClick={() => setRole('talent')}
                fullWidth
              >
                TALENT
              </Button>
            </Box>

            <FormControlLabel
              control={<Checkbox required />}
              label={
                <span>
                  I accept the{' '}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              }
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: 'indigo.800', '&:hover': { bgcolor: 'indigo.700' } }}
              fullWidth
            >
              Create account
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <a href="/authentication/login" className="text-indigo-600 hover:underline">
                Log in now
              </a>
            </Typography>
          </form>
        </Box>
      </div>
    </>
  );
}
