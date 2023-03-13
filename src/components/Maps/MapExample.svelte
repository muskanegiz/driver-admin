<head>
  <script
        src="https://maps.googleapis.com/maps/api/js?key=xxxxxxxxxxxx&callback=initMap&v=weekly"
        defer>
  </script>
  <script>
    function initMap() {
      var center = {lat: 34.052235, lng: -118.243683};
        var locations = [
          ['Philz Coffee<br>\
            801 S Hope St A, Los Angeles, CA 90017<br>\
            <a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',   34.046438, -118.259653],
          ['Philz Coffee<br>\
            525 Santa Monica Blvd, Santa Monica, CA 90401<br>\
            <a href="https://goo.gl/maps/PY1abQhuW9C2">Get Directions</a>', 34.017951, -118.493567],
          ['Philz Coffee<br>\
            146 South Lake Avenue #106, At Shoppers Lane, Pasadena, CA 91101<br>\
            <a href="https://goo.gl/maps/eUmyNuMyYNN2">Get Directions</a>', 34.143073, -118.132040],
          ['Philz Coffee<br>\
            21016 Pacific Coast Hwy, Huntington Beach, CA 92648<br>\
            <a href="https://goo.gl/maps/Cp2TZoeGCXw">Get Directions</a>', 33.655199, -117.998640],
          ['Philz Coffee<br>\
            1710 Belle Vue Way, Tallahassee, FL 32304, United States<br>\
            <a href="https://goo.gl/maps/qfCED4umVaxpFXv27">Get Directions</a>', 30.4384575, -84.3119198],
        ];
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: center
        });
      var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map,
            title: locations[count][0]
          });
          google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
              infowindow.setContent(locations[count][0]);
              infowindow.open(map, marker);
            }
          })(marker, count));
        }
      }
          // window.initMap = initMap;
  </script>
  <style>
    #map {
        height: 400px; 
        width: 100%; 
    }
  </style>
</head>
<body>
  <div id="map" class="mt-10"></div>     
</body>
