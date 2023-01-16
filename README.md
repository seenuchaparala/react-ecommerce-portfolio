# About the project:

Demo link [here](https://seenuchaparala.github.io/react-ecommerce-portfolio/)

 
The project is intended to serve two purposes:

The first purpose is to meet the conditions set by Academyxi (course provider) to pass the ‘Front End Web Development course.
The second is to serve as a portfolio project to showcase my coding skills.


This is a mock eCommerce website that utilizes the Forever21 (clothing store) API. This API wasn’t my first choice. I wanted to obtain an API for a tech vendor to build this website, but due to lack of availability and time constraints, I chose to settle for this API. This website fetches four products and renders them on three different pages. Then there is a shopping cart with the functionality to add/remove products and the total price is displayed at the bottom of the cart.

## Tools used:

React and Tailwind CSS was used to build this website. It has four main components.

Header with page hyperlinks and search field.
Image Slider (Still working on this functionality)
Product container. Contains 4 product cards. Each product card displays an image, title, price, and ‘add to cart' button
Shopping cart.

Styling is done mostly using flex classes from Tailwind. A shopping cart was created using a table layout. useEffect hook was used to fetch API data. useState hook was used to store data. Routing was used to navigate between pages.

## Challenges faced:

I learned the hard way that data is passed down the components from top to bottom using props. Initially, I had the navigation bar in its own component and tried to pass the search value (state) to the product card component which is on the same level. Realizing the mistake, I moved the code for navigation from the standalone component to the app component so I can pass the search query state to the product component inside the app component.

## Improvements:

I’d like to work on the image slider component to display different images after a set interval. I had trouble using the setInterval function inside the useEffect hook. But I’m looking forward to the challenge of figuring it out.


![image](https://user-images.githubusercontent.com/22206367/194722149-d66f327d-a9f8-4785-92fc-762e8d3d2930.png)
