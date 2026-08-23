const restaurants = [
  {
    id: 1,
    name: "The Rustic Oven",
    cuisine: "Italian • Pizza",
    rating: 4.8,
    time: "25–30 min",
    price: "₹₹",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
    badge: "Popular"
  },
  {
    id: 2,
    name: "Biryani House",
    cuisine: "Indian • Biryani",
    rating: 4.7,
    time: "30–35 min",
    price: "₹₹",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1644677867331-03f28942e35c?w=600&auto=format&fit=crop&q=60",
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "Burger Social",
    cuisine: "American • Burgers",
    rating: 4.6,
    time: "20–25 min",
    price: "₹",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    badge: "20% OFF"
  },
  {
    id: 4,
    name: "Wok & Roll",
    cuisine: "Asian • Chinese",
    rating: 4.5,
    time: "25–30 min",
    price: "₹₹",
    category: "Chinese",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    badge: "New"
  },
  {
    id: 5,
    name: "Sugar & Crumbs",
    cuisine: "Bakery • Desserts",
    rating: 4.9,
    time: "15–20 min",
    price: "₹",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    badge: "Top rated"
  },
  {
    id: 6,
    name: "Brew District",
    cuisine: "Cafe • Beverages",
    rating: 4.6,
    time: "15–20 min",
    price: "₹",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    badge: "Trending"
  }
];

const foods = [
  {
    id: 101,
    name: "Truffle Margherita",
    desc: "San Marzano tomato, mozzarella, basil and truffle oil.",
    price: 349,
    category: "Pizza",
    restaurant: "The Rustic Oven",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 102,
    name: "Chicken Dum Biryani",
    desc: "Long-grain basmati rice, tender chicken and saffron.",
    price: 299,
    category: "Biryani",
    restaurant: "Biryani House",
    image: "https://images.unsplash.com/photo-1644677867331-03f28942e35c?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 103,
    name: "Classic Smash Burger",
    desc: "Double beef patty, cheddar, pickles and house sauce.",
    price: 249,
    category: "Burgers",
    restaurant: "Burger Social",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 104,
    name: "Chocolate Lava Cake",
    desc: "Warm dark chocolate cake with a soft molten centre.",
    price: 179,
    category: "Desserts",
    restaurant: "Sugar & Crumbs",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 105,
    name: "Spicy Garlic Noodles",
    desc: "Wok-tossed noodles, vegetables, garlic and chilli.",
    price: 219,
    category: "Chinese",
    restaurant: "Wok & Roll",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 106,
    name: "Iced Caramel Latte",
    desc: "Cold espresso, creamy milk and caramel drizzle.",
    price: 159,
    category: "Beverages",
    restaurant: "Brew District",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 107,
    name: "Pepperoni Feast",
    desc: "Crispy crust, mozzarella and smoky pepperoni.",
    price: 399,
    category: "Pizza",
    restaurant: "The Rustic Oven",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 108,
    name: "Paneer Tikka Biryani",
    desc: "Aromatic basmati, smoky paneer tikka and fresh herbs.",
    price: 259,
    category: "Biryani",
    restaurant: "Biryani House",
    image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=700&q=85"
  }
];

const restaurantGrid = document.getElementById("restaurantGrid");
const foodGrid = document.getElementById("foodGrid");
const resultsLabel = document.getElementById("resultsLabel");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotalEl = document.getElementById("subtotal");
const deliveryFeeEl = document.getElementById("deliveryFee");
const totalEl = document.getElementById("total");
const toast = document.getElementById("toast");
const searchInput = document.getElementById("searchInput");
const navLinks = document.querySelector(".nav-links");

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("crave-cart")) || [];
} catch (error) {
  cart = [];
}

function money(value) {
  return "₹" + value.toLocaleString("en-IN");
}

