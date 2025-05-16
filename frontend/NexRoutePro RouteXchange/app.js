
// NexRoutePro Interactive Dashboard - app.js

let map, markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('container-map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2
    });
    loadContainers();
}

function loadContainers() {
    const containers = [
        {lat: 37.7749, lng: -122.4194, origin: "San Francisco", destination: "Tokyo", price: 500, mode: "Sea"},
        {lat: 51.5074, lng: -0.1278, origin: "London", destination: "New York", price: 450, mode: "Air"}
    ];
    containers.forEach(container => {
        const marker = new google.maps.Marker({
            position: { lat: container.lat, lng: container.lng },
            map: map,
            title: `${container.origin} to ${container.destination} - $${container.price}/CBM`
        });
        marker.addListener('click', function() {
            openBooking(container);
        });
        markers.push(marker);
    });
}

function searchContainers() {
    const mode = document.getElementById("transport-mode").value.toLowerCase();
    markers.forEach(marker => {
        marker.setVisible(marker.getTitle().toLowerCase().includes(mode));
    });
}
