<script>
// @ts-nocheck

    import Filter from "../../components/Filter/Filter.svelte";
    import Sidebar from "../../components/Sidebar/Sidebar.svelte";
    import MapExample from "../../components/Maps/MapExample.svelte";
    import DispatcherNavbar from "../../components/Navbars/DispatcherNavbar.svelte";
    import Header from "../../components/Headers/HeaderStats.svelte";
    import { setContext } from "svelte";
    import { onMount } from "svelte";
    import { each } from "svelte/internal";
    let picked=[];
    onMount(async ()=> {
        let endpoints= "https://drive.boosterrocket.app/api/admin/address"
        const headers = {
        'Access-Control-Allow-Origin' : '*',
        // 'Authorization': 'Bearer '+authToken,
        'Authorization': 'Bearer 15|COuixyr5WQq5p4MJAzwc1ITm8jW54T7KoihzbkBD ',
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
    
    // @ts-ignore
    function handleMessage(event) {
        filter= event.detail.text
	}
    function handleData(event) {
        mapFilter = event.detail.mapvalue;
        console.log(mapFilter);
        var center = {lat: 39.737920, lng: -104.990694};
        
            // @ts-ignore
            var locationsArr = [];

            for (let i = 0; i<data.products.length; i++) 
            {
                if(mapFilter.includes(data.products[i].status) ) {
                    if(data.products[i].status == "in-progress" && data.products[i].driver != "null" ) {
                       locationsArr[i] =[data.products[i].driver.latitude, data.products[i].driver.longitude];
                       var center = {lat: 39.737920, lng: -104.990694};
                     
                    }     
                }
                else if( ( mapFilter.includes("all") == true)){
                        locationsArr[i] =[data.products[i].latitude, data.products[i].longitude];
                        var center = {lat:40.7010064, lng: -73.9434345};
                    }
               
                else if(data.products[i].status == "in-progress" && data.products[i].driver !=null && ( mapFilter.includes("in-progress-path") == true) ) {
                       console.log("driverrr_pathh");
                       console.log(data.products[i].driver.latitude);
                       console.log( data.products[i].driver.longitude);
                       locationsArr[i] =[[data.products[i].latitude, data.products[i].longitude],
                        [data.products[i].driver.latitude, data.products[i].driver.longitude]];
                        locationsArr[i]['drive_path'] = 1;  
                       console.log(locationsArr[i] ); 
                    }
                else {
                    locationsArr[i] = [];
                }
                console.log(locationsArr[i]['drive_path']);   
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
	}
    let no= ""
    // @ts-ignore
    let orderDetail= [];  
    let values=[];
    // @ts-ignore
    function detail(orderid){
   
        no = orderid;
        console.log(no);
        show= true;
        // @ts-ignore
        for(let i=0;i<=data.products.length;i++)
        {
            if(data.products[i].orderid === orderid)
            {
                orderDetail = data.products
                return true;
            } 
        }   
     
    }
    function close(){
        show= false;
        var radioButton = document.getElementsByName("plan_choose");
        for(var i=0;i<radioButton.length;i++)
        radioButton[i].checked = false; 
    }
    let show = false;

    function GetSelected() {
        //Reference the Table.
        var grid = document.getElementById("Table1");
 
        //Reference the CheckBoxes in Table.
        var checkBoxes = grid.getElementsByTagName("INPUT");
        var message = "Id Name                  Country\n";
 
        //Loop through the CheckBoxes.
        for (var i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked) {
                var row = checkBoxes[i].parentNode.parentNode;
              for(let i=0; i<row.cells;i++)
              {
                console.log(i);
              }
                message += row.cells[1].innerHTML;
                message += "   " + row.cells[2].innerHTML;
                message += "   " + row.cells[3].innerHTML;
                message += "   " + row.cells[4].innerHTML;
                message += "   " + row.cells[5].innerHTML;
                message += "   " + row.cells[6].innerHTML;
                message += "   " + row.cells[7].innerHTML;
                
                message += "\n";
            }
        }
 
        //Display selected Row data in Alert Box.
        alert(message);
        console.log(message);
    }

</script>
    <Sidebar></Sidebar>
    <div class="relative md:ml-64 bg-blueGray-100">
		<DispatcherNavbar />
        <Header/>
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
            <Filter on:message={handleMessage} on:data={handleData} /> 
               
            <MapExample/>
            <div class="mt-10">
                <div>
                    <div class="flex flex-col md:mx-6 lg:mx-6">
                        <div class="overflow-x-auto  sm:-mx-6 lg:-mx-6">
                            <div class="inline-block min-w-full ">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light" id="Table1">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                            <tr class="text-black ">
                                            <th scope="col" class="px-3 py-2">Select</th>
                                            <th scope="col" class="px-3 py-2">Order</th>
                                            <th scope="col" class="px-3 py-2">Placed</th>
                                            <th scope="col" class="px-3 py-2">Due</th>
                                            <th scope="col" class="px-3 py-2">Items</th>
                                            <th scope="col" class="px-3 py-2">Del+Tip</th>
                                            <th scope="col" class="px-3 py-2">Loc</th>
                                            <th scope="col" class="px-3 py-2">Market</th>
                                            <th scope="col" class="px-3 py-2">Mkt Tip</th>
                                            <th scope="col" class="px-3 py-2">Int Offer</th>
                                            <th scope="col" class="px-3 py-2">Delivery</th>
                                            <th scope="col" class="px-3 py-2">1st</th>
                                            <th scope="col" class="px-3 py-2">2nd</th>
                                            <th scope="col" class="px-3 py-2">3rd</th>
                                            <th scope="col" class="">
                                                <input class="text-black bg-gray-300 mt-3 mb-3 border border-black hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded" type="submit" value="Requote"/>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                             {#if filter.length === 0}
                                                {#each products as plans} 
                                                    <tr class="border-b dark:border-neutral-500">
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <!-- <input type="checkbox" /> -->
                                                            <input type="checkbox" class="radio_btn" name="plan_choose" 
                                                            on:click={()=>{detail(plans.orderid)}}/> 

                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">{plans.orderNo}</a>
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">{plans.createdon}</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <select name="pickupSource"> 
                                                                {#each picked as pick}
                                                                <option> {pick.name}</option>
                                                                {/each}                                                               
                                                            </select>
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.25</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="text" size="4" /></td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="text" size="4" /></td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
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
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <select name="drive1-1">
                                                                <option value="3rd P" selected>3rd P</option>
                                                                <option value="Kent">Ken</option>
                                                                <option value="Drew">Drew</option>
                                                                <option value="MAC1">MAC1</option>
                                                                <option value="Pool">Pool</option>
                                                            </select>
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <select name="drive1-2">
                                                                <option value="3rd P">3rd P</option>
                                                                <option value="Kent">Ken</option>
                                                                <option value="Drew">Drew</option>
                                                                <option value="MAC1">MAC1</option>
                                                                <option value="Pool">Pool</option>
                                                                <option value="None" selected>None</option>
                                                            </select>
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <select name="drive1-3">
                                                                <option value="3rd P">3rd P</option>
                                                                <option value="Kent">Ken</option>
                                                                <option value="Drew">Drew</option>
                                                                <option value="MAC1">MAC1</option>
                                                                <option value="Pool">Pool</option>
                                                                <option value="None" selected>None</option>
                                                            </select>
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <a href={"#"}><input type="checkbox" class="ml-6"/></a>
                                                        </td>
                                                    </tr>
                                                {/each}
                                                {:else}
                                                {#each filter as filters}
                                                    {#each products as plans} 
                                                        {#if filters == plans.status}
                                                            <tr class="border-b dark:border-neutral-500">
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                                    <!-- <input type="checkbox" /> -->
                                                                    <input type="checkbox" class="radio_btn" name="plan_choose" 
                                                                    on:click={()=>{detail(plans.orderid)}}/> 

                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                                    <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">{plans.orderNo}</a>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">{plans.createdon}</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                                    <select name="pickupSource"> 
                                                                        {#each picked as pick}
                                                                        <option> {pick.name}</option>
                                                                        {/each}                                                               
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.25</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="text" size="4" /></td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="text" size="4" /></td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
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
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                                    <select name="drive1-1">
                                                                        <option value="3rd P" selected>3rd P</option>
                                                                        <option value="Kent">Ken</option>
                                                                        <option value="Drew">Drew</option>
                                                                        <option value="MAC1">MAC1</option>
                                                                        <option value="Pool">Pool</option>
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                                    <select name="drive1-2">
                                                                        <option value="3rd P">3rd P</option>
                                                                        <option value="Kent">Ken</option>
                                                                        <option value="Drew">Drew</option>
                                                                        <option value="MAC1">MAC1</option>
                                                                        <option value="Pool">Pool</option>
                                                                        <option value="None" selected>None</option>
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                                    <select name="drive1-3">
                                                                        <option value="3rd P">3rd P</option>
                                                                        <option value="Kent">Ken</option>
                                                                        <option value="Drew">Drew</option>
                                                                        <option value="MAC1">MAC1</option>
                                                                        <option value="Pool">Pool</option>
                                                                        <option value="None" selected>None</option>
                                                                    </select>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                                    <a href={"#"}><input type="checkbox" class="ml-6"/></a>
                                                                </td>
                                                            </tr>
                                                        {/if}
                                                    {/each}
                                                
                                                    {/each}
                                            {/if}
                                        </tbody>
                                        <tr>
                                            <td colspan="14" style="text-align:center;">
                                                <input class="text-black bg-gray-300 mt-2 mb-3 border border-black hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded" type="button" value="Get Selected" on:click={()=>{GetSelected()}} />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <!-- <div class="mt-10">
                <div>
                    <div class="flex flex-col md:mx-6 lg:mx-6">
                        <div class="overflow-x-auto  sm:-mx-6 lg:-mx-6">
                            <div class="inline-block min-w-full mb-5">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                            <tr class="text-black ">
                                                <th scope="col" class="px-3 py-2">Select</th>
                                                <th scope="col" class="px-3 py-2">Order</th>
                                                <th scope="col" class="px-3 py-2">Placed</th>
                                                <th scope="col" class="px-3 py-2">Due</th>
                                                <th scope="col" class="px-3 py-2">Items</th>
                                                <th scope="col" class="px-3 py-2">Del+Tip</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {#if filter.length === 0}
                                                {#each products as plans} 
                                                    <tr class="border-bdark:border-neutral-500"> 
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]" >
                                                            <input type="radio" class="radio_btn" name="plan_choose" on:click={()=>{detail(plans.orderid)}}/>    
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">{plans.orderNo}</a>
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">{plans.createdon}</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                                    </tr>
                                                {/each}
                                            {:else}
                                                {#each filter as filters}
                                                    {#each products as plans} 
                                                        {#if filters == plans.status}
                                                            <tr class="border-b dark:border-neutral-500">                                          
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="radio" name="plan_choose" on:click={()=>{detail(plans.orderid)}} /></td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]" id={plans.orderNo}>
                                                                    <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">{plans.orderNo}</a>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">{plans.createdon}</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                                            </tr>
                                                        {/if}     
                                                    {/each}
                                                {/each}  
                                            {/if}                                        
                                       </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            {#if show}
                <div class="p-8 mt-5">                  
                    <form class="w-full">
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600 mb-2">
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal"
                            on:click={()=>{close()}}>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                       
                        <div class="grid grid-cols-2 gap-16 mb-6">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Order
                                    </label>
                                    {orderDetail.orderNo} 
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Placed">
                                        Placed
                                    </label>
                                   <h1 class="w-full">{orderDetail.createdon}</h1>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-16 mb-6">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="due">
                                        Due
                                    </label>
                                    ASAP  
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="item">
                                        Item
                                    </label>
                                    $30.00   
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-16 mb-6">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for=" Del+Tip">
                                        Del+Tip
                                    </label>
                                        $13.50
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
                                    Loc
                                    </label>
                                    {orderDetail.pickup_address}
                                </div>
                            </div>
                        </div>                       
                        <div class="grid grid-cols-2 gap-16 mb-6">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="market">
                                    Market
                                    </label>
                                    $13.25
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tip">
                                    MKT Tip
                                    </label>
                                    <input class="appearance-none block bg-gray-200  w-64 text-gray-700 border border-red-500 rounded mb-3  focus:outline-none focus:bg-white" id="tip" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-16 mb-6 ">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0 ">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="offer">
                                        Int Offer
                                    </label>
                                    <input class="appearance-none block bg-gray-200 w-64 text-gray-700 border border-red-500 rounded mb-3  focus:outline-none focus:bg-white" id="offer" type="text">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Ist">
                                        Ist
                                    </label>
                                    <select class="appearance-none block bg-gray-200 w-64 text-gray-700 border border-red-500 rounded mb-3 focus:outline-none focus:bg-white" id="Ist" type="text" >
                                            <option value="3rd P">3rd P</option>
                                            <option value="Kent">Ken</option>
                                            <option value="Drew">Drew</option>
                                            <option value="MAC1">MAC1</option>
                                            <option value="Pool">Pool</option>
                                            <option value="None" selected>None</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-16 mb-6">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="second">
                                        2nd
                                    </label>
                                    <select class="appearance-none block w-64 bg-gray-200 text-gray-700 border border-red-500 rounded mb-3  focus:outline-none focus:bg-white" id="second" type="text" >
                                            <option value="3rd P">3rd P</option>
                                            <option value="Kent">Ken</option>
                                            <option value="Drew">Drew</option>
                                            <option value="MAC1">MAC1</option>
                                            <option value="Pool">Pool</option>
                                            <option value="None" selected>None</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="third">
                                        3rd
                                    </label>
                                    <select class="appearance-none block w-64  bg-gray-200 text-gray-700 border border-red-500 rounded mb-3  focus:outline-none focus:bg-white" id="third" type="text" >
                                            <option value="3rd P">3rd P</option>
                                            <option value="Kent">Ken</option>
                                            <option value="Drew">Drew</option>
                                            <option value="MAC1">MAC1</option>
                                            <option value="Pool">Pool</option>
                                            <option value="None" selected>None</option>
                                    </select>
                                </div>
                            </div>   
                        </div> 
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">                   
                                    <input class="text-black bg-gray-300 mt-2 mb-3 w-64 border border-black hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded " type="submit" value="Dispatch Selected Orders" />
                                </div>
                            </div>
                    </form>   
                </div>
            {/if}  -->
        </div>
    </div>

       