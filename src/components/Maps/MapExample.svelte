<head>
  <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1b4u7lMJ9F0jc-n1L47XMfCBBQQM3r10&callback=initMap&v=weekly"
        defer></script>
  <script>
      function initMap() {
      const mapconfig = { lat: 28.679079, lng: 77.069710 };
      const maps = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: mapconfig,
      });
      // The marker, positioned at mapconfig
      const marker = new google.maps.Marker({
        position: mapconfig,
        map: maps,
      });
    }
  </script>
  <style>
      #map {
        height: 400px; 
        width: 100%;
      }
  </style>
</head>
<body>
  <h3>My Google Maps Demo</h3>
  <div id="map"></div>     
</body>
