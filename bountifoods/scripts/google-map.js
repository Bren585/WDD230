function OceansideMap() {
    // The location of Oceanside
    const oceanside = { lat: 33.1959, lng: -117.3795 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: oceanside,
    });
    // The marker, positioned at Oceanside
    const marker = new google.maps.Marker({
        position: oceanside,
        map: map,
    });
}

window.initMap = OceansideMap;