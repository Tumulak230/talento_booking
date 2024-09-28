"use client";

import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

export default function Logout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const logout = async () => {
      await fetch('/api/logout', {
        method: 'POST',
      });
      setIsLoading(false);
      router.push('/login'); 
    };

    logout();
  }, [router]);

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      bgcolor="background.default"
    >
      {isLoading ? (
        <Box textAlign="center">
          <CircularProgress size={48} color="primary" />
          <Typography variant="h6" mt={2} color="textSecondary">
            Logging out...
          </Typography>
        </Box>
      ) : (
        <Typography variant="h6" color="textSecondary">
          Redirecting to login...
        </Typography>
      )}
    </Box>
  );
}
