import react from 'react';
import  Aos  from 'aos';
import 'aos/dist/aos.css'

import './App.css';

import { 
  About, CtaSection, Features, Footer, Hero } from "./components"

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
   <div className='overFlow-hidden'>
     <Hero />
     <About />
     <Features />
     <CtaSection />
     <Footer />
    </div>
  )
}

export default App
