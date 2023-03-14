<script>
    import Filter from "../../components/Filter/Filter.svelte";
    import Sidebar from "../../components/Sidebar/Sidebar.svelte";
    import MapExample from "../../components/Maps/MapExample.svelte";
    import DispatcherNavbar from "../../components/Navbars/DispatcherNavbar.svelte";
    import Header from "../../components/Headers/HeaderStats.svelte";
    import { setContext } from "svelte";
    export let data;
    let {products } = data;
    setContext("user",data);
</script>
    <Sidebar></Sidebar>
    <div class="relative md:ml-64 bg-blueGray-100">
		<DispatcherNavbar />
        <Header/>
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
            <Filter/>   
            <MapExample /> 
                <div class="mt-10">
                    <div>
                        <div class="flex flex-col md:mx-6 lg:mx-6">
                            <div class="overflow-x-auto  sm:-mx-6 lg:-mx-6">
                                <div class="inline-block min-w-full ">
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
                                                <th scope="col" class="px-3 py-2">Market</th>
                                                <th scope="col" class="px-3 py-2">Mkt Tip</th>
                                                <th scope="col" class="px-3 py-2">Int Offer</th>
                                                <th scope="col" class="px-3 py-2">1st</th>
                                                <th scope="col" class="px-3 py-2">2nd</th>
                                                <th scope="col" class="px-3 py-2">3rd</th>
                                                <th scope="col" class="">
                                                    <input class="text-black bg-gray-300 mt-3 mb-3 border border-black hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded" type="submit" value="Requote"/>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {#each products as plans} 
                                                <tr class="border-b dark:border-neutral-500">
                                                  
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="checkbox" /></td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                        <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">{plans.orderno}</a>
                                                    </td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">{plans.createdon}</td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"> {plans.pickup_address.city}
                                                    </td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.25</td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="text" size="4" /></td>
                                                    <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="text" size="4" /></td>
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
                    </div>
                </div>
        </div>
    </div>
