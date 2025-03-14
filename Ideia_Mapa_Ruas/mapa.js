function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -15.7801, lng: -47.9292 }, // Centro do Brasil
        zoom: 4,
        styles: [
            {
                featureType: "all",
                elementType: "geometry"
            }
        ]
    });

    // Adicionar Marcadores
    const markers = [
        { position: { lat: -23.55052, lng: -46.633308 }, title: "São Paulo" },
        { position: { lat: -22.9068, lng: -43.1729 }, title: "Rio de Janeiro" }
    ];

    markers.forEach(markerInfo => {
        new google.maps.Marker({
            position: markerInfo.position,
            map: map,
            title: markerInfo.title
        });
    });

    // Carregar GeoJSON (Estados do Brasil)
    map.data.loadGeoJson("https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson");
} 

window.onload = initMap;