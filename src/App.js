// src/App.js
import React from 'react';
import { LampDemo } from './components/ui/Lamp';
import { LampContainer } from './components/ui/Lamp';
import './App.css'; // Add any global styles here
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='App'>
      <LampDemo />
    </div>
  );
}

export default App;
