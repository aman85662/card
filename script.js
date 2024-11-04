function changeProduct(product) {
    const title = document.getElementById('product-title');
    const image = document.getElementById('product-image');
    const description = document.getElementById('product-description');

    if (product === 'product1') {
        title.textContent = 'Product 1';
        image.src = 'path/to/product1.jpg'; 
        image.alt = 'Product 1 Image';
        description.textContent = 'Description for product 1. Highlighting the key features and benefits.';
    } else if (product === 'product2') {
        title.textContent = 'Product 2';
        image.src = 'path/to/product2.jpg'; 
        image.alt = 'Product 2 Image';
        description.textContent = 'Description for product 2. Showcasing what makes it unique.';
    } else if (product === 'product3') {
        title.textContent = 'Product 3';
        image.src = 'path/to/product3.jpg'; 
        image.alt = 'Product 3 Image';
        description.textContent = 'Description for product 3. Outlining the essential details and advantages.';
    }
}
