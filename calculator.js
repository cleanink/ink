document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Animate the burger lines to change to an "X" shape
        burger.classList.toggle('toggle');
    });
});

function calculatePrice() {
    const basePrice = 1000; // Example base price
    const pricePerBedroom = 50;
    const pricePerBathroom = 30;
    const pricePerSquareMeter = 2;

    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const area = document.getElementById('area').value;
    const extras = document.getElementById('extras').value;

    const totalPrice = basePrice + 
                      (pricePerBedroom * bedrooms) + 
                      (pricePerBathroom * bathrooms) + 
                      (pricePerSquareMeter * area) + 
                      parseInt(extras);

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
