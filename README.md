# Crave - Food Delivery Web Page

A responsive food delivery webpage built for the web development take-home assignment. The project uses plain HTML, CSS and JavaScript so the main frontend logic is easy to understand and demonstrate.

## Features

- Responsive navigation for desktop, tablet and mobile
- Food-focused hero section with search
- Pizza, Burgers, Biryani, Chinese, Desserts and Beverages categories
- Restaurant cards with image, rating, cuisine, delivery time and price range
- Food menu with descriptions, prices and Add to Cart buttons
- Shopping cart with quantity controls and remove option
- Subtotal, delivery fee and total calculation
- Cart saved in browser localStorage
- Restaurant and food search
- Simple login/sign-up demo interaction
- Toast messages and empty-cart state

## Project structure

```text
food-delivery-assignment/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

## How to run

1. Download or clone the project.
2. Open the folder in VS Code.
3. Open `index.html` directly in a browser, or use the Live Server extension.

No backend, database or build step is required.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- Google Fonts
- Unsplash image URLs

## Cart behavior

The cart is stored in the browser using `localStorage`. Adding an existing item increases its quantity. Items can be increased, decreased or removed from the cart. A delivery fee of ₹39 is applied below ₹499; orders of ₹499 or more get free delivery.

The checkout button is intentionally a demo because the assignment only asks for basic cart functionality and does not require a backend or payment gateway.

## Images

Food images are loaded from Unsplash. An internet connection is recommended when viewing the page.
