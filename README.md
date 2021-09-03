# Cloud Computers

## Live Demo of [Cloud Computers](https://cloudcomputers.netlify.app/)

This is a fullstack PERN application that models an e-commerce website that lets users buy computer parts. Includes Unit and Integration Testing. Made using Javascript, React JS, Node JS, Express, PostgreSQL, and Material-UI. <br />

## 🔗 Backend [Repo](https://github.com/lazirpascual/cloud-computers-backend)

## 🛠 Tech Stack

| <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/javascript.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/react.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/node-dot-js.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/express.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/postgresql.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/material-ui.svg" width="40"> |
| :--------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |

- **Front-End**: Javascript, React (Context API), Material-UI </br>
- **Back-End**: NodeJS, Express </br>
- **Database**: PostgreSQL </br>
- **Testing**: Jest, React-Testing-Library
- **Deployment**: Heroku (backend), Netlify (frontend)

## ⚙️ Features

- Responsive design which includes a clean user interface with smooth animations
- User registration/login authenticated through JSON Web Token
- Add, remove, and update products from the shopping cart
- Create ratings and reviews for each product
- Search products by name and filter products by categories in the shop
- Finalize your purchase by checking out your items

# Development Process

- **Frontend** <br />
  This project was initially created with only a frontend in mind. My goal was to build a project that would further enhance my React skills by using React Routers to navigate to different pages throughout my application and by using the Context API to globally manage state. Additionaly, I decided to use a component library called Material-UI to style my application.
- **Adding a Backend** <br />
  After initially building my application with a frontend, I decided that I had enough knowledge in React to finally configure and connect my application to a backend. After some research, I decided to adapt the MERN stack to turn my static application into a fullstack project. First, I used Node JS and Express to create a REST API that would hold the list of products in the shop as well as the list of products inside the cart. Then, I used MongoDB and Mongoose to connect the backend to a non-relational database that would indefinitely save the contents (products & cart items) of my application.
- **Adding Tests** <br />
  To complete the fullstack aspect of my application, I thought that it would be a good idea to implement testing. Therefore, I added three levels of testing in my application; Unit Testing, Integration Testing, and End-To-End Testing.
  - **Unit Testing** <br />
    First, I added some unit tests for the functionalities of the shopping cart page. These tests includes the following; the calculation for the subtotal of an item, the number of items in a cart and the total price in a cart. Then, I added unit tests for the react components. These tests checks whether the products in the cart/shop and the reviews in the product page have all been rendered properly. Additionaly, I added tests that checks whether the Review/Signup forms were saving and updating the input fields with the correct content properly. Finally, I created a a test that checks whether that AddToCart button was working as intended.
  - **Integration Testing** <br />
    Then, I added some integation testing for the backend portion of my application. I decided to conduct API-level integration tests for the backend server by making HTTP requests and inspecting the test database I created with Mongoose. These tests included the testing of the REST API methods such as when initially retreiving, adding, and deleting an item from the shopping cart.
- **Adding More Features** <br />
  - **Login/Register** <br />
    After integrating a backend, I created the ability for users to sign up and log in to their own accounts. This made it possible for users to keep track of their individual shopping carts, ensuring that only they themselves can change the contents of their own products. This was accomplished through the addition of users/login REST APIs and User/Token Authentication.
  - **Review/Rating System** <br />
    By creating user accounts, I was able to implement more features that were user related. This is where I created the review/rating system where user authenticated accounts are able to leave ratings (ranging from 1 to 5 stars) and also write their own reviews for a specific product. Ratings/reviews can only be deleted by the user who created them.
- **Switching to PostgreSQL** <br />
  After initially building the database with MongoDB, a non-relational database, I decided to learn about SQL and relational databases. I chose PostgreSQL, in which I learned various things about SQL such as using roles to handle authentication and making queries to handle changes in SQL databases. I realized that there were many things SQL could have solved better/more efficiently than MongoDB, such as the ability to store foreign keys or joining relationships through tables. Thus, I decided to refactor the backend with PostgreSQL serving as the database.

# Screenshots

## 1. Home Page

![preview](https://i.imgur.com/Zhy1Xpi.jpg)

- Upon initially loading the application, it redirects you to the homepage. In this page, a user can click buttons that take them to the shopping page, register page, or the login page.

## 2. Catalog Page

![preview](https://i.imgur.com/07f9pMg.jpg)

- The catalog page displays a preview of all the items in the shop. In this page, a user can search for a specific product by name or filter all products out by their specific category.

## 3. Product Page

![preview](https://i.imgur.com/5SmrvhH.jpg)

- When a user clicks on a product, they are redirected to the product page. This page displays an overview of each item such as the product name, price, a description of what the product is, the rating of that product as well as the reviews left by the customers. Users can also add the current displayed item to the cart as well as create a rating/review for the current item.

## 4. Review Page

![preview](https://i.imgur.com/rxgUKfl.jpg)

- When a user clicks on the "write a review" button on the product page, they are then prompted a review form from this page. Users can choose a rating from 1-5 and write their reviews which contains a title, a description, as well as an option to choose whether they would recommend this product to a friend or not.

## 5. Cart Page

![preview](https://i.imgur.com/4CUGLN2.jpg)

- All the items added by the user is displayed on this page. Here, a user can update the content of their current products by changing the product quantity or by deleting the product itself. The page also displays a quick summary of how many items there are in the cart as well as the total calculated price. Finally, a user can click the checkout button to finalize their purchase.

## 6. Checkout Page

![preview](https://i.imgur.com/Xn0gved.jpg)

- After a user clicks the checkout button, they are prompted to fill in their personal information which includes shipping address and credit card info (does not actually need to be filled in, only used for demonstration). A final summary of their purchase is displayed here, and by clicking the place order button, an order confirmation message is sent to the user.
