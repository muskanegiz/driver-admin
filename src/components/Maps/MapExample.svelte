<script>
  import { onMount } from "svelte";
  import { getContext } from "svelte";  
  const user = getContext("user");
  onMount(async () => {
          var center = {lat: 36.162663, lng: -86.781601};
            // @ts-ignore
            var locationsArr = [];           
            for (let i = 0; i < user.products.length; i++) 
            {               
              locationsArr[i] =[
                 user.products[i].latitude, user.products[i].longitude];              
            }
           // @ts-ignore
            let google = window.google;
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 9,
              center: center
            });
            var infowindow =  new google.maps.InfoWindow({});
            var marker, count;
            let icon = {
              url:"https://cdn-icons-png.flaticon.com/512/7720/7720526.png",
              scaledSize: { width: 50, height: 50 }
            }
            for (count = 0; count < locationsArr.length; count++) {
                marker = new google.maps.Marker({ 
                  position: new google.maps.LatLng(locationsArr[count][0], locationsArr[count][1]),
                  map: map,
                  title: locationsArr[count][0],
                  icon: icon,                  
                });
                google.maps.event.addListener(marker, 'click', (function (marker, count) {
                  return function () {
                    // @ts-ignore
                    infowindow.setContent(locationsArr[count][0]);
                    infowindow.open(map, marker);
                  }
                })(marker, count));
            }
          });
</script>
<div class="flex flex-wrap mt-10">
  <div class="w-full px-4">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    >
      <div
      id="map"
      class="relative w-full rounded h-600-px"></div>    
    </div>
  </div>
</div>






