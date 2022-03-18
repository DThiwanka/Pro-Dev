import React from "react";
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';
const App = () => {
  return (
      <>


      <main>
        <Header/>
        <Container>
      <h1>Welcome To pharmacy</h1>
      </Container>
     
      </main>
      <Footer/>
      </>

  );
}

export default App;

