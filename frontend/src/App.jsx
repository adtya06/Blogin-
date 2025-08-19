import React from 'react'
import HomePage from '../pages/Homepage'
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;