function renderRestaurants(items) {
  resultsLabel.textContent = `${items.length} ${items.length === 1 ? "restaurant" : "restaurants"}`;

  if (!items.length) {
    restaurantGrid.innerHTML = `
      <div class="no-results">
        No restaurants found. Try a different search.
      </div>`;
    return;
  }

  restaurantGrid.innerHTML = items.map((restaurant) => `
    <article class="restaurant-card">
      <div class="restaurant-img">
        <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
        <span class="badge">${restaurant.badge}</span>
      </div>
      <div class="restaurant-body">
        <div class="restaurant-title">
          <h3>${restaurant.name}</h3>
          <span class="rating">★ ${restaurant.rating}</span>
        </div>
        <div class="restaurant-info">
          <span>${restaurant.cuisine}</span>
          <span>•</span>
          <span>${restaurant.time}</span>
        </div>
        <div class="restaurant-footer">
          <span>${restaurant.price} • ${restaurant.category}</span>
          <button class="add-btn menu-button" data-category="${restaurant.category}">View Menu →</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFoods(items) {
  if (!items.length) {
    foodGrid.innerHTML = `
      <div class="no-results">
        No food items found for this search.
      </div>`;
    return;
  }

  foodGrid.innerHTML = items.map((food) => `
    <article class="food-card">
      <div class="food-image">
        <img src="${food.image}" alt="${food.name}" loading="lazy">
      </div>
      <div class="food-body">
        <h3>${food.name}</h3>
        <p>${food.desc}</p>
        <div class="food-bottom">
          <span class="price">${money(food.price)}</span>
          <button class="add-btn add-food" data-id="${food.id}">+ Add to cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

function saveCart() {
  localStorage.setItem("crave-cart", JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  const food = foods.find((item) => item.id === id);
  if (!food) return;

  const item = cart.find((cartItem) => cartItem.id === id);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ ...food, qty: 1 });
  }

  saveCart();
  showToast(`${food.name} added to cart`);
}

function changeQuantity(id, amount) {
  const item = cart.find((cartItem) => cartItem.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty < 1) {
    cart = cart.filter((cartItem) => cartItem.id !== id);
  }

  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
}

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const delivery = subtotal === 0 ? 0 : subtotal >= 499 ? 0 : 39;

  cartCount.textContent = itemCount;
  subtotalEl.textContent = money(subtotal);
  deliveryFeeEl.textContent = delivery === 0 && subtotal > 0 ? "FREE" : money(delivery);
  totalEl.textContent = money(subtotal + delivery);

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛍️</div>
        <h3>Your cart is empty</h3>
        <p>Add something delicious and it will appear here.</p>
      </div>`;
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <span class="item-price">${money(item.price)}</span>
        <div class="qty-controls">
          <button class="qty-button" data-id="${item.id}" data-change="-1">−</button>
          <span>${item.qty}</span>
          <button class="qty-button" data-id="${item.id}" data-change="1">+</button>
        </div>
        <button class="remove-item" data-remove="${item.id}">Remove</button>
      </div>
      <strong>${money(item.price * item.qty)}</strong>
    </div>
  `).join("");
}

function filterCategory(category) {
  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.category === category);
  });

  const restaurantList = category === "All"
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === category);

  const foodList = category === "All"
    ? foods
    : foods.filter((food) => food.category === category);

  renderRestaurants(restaurantList);
  renderFoods(foodList);
}

function searchFood(value) {
  const term = value.trim().toLowerCase();

  if (!term) {
    filterCategory("All");
    return;
  }

  const restaurantList = restaurants.filter((restaurant) => {
    return `${restaurant.name} ${restaurant.cuisine} ${restaurant.category}`
      .toLowerCase()
      .includes(term);
  });

  const foodList = foods.filter((food) => {
    return `${food.name} ${food.desc} ${food.restaurant} ${food.category}`
      .toLowerCase()
      .includes(term);
  });

  renderRestaurants(restaurantList);
  renderFoods(foodList);
}

function showMenu(category) {
  filterCategory(category);
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    filterCategory(card.dataset.category);
    document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("clearCategory").addEventListener("click", () => {
  filterCategory("All");
});

document.getElementById("showAllFood").addEventListener("click", () => {
  filterCategory("All");
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("heroSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  searchFood(searchInput.value);
  document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".search-toggle").addEventListener("click", () => {
  searchInput.focus();
});

document.getElementById("restaurantGrid").addEventListener("click", (event) => {
  const button = event.target.closest(".menu-button");
  if (!button) return;
  showMenu(button.dataset.category);
});

document.getElementById("foodGrid").addEventListener("click", (event) => {
  const button = event.target.closest(".add-food");
  if (!button) return;
  addToCart(Number(button.dataset.id));
});

document.getElementById("cartItems").addEventListener("click", (event) => {
  const quantityButton = event.target.closest(".qty-button");
  const removeButton = event.target.closest(".remove-item");

  if (quantityButton) {
    changeQuantity(Number(quantityButton.dataset.id), Number(quantityButton.dataset.change));
  }

  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

document.getElementById("cartOpenBtn").addEventListener("click", openCart);
document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }
  showToast("Checkout demo — order ready!");
});

document.getElementById("offerBtn").addEventListener("click", openCart);

document.getElementById("menuBtn").addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelector(".login-btn").addEventListener("click", () => {
  showToast("Login / sign-up is a demo feature");
});

document.querySelector(".mobile-login").addEventListener("click", () => {
  showToast("Login / sign-up is a demo feature");
  navLinks.classList.remove("open");
});

renderRestaurants(restaurants);
renderFoods(foods);
renderCart();
