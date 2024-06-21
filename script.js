// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 39.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: 49.99, image: "https://via.placeholder.com/150" },
];

const cart = [];

// Display products
function displayProducts() {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Initialize the page
function init() {
    displayProducts();
    updateCart();
}

// Run initialization when the page loads
window.onload = init;