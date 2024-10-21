import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Content from '../src/sections/Content';
import Services from '../src/sections/Services';
import Team from '../src/sections/Team';
import Contact from '../src/sections/Contact';
import './styles/stylecomp/App.css'; 

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
