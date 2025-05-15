document.addEventListener('DOMContentLoaded', () => {
    const optimizeButton = document.querySelector('#optimize-btn');
    optimizeButton.addEventListener('click', () => {
        document.querySelector('#ai-suggestions').innerHTML = "<p>Analyzing data... Please wait.</p>";
        setTimeout(() => {
            document.querySelector('#ai-suggestions').innerHTML = "<p>🚀 Optimization complete! AI suggests reducing idle time by 15% on Carrier Lane A.</p>";
        }, 2000);
    });
});