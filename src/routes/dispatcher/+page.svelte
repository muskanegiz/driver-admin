<script>
// @ts-nocheck
    import Filter from "../../components/Filter/Filter.svelte";
    import Sidebar from "../../components/Sidebar/Sidebar.svelte";
    import MapExample from "../../components/Maps/MapExample.svelte";
    import DispatcherNavbar from "../../components/Navbars/DispatcherNavbar.svelte";
    import Header from "../../components/Headers/HeaderStats.svelte";
    import { setContext } from "svelte";
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    import { paginate, LightPaginationNav } from 'svelte-paginate'
    let authToken = browser && localStorage.getItem("token");
    let picked=[];
    onMount(async ()=> {
        let endpoints= "https://drive.boosterrocket.app/api/admin/address"
        const headers = {
            'Access-Control-Allow-Origin' : '*',
            'Authorization': 'Bearer '+authToken,
        };
        const response = await fetch(endpoints,{headers});
        let datas = await response.json();
        picked = datas.data
        console.log(picked);
    })   
    export let data;
    let {products } = data;
    console.log(data);
    setContext("user",data);
    let filter= "";
    var mapFilter="";
    var dataCounter = "";    
    let items = products;
    let currentPage = 1
    let pageSize = 10
    $: paginatedItems = paginate({ items, pageSize, currentPage })           
    // @ts-ignore
    function handleMessage(event) {
        filter= event.detail.text
        var dataCount= 0;
        var center = {lat: 36.162663, lng: -86.781601};
            // @ts-ignore
            var locationsArr = [];  
            for (let i = 0; i < data.products.length; i++) 
            {            
                if (filter.includes(data.products[i].status)) {
                    dataCount++;                   
                    if (data.products[i].status == "pending")
                    {
                        locationsArr[i] =[
                        data.products[i].latitude,data.products[i].longitude];
                        console.log(locationsArr[i] ); 
                    } else if(data.products[i].status == "delivered"){
                        locationsArr[i] =[
                        data.products[i].latitude,data.products[i].longitude]; 
                    }else if(data.products[i].status == "in-progress"){
                        locationsArr[i] =[data.products[i].driver.latitude, data.products[i].driver.longitude];                     
                    }else if(data.products[i].status == "picked-up"){
                        locationsArr[i] =[
                        data.products[i].latitude,data.products[i].longitude]; 
                    }
                }               
                else {
                    locationsArr[i] = [];
                }           
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
            console.log(dataCount);
            dataCounter= dataCount;    
	}
   
    function handleData(event) {
        mapFilter = event.detail.mapvalue;
        var center = {lat: 36.162663, lng: -86.781601};       
            // @ts-ignore
            var locationsArr = [];
            let icon = {
              url: "https://cdn-icons-png.flaticon.com/512/7720/7720526.png",
              scaledSize: { width: 50, height: 50 }
            }
            for (let i = 0; i<data.products.length; i++) 
            {
                if(mapFilter.includes(data.products[i].status) ) {
                    if(data.products[i].status == "in-progress" && data.products[i].driver != "null" ) {
                       locationsArr[i] =[data.products[i].driver.latitude, data.products[i].driver.longitude];                     
                    }     
                }else if( ( mapFilter.includes("all") == true)){
                        locationsArr[i] =[data.products[i].latitude, data.products[i].longitude];
                }else if(data.products[i].status == "in-progress" && data.products[i].driver !=null && ( mapFilter.includes("in-progress-path") == true) ) {
                       console.log("driverrr_pathh");
                       console.log(data.products[i].driver.latitude);
                       console.log( data.products[i].driver.longitude);
                       locationsArr[i] =[[data.products[i].latitude, data.products[i].longitude],
                        [data.products[i].driver.latitude, data.products[i].driver.longitude]];
                        locationsArr[i]['drive_path'] = 1;  
                       console.log(locationsArr[i] ); 
                }else {
                    locationsArr[i] = [];
                }
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
                if(locationsArr[count]['drive_path'] == 1)
                {
                            var end = new google.maps.LatLng(locationsArr[count][0][0],locationsArr[count][0][1]);
                            var start = new google.maps.LatLng(locationsArr[count][1][0],locationsArr[count][1][1]);
                            var display = new google.maps.DirectionsRenderer();
                            var services = new google.maps.DirectionsService();
                            display.setMap(map);
                            var request ={
                                origin : start,
                                destination:end,
                                travelMode: 'DRIVING'
                            };
                            services.route(request,function(result,status){
                                if(status =='OK'){
                                    display.setDirections(result);
                                }
                            });          
                } else {
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
            }
	}  
    
</script>
    <Sidebar></Sidebar>
    <div class="relative md:ml-64 bg-blueGray-100">
		<DispatcherNavbar />
        <Header/>
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
            <Filter on:message={handleMessage} on:data={handleData} />  
            <MapExample/>
            <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-10"
            >
                <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full max-w-full flex-grow flex-1">
                            <div class="flex flex-col md:mx-6 lg:mx-6">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-6">
                                    <div class="inline-block min-w-full ">
                                        <div class="overflow-hidden">
                                            <table class="min-w-full text-left text-sm font-light" id="Table1">
                                                <thead class="font-medium dark:border-neutral-500">
                                                    <tr class="text-black ">
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Select</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Order</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Placed</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Due</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Items</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Del+Tip</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Loc</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Market</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Mkt Tip</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Int Offer</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">Delivery</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">1st</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">2nd</th>
                                                        <th scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">3rd</th>
                                                        <th scope="col" class="">
                                                            <input class="text-black bg-gray-300 mt-3 mb-3 border border-black hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded" type="submit" value="Requote"/>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {#if filter.length === 0}                                                        
                                                        {#each paginatedItems as plans} 
                                                            <tr class="border-b dark:border-neutral-500">
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    <input type="checkbox" class="radio_btn" name="plan_choose"/>   
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://moonshotdelivers.myshopify.com/admin/orders/{plans.orderid}"> {plans.orderNo} </a>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">{plans.createdon}</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">ASAP</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">$30.00</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">$13.50</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    <select name="pickupSource"> 
                                                                        {#each picked as pick}
                                                                        <option> {pick.name}</option>
                                                                        {/each}                                                               
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">$13.25</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black "><input type="text" size="4" /></td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black "><input type="text" size="4" /></td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    {#if plans.shipping_type == null}
                                                                        <select name="shipping" class="w-24">
                                                                            <option selected></option>
                                                                            <option value="self">Self</option>
                                                                            <option value="xpressrun">Xpressrun</option>
                                                                        </select>
                                                                    {:else}
                                                                    <select name="shipping" class="w-24">
                                                                        <option value="self" selected > Self</option>
                                                                    </select>
                                                                    {/if}
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    <select name="drive1-1">
                                                                        <option value="3rd P" selected>3rd P</option>
                                                                        <option value="Kent">Ken</option>
                                                                        <option value="Drew">Drew</option>
                                                                        <option value="MAC1">MAC1</option>
                                                                        <option value="Pool">Pool</option>
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    <select name="drive1-2">
                                                                        <option value="3rd P">3rd P</option>
                                                                        <option value="Kent">Ken</option>
                                                                        <option value="Drew">Drew</option>
                                                                        <option value="MAC1">MAC1</option>
                                                                        <option value="Pool">Pool</option>
                                                                        <option value="None" selected>None</option>
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    <select name="drive1-3">
                                                                        <option value="3rd P">3rd P</option>
                                                                        <option value="Kent">Ken</option>
                                                                        <option value="Drew">Drew</option>
                                                                        <option value="MAC1">MAC1</option>
                                                                        <option value="Pool">Pool</option>
                                                                        <option value="None" selected>None</option>
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                    <a href={"#"}><input type="checkbox" class="ml-6"/></a>
                                                                </td>
                                                            </tr>
                                                        {/each}
                                                        {:else}
                                                        {#if dataCounter > 0 }
                                                            {#each filter as filters}
                                                                {#each paginatedItems as plans} 
                                                                    {#if filters == plans.status}
                                                                        <tr class="border-b dark:border-neutral-500">
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                <input type="checkbox" class="radio_btn" name="plan_choose"  
                                                                                /> 
                                                                            </td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                <a target="_blank" rel="noopener noreferrer" href="https://moonshotdelivers.myshopify.com/admin/orders/{plans.orderid}"> {plans.orderNo} </a>
                                                                                    </td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">{plans.createdon}</td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">ASAP</td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">$30.00</td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">$13.50</td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                <select name="pickupSource"> 
                                                                                    {#each picked as pick}
                                                                                    <option> {pick.name}</option>
                                                                                    {/each}                                                               
                                                                                </select>
                                                                            </td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">$13.25</td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black "><input type="text" size="4" /></td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black "><input type="text" size="4" /></td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                {#if plans.shipping_type == null}
                                                                                    <select name="shipping" class="w-24">
                                                                                        <option selected></option>
                                                                                        <option value="self">Self</option>
                                                                                        <option value="xpressrun">Xpressrun</option>
                                                                                    </select>
                                                                                {:else}
                                                                                <select name="shipping" class="w-24">
                                                                                    <option value="self" selected > Self</option>
                                                                                </select>
                                                                                {/if}
                                                                            </td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                <select name="drive1-1">
                                                                                    <option value="3rd P" selected>3rd P</option>
                                                                                    <option value="Kent">Ken</option>
                                                                                    <option value="Drew">Drew</option>
                                                                                    <option value="MAC1">MAC1</option>
                                                                                    <option value="Pool">Pool</option>
                                                                                </select>
                                                                            </td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                <select name="drive1-2">
                                                                                    <option value="3rd P">3rd P</option>
                                                                                    <option value="Kent">Ken</option>
                                                                                    <option value="Drew">Drew</option>
                                                                                    <option value="MAC1">MAC1</option>
                                                                                    <option value="Pool">Pool</option>
                                                                                    <option value="None" selected>None</option>
                                                                                </select>
                                                                            </td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                <select name="drive1-3">
                                                                                    <option value="3rd P">3rd P</option>
                                                                                    <option value="Kent">Ken</option>
                                                                                    <option value="Drew">Drew</option>
                                                                                    <option value="MAC1">MAC1</option>
                                                                                    <option value="Pool">Pool</option>
                                                                                    <option value="None" selected>None</option>
                                                                                </select>
                                                                            </td>
                                                                            <td class="whitespace-nowrap px-3 py-2 text-black ">
                                                                                <a href={"#"}><input type="checkbox" class="ml-6"/></a>
                                                                            </td>
                                                                        </tr> 
                                                                    {/if}                                                                
                                                                {/each}    
                                                            {/each}                                                       
                                                            {:else}
                                                            <tr><td colspan="16" style="font-weight:bold;font-size:20px;padding:10px 0px 0px 20px"> No record Found</td></tr>
                                                        {/if}
                                                    {/if}
                                                </tbody>
                                                <tr>
                                                    <td colspan="14" style="text-align:center;">
                                                        <input class="text-black bg-gray-300 mt-2 mb-3 border border-black hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded" type="submit" value="Dispatch Selected Orders" />
                                                    </td>
                                                </tr>                                            
                                            </table>                                                                                
                                        </div>
                                    </div>                                 
                                </div>
                            </div>
                              <LightPaginationNav
                                totalItems="{items.length}"
                                pageSize="{pageSize}"
                                currentPage="{currentPage}"
                                limit="{1}"
                                showStepOptions="{true}"
                                on:setPage="{(e) => currentPage = e.detail.page}"
                                /> 
                        </div>
                    </div> 
                </div>      
            </div>
        </div>
    </div>



       