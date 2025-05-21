document.addEventListener('DOMContentLoaded', function() {
    // Select the notification toggle button and the notification panel
    const notificationToggle = document.getElementById('notificationToggle');
    const notificationPanel = document.querySelector('.notification-panel');
    
    // Ensure the notification panel starts hidden
    notificationPanel.style.display = 'none';

    // Toggle the visibility of the notification panel when the button is clicked
    notificationToggle.addEventListener('click', function() {
        if (notificationPanel.style.display === 'none') {
            notificationPanel.style.display = 'block'; // Show the panel
        } else {
            notificationPanel.style.display = 'none'; // Hide the panel
        }
    });

    // Optional: Close the panel if clicked outside of it
    document.addEventListener('click', function(event) {
        if (!notificationPanel.contains(event.target) && !notificationToggle.contains(event.target)) {
            notificationPanel.style.display = 'none'; // Hide if clicked outside
        }
    });

    // Search functionality
    const searchButton = document.querySelector('button'); // The search button
    const searchInput = document.querySelector('input[type="text"]'); // The search bar input
    const cards = document.querySelectorAll('.card'); // All cards (Discussions, Job Board, Mentorship)

    // Event listener for search
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase(); // Get the search term
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase(); // Get the title of the card
            const description = card.querySelector('p').textContent.toLowerCase(); // Get the description of the card

            // If the title or description matches the search term, show the card, otherwise hide it
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

