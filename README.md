# Description and packages needed in this project

This is a webpage created in React. This project is divided in frontend and backend

Packages needed for the backend:

npm install express (express is a Node web framework)
npm install mysql (To access a MySQL database with Node.js, you need a MySQL driver.)
npm install express mysql nodemon (automatically restart your server when changes has been done)
npm i cors (manages cross-origin requests)

Packages needed for the frontend:

npm i react-router-dom
npm i axios

To start the server both frontend and backend:

- npm start

TIPS mysql Workbench:
If you want to reset your root password, just type following in workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '(YOUR PASSWORD. CAN ALSO KEEP EMPTY)';

flush privileges;
