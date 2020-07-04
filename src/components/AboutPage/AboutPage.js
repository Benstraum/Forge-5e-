import React from 'react';
import './About.css'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="About">
    
      <h3>
        <b>Welcome to Forge</b>!
      </h3>
      <p>
        Forge is a passion project of mine to help D&D become a more accessible hobby. My app will walk you through the character 
        creation process and provide explinations for most of the tricky parts of creating a character. Good luck in your adventures!
      </p>
      <p ><i>Games give you a chance to excel, and if you're playing in good company you don't 
        even mind if you lose because you had the enjoyment of the company 
        during the course of the game.</i><br/> -- Gary Gygax</p>
  </div>
);

export default AboutPage;
