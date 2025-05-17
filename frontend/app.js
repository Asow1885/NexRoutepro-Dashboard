// Load RouteXchange Function
function loadRouteXchange() {
    const iframe = document.getElementById("routexchange-iframe");
    iframe.style.display = "block";
    iframe.src = "./NexRoutePro_RouteXchange/NexRoutePro_RouteXchange_Animated_Bubble_Perfect.html";
}

// Initialize Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    // Any future JavaScript for buttons or dynamic features can go here.
    console.log("NexRoutePro Dashboard Loaded");
});
