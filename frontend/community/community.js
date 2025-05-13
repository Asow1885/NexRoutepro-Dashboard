
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const notificationPanel = document.querySelector('.notification-panel');
    const notificationToggle = document.getElementById('notificationToggle');

    loginBtn.addEventListener('click', function() {
        document.body.classList.toggle('logged-in');
    });

    notificationToggle.addEventListener('click', function() {
        notificationPanel.classList.toggle('visible');
    });
});
