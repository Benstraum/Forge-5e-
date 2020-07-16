
## Prerequisites

Using Chrome Browser. Preffered using chrome dev tools with a mobile view.

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `Forge(5e)` :
Then copy and paste the whole `Database.sql` file into the SQL queries.
use cmd + a and execute
that will create the tables with proper links needed to run the app


## Installation


* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`


## USAGE
I have had a passion for dungeons and dragons all of my life, and I have wanted to share that with many friends. One thing
holding most people back are the rules of the game. It's extremely complex and can be very tedious to navigate.
That is where my app comes in. It is geared toward helping to teach new players how to make characters. 
There are two main functionalities: 
1) Walking the user step by step through making their character.
2) An interactive "Character Sheet" that allows the user to keep track of their character in game.

The intended purpose is for a Game Master (Person who runs the game) to have their players use this to expidite the creation process.
What normally could take players hours upon hours can be simplified to a handful of minutues for a casual newbie.

## Technologies
React, react-hooks, dnd5e.api/co(external api) , jsx, redux, react-redux, react-router-dom, express, pg, pool, axios, Semantic-UI, 

## Acknowledgement
I want to thank my instructors Casie, Kris, and Edan for providing me the tools to learn. Also big thanks to my classmates for being a source of motivation as we all strive to better ourselves by learning to code.

This project really helped solidify my undertanding of how to take advantage of the flow/ manipulation of information in redux. 
It also started paving the path for my understanding of using Hooks in functional React Components.
