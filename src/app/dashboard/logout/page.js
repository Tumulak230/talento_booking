"use talent"; 

import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';

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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {isLoading ? (
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-gray-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" />
          </svg>
          <p className="mt-4 text-lg text-gray-700">Logging out...</p>
        </div>
      ) : (
        <p className="text-lg text-gray-700">Redirecting to login...</p>
      )}
    </div>
  );
}
