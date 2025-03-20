function addToCart(button) {
    const cart = document.querySelector(".korg"); 
    const itemName = button.getAttribute("data-name"); 

    let item = document.createElement("p"); 
    item.textContent = itemName; 

    cart.appendChild(item); 
}
