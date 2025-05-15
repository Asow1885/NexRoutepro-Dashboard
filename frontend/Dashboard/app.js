// 🚀 Route Planning Functions (Top Section)
async function loadStats() {
    const response = await fetch('https://nexroutepro-api.onrender.com/api/stats/');
    const data = await response.json();
    document.getElementById('drivers-online').innerText = `Drivers Online: ${data.onlineDrivers}`;
    document.getElementById('on-time-rate').innerText = `On-Time Rate: ${data.onTimeRate}%`;
    document.getElementById('distance-today').innerText = `Distance Today: ${data.distanceToday} mi`;
    document.getElementById('orders-overdue').innerText = `Orders Overdue: ${data.ordersOverdue}`;
}

window.onload = loadStats; // Load stats on page load

// 🚀 To-Do List Functionality
function addTask() {
    const taskText = document.getElementById("todo-input").value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("todo-list");
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    document.getElementById("todo-input").value = "";
}

// 🚀 Fetch Live News (Yahoo or Google News Style)
async function fetchNews() {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerText = "Loading latest news...";
    const response = await fetch("https://newsapi.org/v2/top-headlines?category=business&apiKey=73319b822f42481cae5b53566edd2272");
    const data = await response.json();
    newsContainer.innerHTML = data.articles.slice(0, 5).map(article => `
        <div class="news-item">
            <h4>${article.title}</h4>
            <p>${article.description || ""}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    `).join("");
}

// 🚀 Initialize News on Dashboard Load
window.onload = function() {
    loadStats(); // Load stats
    fetchNews(); // Load news
};
