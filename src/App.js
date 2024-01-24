import React from 'react';  // Add this import statement
import logo from './logo.svg';
import './App.css';
import IdeaGenerator from './pages/ideaGenerator'

export default function App() {
  return (
    <div>
      <div className='h-screen bg-slate-900 font-sans overflow-hidden relative text-black w-full my-20 mx-8 text-center'>
        <div className='flex flex-col flex-wrap'>
          <IdeaGenerator/>
        </div>
      </div>
    </div>
  );
}
