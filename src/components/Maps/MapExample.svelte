<script>
  import { onMount } from "svelte";
  import { getContext } from "svelte";  
  const user = getContext("user");
  onMount(async () => {

          var center = {lat: 34.017951, lng: -118.493567};
          // @ts-ignore
          var locationsArr = [];
          for (let i = 0; i < user.products.length; i++) 
          {            
            locationsArr[i] = [user.products[i].pickup_address.city,
              user.products[i].pickup_address.street1
              , user.products[i].latitude, user.products[i].longitude];
          }
           // @ts-ignore
            let google = window.google;
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 9,
              center: center
            });
            var infowindow =  new google.maps.InfoWindow({});
            var marker, count;
            for (count = 0; count < locationsArr.length; count++) {
                marker = new google.maps.Marker({
                  position: new google.maps.LatLng(locationsArr[count][2], locationsArr[count][3]),
                  map: map,
                  title: locationsArr[count][0]
                });
                google.maps.event.addListener(marker, 'click', (function (marker, count) {
                  return function () {
                    // @ts-ignore
                    infowindow.setContent(locationsArr[count][0]);
                    infowindow.open(map, marker);
                  }
                })(marker, count));
              }
            }
        );
</script>

<div
id="map"
class="relative w-full rounded h-600-px mt-10"
></div>    




