let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map-container"), {
    center: { lat: 41.25014081010018, lng: 0.4885067268997951 },
    zoom: 14,
    mapId: "12d5114a3223f4d0"
  });
  new google.maps.Marker({
      position: {lat: 41.25014081010018, lng: 0.4885067268997951 },
      map,
      title: "Bar la Pansa",
  })
}