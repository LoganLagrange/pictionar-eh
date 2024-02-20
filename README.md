# Pictionar-eh

## Table of Contents
[User Story](#userstory)
[Acceptance Criteria](#acceptancecriteria)
[Description](#description)
[Deployed Application](#deployedapplication)
[Project Developers](#project-developers)
[Contributing](#contributing)
	
### User Story
AS A proud CANADIAN,
I WANT to engage in an educational and artistic Pictionary game
SO THAT I can connect with fellow Canadians interested in learning about Canada's distinctive language.

### Acceptance Criteria
Given an online pictionar-eh game,
WHEN I navigate to the application page, 
I AM NOT ABLE to join on create a room if not logged in, or signed up
WHEN I login with my existing username, or sign-up
THEN I find I am able to view current available rooms to join with number of players in each room, or create a new room.
WHEN I enter the game room I see a drawing canvas and a chatbox
THEN the game starts and the selected drawer, draws the guessing word.
WHEN I enter the correct guess in the chat window I am awarded a game score,
THEN I become the drawer and the word to draw pops-up on my page only.
WHEN I draw the word the player must guess, the player receives the drawing canvas,
AND can submit a guess in the chat.
THIS repeats until the timer runs out or we exit the room.

### Description
This projects inspiration is to educate the rest of the world of the words unique to Canadians that people visiting, new, or even our fellow Canadians might not have heard of. Canada has ten provinces and three territories, each with their own unique terms and words. This project includes three linked repositories:
- Pictionar-eh: This repository contains the application front-end code and uses technologies such as React canvas draw, color, router-dom, rollup, and socket.io client (https://github.com/LoganLagrange/pictionar-eh)
- Pictionar-eh-api: This repository contains the application middleware and uses technologies such as sequelize, mysql2, express, express-session, bcrypt, cors, connect-session-sequelize, and jsonwebtoken (https://github.com/LoganLagrange/pictionar-eh-api)
- Pictionar-eh-socket-server: This repository contains the application back-end code and uses technologies such as express, nodemon, cors, dotenv, and socket.io (https://github.com/LoganLagrange/pictionar-eh-socket-server)

### Deployed Application
https://pictionar-eh.netlify.app/

### Project Developers
This was a collaboration project between:
	1. Logan Lagrange (https://github.com/LoganLagrange)
	2. Thomas Wollin (https://github.com/Nillows)
	3. Vinit Patel (https://github.com/vinitp2)
	4. Maria Afzal (https://github.com/afzama)

### Contributing
We believe in the collaborating power of the developer community to improve functionality and code. We welcome the contributions to our project, and have the following asks:
- Choose the code you would like to contribute to, clone the repo, further develop
- Leave us an open project issue
