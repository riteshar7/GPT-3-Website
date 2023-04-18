import React from 'react'

// import Article from './components/article/Article';
// import Brand from './components/brand/Brand';
// import Cta from './components/cta/Cta';
// import Feature from './components/feature/Feature';
// import Navbar from './components/navbar/Navbar';
import { Navbar, Brand, Cta } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App