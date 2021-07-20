# Shopping-Website

This is a fullstack MERN application that models an e-commerce website that lets you buy computer parts. Uses a REST API I made that holds the product and cart data, stored in a non-relational database. Made using Javascript, React JS, Node JS, Express, MongoDB, and Material-UI.

# Live Demo

[Live Demo of Application](https://cloudcomputers.herokuapp.com/)

## Tech Stack

| <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/javascript.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/react.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/node-dot-js.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/express.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/mongodb.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/material-ui.svg" width="40"> |
| :--------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |

- React JS
  - Routers
  - Context API
- Node JS
- Express
- MongoDB
  - Mongoose
- Material-UI

## Features

- Responsive design which includes a clean user interface with smooth animations
- Add, remove, and update products from the shopping cart
- Filter products by categories

## Development Process

- Frontend  
  This project was initially created with only a frontend in mind. My goal was to build a project that would further enhance my React skills by using React Routers to navigate to different pages throughout my application and by using the Context API to globally manage state. Additionaly, I decided to use a component library called Material-UI to style my application.
- Adding a Backend  
  After initially building my application with a frontend, I decided that I had enough knowledge in React to finally configure and connect my application to a backend. After some research, I decided to adapt the MERN stack to turn my static application into a fullstack project. First, I used Node JS and Express to create a REST API that would hold the list of products in the shop as well as the list of products inside the cart. Then, I used MongoDB and Mongoose to connect the backend to a non-relational database that would indefinitely save the contents (products & cart items) of my application.

## Screenshots

### Home Page

![preview](https://i.imgur.com/0pAb97F.jpg)

### Catalog Page

![preview](https://i.imgur.com/XQhYkkj.jpg)

### Product Page

![preview](https://i.imgur.com/ZBkOfbS.jpg)

### Cart Page

![preview](https://i.imgur.com/4CUGLN2.jpg)
