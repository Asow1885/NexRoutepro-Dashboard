document.addEventListener('DOMContentLoaded', function() {
    // Select the notification toggle button and the notification panel
    const notificationToggle = document.getElementById('notificationToggle');
    const notificationPanel = document.querySelector('.notification-panel');
    
    // Ensure the notification panel starts hidden
    notificationPanel.style.display = 'none';

    // Toggle the visibility of the notification panel when the button is clicked
    notificationToggle.addEventListener('click', function() {
        // Check the current state of the notification panel
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
});
