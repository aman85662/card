function changeProduct(product) {
    const title = document.getElementById('product-title');
    const image = document.getElementById('product-image');
    const description = document.getElementById('product-description');

    if (product === 'product1') {
        title.textContent = 'Personal Expense Tracker';
        image.src = 'personal.png'; 
        image.alt = 'Product 1 Image';
        description.textContent = 'A web application that allows users to track their daily expenses. Users can add, edit, and delete expense entries, categorize them (e.g., food, transportation, entertainment), and see a summary of their spending over different time periods.';
    } else if (product === 'product2') {
        title.textContent = 'Fitness Tracker';
        image.src = 'a recipe book.png'; 
        image.alt = 'Product 2 Image';
        description.textContent = 'A recipe book application where users can browse, search for, and save their favorite recipes. The app will include user accounts, so each user can have a personalized collection of recipes. It can also allow users to add their own recipes and share them with others.';
    } else if (product === 'product3') {
        title.textContent = 'Fitness Tracker';
        image.src = 'fitness tracker.png'; 
        image.alt = 'Product 3 Image';
        description.textContent = 'A fitness tracker app that helps users monitor their physical activities, set fitness goals, and track their progress. Users can log workouts, track their running or cycling routes using GPS, and view detailed statistics and progress reports.';
    }
}
