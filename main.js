// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.
let products = [
    { name: "Iphone", price: 999.99, description: "power of a pc on the go" },
    { name: "SteamDeck", price: 399.99, description: "gaming on the go" },
    { name: "Sony Headphones", price: 149.99, description: "drown out the noise and walk in peace" }
];

// Function to display product information dynamically
function displayProducts() {
    let container = document.getElementById("product-container");

    // Loop through each product and creates an element for each info
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <hr>
        `;
        container.appendChild(productDiv);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads.
window.addEventListener("load", displayProducts);