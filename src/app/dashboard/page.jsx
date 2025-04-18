'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    router.push('/login');
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400 p-6">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center max-w-md w-full border border-white/40">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
           Welcome!
        </h1>
        <p className="text-lg text-gray-700 mb-6"> You successfully logged in!</p>
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-pink-500 hover:to-red-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
