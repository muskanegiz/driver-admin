<script>
// @ts-nocheck

    import Filter from "../../components/Filter/Filter.svelte";
    import Sidebar from "../../components/Sidebar/Sidebar.svelte";
    import MapExample from "../../components/Maps/MapExample.svelte";
    import DispatcherNavbar from "../../components/Navbars/DispatcherNavbar.svelte";
    import Header from "../../components/Headers/HeaderStats.svelte";
    import { setContext } from "svelte";
    export let data;
    let {products } = data;
    setContext("user",data);
    let filter= "";
    // @ts-ignore
    function handleMessage(event) {
        filter= event.detail.text 
	}
    let no= ""
    // @ts-ignore
    /**
     * @type {any[]}
     */
    let orderDetail= [];
    // @ts-ignore
    function detail(orderid){
        no = orderid;
        show= true;
        // @ts-ignore
        for(let i=0;i<=data.products.length;i++)
        {
            if(data.products[i].orderid === orderid)
            {
                orderDetail = data.products[i]
                return true;
            }     
        }   
    }
    let show = false;
</script>
    <Sidebar></Sidebar>
    <div class="relative md:ml-64 bg-blueGray-100">
		<DispatcherNavbar />
        <Header/>
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
            <Filter on:message={handleMessage}/>   
            <MapExample /> 
            <div class="mt-10">
                <div>
                    <div class="flex flex-col md:mx-6 lg:mx-6">
                        <div class="overflow-x-auto  sm:-mx-6 lg:-mx-6">
                            <div class="inline-block min-w-full mb-5 ">
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
                                                <th scope="col" class="px-3 py-2">Loc</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {#if filter.length === 0}
                                                {#each products as plans} 
                                                    <tr class="border-bdark:border-neutral-500">                                          
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]" ><input type="radio" value="" name="default-radio" class="select" id="selected" on:click={()=>{detail(plans.orderid)}}
                                                            /></td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                            <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">{plans.orderno}</a>
                                                        </td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">{plans.createdon}</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"> {plans.pickup_address.city}
                                                        </td> 
                                                    </tr>
                                                {/each}
                                            {:else}
                                                {#each filter as filters}
                                                    {#each products as plans} 
                                                        {#if filters == plans.delivery}
                                                            <tr class="border-b dark:border-neutral-500">                                          
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="radio" value="" name="default-radio"  on:click={()=>{detail(plans.orderid)}} /></td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]" id={plans.orderno}>
                                                                    <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">{plans.orderno}</a>
                                                                </td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">{plans.createdon}</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                                                <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"> {plans.pickup_address.city}
                                                                </td>                                                                                  
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
                        <div class="grid grid-cols-2 gap-16 mb-6">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Order
                                    </label>
                                    {orderDetail.orderno} 
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
                                    {orderDetail.pickup_address.city}
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
                                <div class="w-full md:w-1/2 px-2  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tip">
                                    MKT Tip
                                    </label>
                                    <input class="appearance-none block bg-gray-200  w-64 text-gray-700 border border-black-500 rounded mb-3 focus:outline-none focus:bg-white" id="tip" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-16 mb-6 ">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-2  md:mb-0 ">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="offer">
                                        Int Offer
                                    </label>
                                    <input class="appearance-none block bg-gray-200 w-64 text-gray-700 border border-black-500 rounded mb-3  focus:outline-none focus:bg-white" id="offer" type="text">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-2 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Ist">
                                        Ist
                                    </label>
                                    <select class="appearance-none block bg-gray-200 w-64 text-gray-700 border border-black-500 rounded mb-3 focus:outline-none focus:bg-white" id="Ist" type="text" >
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
                                <div class="w-full md:w-1/2 px-2  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="second">
                                        2nd
                                    </label>
                                    <select class="appearance-none block w-64 bg-gray-200 text-gray-700 border border-black-500 rounded mb-3  focus:outline-none focus:bg-white" id="second" type="text" >
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
                                <div class="w-full md:w-1/2 px-2  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="third">
                                        3rd
                                    </label>
                                    <select class="appearance-none block w-64 bg-gray-200 text-gray-700 border border-black-500 rounded mb-3  focus:outline-none focus:bg-white" id="third" type="text" >
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
                            <div class="w-full md:w-1/2 px-2  md:mb-0">                    
                                <input class="text-black bg-gray-300 mt-2 mb-3 w-64 border border-black hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded " type="submit" value="Dispatch Selected Orders" />
                            </div>
                        </div>
                    </form>
                    
                </div>
            {/if} 
        </div>
    </div>

       