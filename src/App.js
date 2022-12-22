import React from 'react';
import logo from './logo.svg';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navBar';
import "./App.css";
import Movies from './Movies';
import About from './About ';
import Watch from './Watch'
import Contact from './Contact';



function App() {
  
let action = [
  {
      title : "interstellar",
      Image :"interstellar2.jpg",
      description : "Interstellar, ou Interstellaire au Québec et au Nouveau-Brunswick, est un film de science-fiction britannico-américain produit..."
  },
  {
      title : "MadMax",
      Image : "madmax.jpg",
      description :"Mad Max ou Bolides hurlants au Québec est un film australien réalisé par George Miller et sorti en 1979..." 

  },
  {
      title : "the wolf of the wall street",
      Image : "the wolf of the wall street.jpg",
      description : "Inspiré d'une histoire réelle, il raconte l'ascension vers la fortune d'un courtier en bourse..." 
  },
  {
      title : "top gun",
      Image : "top gun.jpg",
      description : "The skilled, but reckless, selfish and rebel pilot Maverick and his partner Goose are assigned to go to Top Gun..." 
  },
]
  return (
    <div className='App'>
  
      <BrowserRouter>
      <NavBar/>
      <Routes>
  
        <Route path="/" element ={<Movies list={action}/>}/>
        <Route path ="/About" element ={<About />}/>
        <Route path ="/Contact" element ={<Contact />}/>
        <Route path ='/Watch' element ={<Watch/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>

 
    );
}

export default App;
