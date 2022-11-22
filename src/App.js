import React from 'react';
import logo from './logo.svg';
import NavBar from './navBar';
import "./App.css";
import Movies from './Movies';


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
      <NavBar/>
      <Movies list={action}/>
    
    </div>

 
    );
}

export default App;
