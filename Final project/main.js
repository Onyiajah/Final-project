'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

<script>
    // Sample data for the shopping cart (replace this with your actual cart data)
    let shoppingCart = [
        { id: 'product_id_1', name: 'Running Sneaker Shoes', price: 180.85, image: './Photos/370042701_18299446549188335_2139515228504035668_n.jpg' },
        // Add more items as needed
    ];

    // Function to initialize the cart content
    function initializeCart() {
        const cartItemsContainer = document.querySelector('.cart-items');

        // Clear existing content
        cartItemsContainer.innerHTML = '';

        // Populate cart items
        shoppingCart.forEach(item => {
            const cartItemElement = createCartItemElement(item);
            cartItemsContainer.appendChild(cartItemElement);
        });

        // Update cart summary
        updateCartSummary();
    }

    // Function to create a cart item element
    function createCartItemElement(item) {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <figure class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </figure>
            <div class="cart-item-details">
                <h3 class="h3 cart-item-title">${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-actions">
                    <button class="btn btn-remove" onclick="removeFromCart('${item.id}')">Remove</button>
                </div>
            </div>
        `;

        return cartItemElement;
    }

    // Function to remove an item from the cart
    function removeFromCart(productId) {
        shoppingCart = shoppingCart.filter(item => item.id !== productId);
        initializeCart();
    }

    // Function to update the cart summary
    function updateCartSummary() {
        const totalElement = document.querySelector('.total-price');
        const totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);
        totalElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Function to proceed to checkout
    function proceedToCheckout() {
        // Redirect to the checkout page or implement further checkout logic
        window.location.href = "checkout.html";
    }

    // Initialize the cart when the page loads
    document.addEventListener('DOMContentLoaded', initializeCart);
</script>
