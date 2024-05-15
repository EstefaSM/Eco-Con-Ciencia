import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import AsideRight from '../components/AsideRight';
import Dashboard from './Dashboard';
import Aside from '../components/Aside';
import Section from '../components/Section';


const Home = () => {
  return (
    <div>
      
      {<Header/>}
      <hr/>
      {<Main/>}
      {/* {<Section/>}
      {<Aside/>} */}
      {<Footer/>}
      {/* {<Dashboard/>} */}
      
      
    </div>
  );
};

export default Home;
