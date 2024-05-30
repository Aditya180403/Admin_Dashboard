"use client"
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
 
      setIsLoggedIn(true);
      
      setError('');
    } else {
      
      setError('Invalid username or password.');
    }
  };


  if (isLoggedIn) {

    console.log('Redirecting to /dashboard');
    return null; 
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-2xl p-12 rounded-lg w-[500px] h-[500px] flex flex-col items-center justify-center gap-8"
      >
        <h1 className="font-bold text-2xl">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-6 border-1 bg-slate-900 border-gray-800 rounded-md bg-bg text-text"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-6 border-2 bg-slate-900 border-gray-800 rounded-md bg-bg text-text"
        />
        <button
          type="submit"
          className="w-full p-6 bg-blue-700 text-text rounded-md cursor-pointer"
        >
          Login
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
