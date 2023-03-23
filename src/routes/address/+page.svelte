<script>
    import { env } from '$env/dynamic/public';
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    let authToken = browser && localStorage.getItem("token");
    console.log("address:::: "+authToken);
    let name="";
    let address1="";
    let address2= "";
    let city="";
    let state="";
    let zip="";
    let latitude="";
    let longitude="";
    let phone="";
    let store_number="";
        async function doPost (){
            // let url = env.PUBLIC_BASE_URL+"admin/address/add";
        let url = "https://drive.boosterrocket.app/api/admin/address/add";
            fetch(url,{
                method:  'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken,
                },
                body: JSON.stringify({
                    name,
                    address1,
                    address2,
                    city,
                    state,
                    zip,
                    latitude,
                    longitude,
                    phone,
                    store_number
                })
            })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
                return [];
            }); 
            // goto("/dispatcher") 
        } 
</script>
<div class="p-8 mt-5">                  
    <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-8">
                <div class="w-full md:w-1/2 px-3 md:mb-0">
                    <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="name"
                    >
                    Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="name" bind:value={name}/>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2.5 mb-6">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="address1"
                        >
                        address1
                        </label>
                        <input
                        id="address1"
                        type="text"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Address1"
                        bind:value={address1}/> 
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="address2"
                        >
                        address2
                        </label>
                        <input
                        id="address2"
                        type="text"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Address2"
                        bind:value={address2}/>   
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2.5 mb-6">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="city">
                        city
                        </label>
                        <input
                        id="city"
                        type="text"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="city"
                        bind:value={city}/> 
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="state">
                        state
                        </label>
                        <input
                        id="state"
                        type="text"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="state"
                        bind:value={state}/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="zip"
                    >
                    zip
                    </label>
                    <input
                    id="zip"
                    type="text"
                    class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="zip"
                    bind:value={zip}/>  
                    </div>
                </div>
            </div>                       
            <div class="grid grid-cols-2 gap-2.5 mb-6">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="latitude"
                        >
                        latitude
                        </label>
                        <input
                        id="latitude"
                        type="text"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="latitude"
                        bind:value={latitude}/>  
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            for="longitude"
                            >
                            longitude
                            </label>
                        <input
                            id="longitude"
                            type="text"
                            class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="longitude"
                            bind:value={longitude}/> 
                    </div>
                </div>
            </div>   
            <div class="grid grid-cols-2 gap-2.5 mb-6">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="phone"
                        >
                        phone
                        </label>
                        <input
                        id="phone"
                        type="text"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="phone"
                        bind:value={phone}/>  
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                        <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="store_number"
                        >
                        store_number
                        </label>
                        <input
                        id="store_number"
                        type="text"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="store_number"
                        bind:value={store_number}/> 
                    </div>
                </div>
            </div> 
            <div class="text-center mt-6">
                <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button" on:click={()=>{doPost()}}
                >
                    Post 
                </button>
           </div>
    </form>   
</div> 


       
               
