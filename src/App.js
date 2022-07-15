import React from 'react';

import { Onossocookie, Footer, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Onossocookie />
    <SpecialMenu />
    {/* <Chef /> */}
    {/* <Intro /> */}
    {/* <Laurels /> */}
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default App;
