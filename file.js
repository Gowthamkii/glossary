document.addEventListener('DOMContentLoaded', function() {
    // Select all "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll('.product button');

    // Add click event listener to each button
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get product details
            var productContainer = this.parentElement;
            var productName = productContainer.querySelector('h2').textContent;
            var priceText = productContainer.querySelector('p').textContent;
            // Extract price from text
            var price = parseFloat(priceText.replace(/[^\d.]/g, ''));

            // You can implement cart functionality here
            alert("Added " + productName + " to cart. Price: " + priceText);
        });
    });
});
