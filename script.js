document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');

    // Fetch products from the backend (example placeholder URL)
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            data.products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.title;

                const productTitle = document.createElement('h2');
                productTitle.textContent = product.title;

                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;

                productCard.appendChild(productImage);
                productCard.appendChild(productTitle);
                productCard.appendChild(productDescription);

                productGrid.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
 
