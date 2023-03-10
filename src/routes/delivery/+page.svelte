<script>
    import HeaderStats from "../../components/Headers/HeaderStats.svelte";
    import DeliveryNavbar from "../../components/Navbars/DeliveryNavbar.svelte";
    import Sidebar from "../../components/Sidebar/Sidebar.svelte";
</script>
<Sidebar/>
<div class="relative md:ml-64 bg-blueGray-100">
	<DeliveryNavbar />
    <HeaderStats/>
	<div class="px-4 md:px-10 mx-auto w-full -m-24">
        <img src="https://cdn.shopify.com/s/files/1/0613/9206/0577/files/moonshot-logo-transparent-bg-NOGLOW.png?v=1658316223&width=250" class="max-h-full mt-28" alt = "moonlight">
        <div class="mx-3">
        <h1 class="text-2xl font-bold  pt-8">Dispatcher</h1>
        <h2 class="text-base ">Fast Config All Orders</h2>
        <div class="container mt-2">
            <div class="text-sm md:text-base">
                <div class=" overflow-x-auto">
                    <div class="inline-block overflow-hidden">
                        <table class="leading-normal ">
                            <thead>
                                <tr>
                                    <th>Pick</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="">
                                        <select name="fastfillSelection" class="border border-black rounded w-18 p-1 m-1">
                                            <option value="Kent" >Ken</option>
                                            <option value="Drew">Drew</option>
                                            <option value="MAC1">MAC1</option>
                                            <option value="EW">E/W</option>
                                            <option value="Pool">Pool</option>
                                            <option value="None">None</option>								
                                    </td>
                                    <td class="">
                                        <select name="fastfillSelection" class="border border-black rounded w-18 p-1 m-1">
                                            <option value="Kent">Ken</option>
                                            <option value="Drew">Drew</option>
                                            <option value="MAC1">MAC1</option>
                                            <option value="EW">E/W</option>
                                            <option value="Pool">Pool</option>
                                            <option value="None">None</option>
                                    </td>
                                    <td class="">
                                        <select name="fastfillSelection" class="border border-black rounded w-18 p-1 m-1">
                                            <option value="Kent">Ken</option>
                                            <option value="Drew">Drew</option>
                                            <option value="MAC1">MAC1</option>
                                            <option value="EW">E/W</option>
                                            <option value="Pool">Pool</option>
                                            <option value="None">None</option>
                                    </td>
                                    <td class="">
                                        <select name="fastfillSelection" class="border border-black rounded w-18 p-1 m-1">
                                            <option value="Kent">Ken</option>
                                            <option value="Drew">Drew</option>
                                            <option value="MAC1">MAC1</option>
                                            <option value="EW">E/W</option>
                                            <option value="Pool">Pool</option>
                                            <option value="None">None</option>
                                    </td>
                                    <td >
                                        <button class="bg-gray-200 border border-black text-black-700 font-semibold py-1 px-1 w-20 border border-black-500 rounded">
                                            Update
                                        </button>   
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="mt-2 mb-8 text-base font-bold">Deliveries</h2>
        <div>
            <!-- svelte-ignore a11y-missing-attribute -->
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wXqDeN9UWrStGuUWn6RsQlzRdan46Oc&ehbc=2E312F" width="80%" height="480"></iframe>
        </div> 
        <div>
            <fieldset class='p-3 border border-black'>
                <legend class="text-lg font-bold" >Map Options</legend>
                    <p class="mb-1.5 columns-2"><span>Layers</span>
                        <input type="checkbox" id="drivers" class="ml-2 mr-2" checked/><label for="drivers">  Drivers </label>&nbsp;
                        <input type="checkbox" id="Driver" class="ml-2 mr-2" checked/><label for="Driver">  Driver Paths  </label>&nbsp;
                        <input type="checkbox" id="orders" class="ml-2 mr-2" checked><label for="orders">  Orders  </label>&nbsp;
                    </p>
                    <p class="mb-1.5 "><span>Show:</span>
                        <input type="checkbox" id="unassigned" class="ml-2 mr-2"checked/><label for="unassigned">Unassigned</label>&nbsp;
                        <input type="checkbox" id="assigned" class="ml-2 mr-2"/><label for="assigned">Assigned</label>&nbsp;
                        <input type="checkbox" id="in-progress" class="ml-2 mr-2"><label for="in-progress">In Progress</label>&nbsp;
                        <input type="checkbox" id="completed" class="ml-2 mr-2"><label for="completed">Completed</label>
                    </p>    
            </fieldset>
        </div>

        <div>
            <div>
                <div class="flex flex-col md:mx-6 lg:mx-6">
                    <div class="overflow-x-auto  sm:-mx-6 lg:-mx-6">
                        <div class="inline-block min-w-full py-2 ">
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
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="checkbox" /></td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841">1141 R. Roberts</a>
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">10:47am</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                <select name="pickupSource">
                                                    <option value="Kent">Ken *</option>
                                                    <option value="Drew">Drew</option>
                                                    <option value="MAC1">MAC1</option>
                                                    <option value="EW">E/W *</option>
                                                </select>
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
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]"><input type="checkbox"  /></td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">
                                                <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308962111649" target="blank">1140 D. Tostenson</a>
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">9:38am</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">ASAP</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">$92.00</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">$31.50</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">
                                                <select name="pickupSource">
                                                    <option value="Kent">Ken *</option>
                                                    <option value="Drew">Drew</option>
                                                    <option value="MAC1">MAC1</option>
                                                    <option value="EW">E/W *</option>
                                                </select>
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">$16.98</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]"><input type="text" size="4" /></td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]"><input type="text" size="4" /></td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">
                                                <select name="drive2-1">
                                                    <option value="3rd P" selected>3rd P</option>
                                                    <option value="Kent">Ken</option>
                                                    <option value="Drew">Drew</option>
                                                    <option value="MAC1">MAC1</option>
                                                    <option value="Pool">Pool</option>
                                                    <option value="None">None</option>
                                                </select>
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">
                                                <select name="drive2-2">
                                                    <option value="3rd P">3rd P</option>
                                                    <option value="Kent">Ken</option>
                                                    <option value="Drew">Drew</option>
                                                    <option value="MAC1">MAC1</option>
                                                    <option value="Pool">Pool</option>
                                                    <option value="None" selected>None</option>
                                                </select>
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]">
                                                <select name="drive2-3">
                                                    <option value="3rd P">3rd P</option>
                                                    <option value="Kent">Ken</option>
                                                    <option value="Drew">Drew</option>
                                                    <option value="MAC1">MAC1</option>
                                                    <option value="Pool">Pool</option>
                                                    <option value="None" selected>None</option>
                                                </select>
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#fdfecb]"><a href={"#"}><input type="checkbox" class="ml-6"/></a></td>
                                                    </tr>
                                                    <tr class="border-b dark:border-neutral-500">
                                                        <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]"><input type="checkbox" /></td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                <a href="https://moonshotdelivers.myshopify.com/admin/orders/5308973383841" target="blank">1141 R. Roberts</a>
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">10:47am</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">ASAP</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$30.00</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">$13.50</td>
                                            <td class="whitespace-nowrap px-3 py-2 text-black bg-[#ccfecb]">
                                                <select name="pickupSource">
                                                    <option value="Kent">Ken *</option>
                                                    <option value="Drew">Drew</option>
                                                    <option value="MAC1">MAC1</option>
                                                    <option value="EW">E/W *</option>
                                                </select>
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
                                                <a href={"#"}><input type="checkbox" class="ml-6
                                                    "/></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tr>
                                        <td colspan="14" style="text-align:center;">
                                            <!-- <input type="Submit" class="border m-1 p-1" value="Dispatch Selected Orders"> -->
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
            
            <div class="">
                <h3 class="text-xl font-bold">Create Manual Order</h3>       
                <fieldset class="p-3 border border-black w-full">
                    <legend class="text-lg font-bold">Options</legend>
                    Delay Marketplace Orders Until Internal Drivers Have Answered 
                    <input type="checkbox" id="holdMarketplaceUntilDriversRespond" value="y" checked />
                    <br />
                    Create As Batch Order For Marketplace Orders
                    <input type="checkbox" id="holdMarketplaceUntilDriversRespond" value="y" checked />
                </fieldset>`
            </div>
            <div>
                <fieldset class="p-3 border border-black w-full">
                    <legend class="text-xl font-bold" >Ken</legend>
                    <h4>Address for Pickup</h4>
                    <select class="text-black rounded mb-2 p-1 w-56 border border-black w-1/5" name="kenPickupAddress">
                        <option value="935 Rev Dr Enoch Jones Blvd">935 Rev Dr Enoch Jones Blvd Nashville, TN 37208</option>
                        <option value="3445 Lebanon Pike">3445 Lebanon Pike Old Hickory TN</option>
                        <option value="Other (Enter Below)">Other(Enter Below)</option>
                    </select>
                    <p><input class="text-black rounded mb-1 p-1 border border-black w-2/5" type="text" id="kenPickupAddressCustom" />
                    <h4>Phone Number</h4>
                    <p><input class="text-black rounded mb-1 p-1 border border-black w-1/5" type="text" size="10" id="kenPickupPhone" value="(615) 447-8467" />
                    <h4>Pickup Instructions</h4>
                    <textarea
                    class="peer block min-h-[auto] w-2/5 rounded border border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message">IMPORTANT PLEASE READ: Address given is for the parking lot where we park our white Ford Transit van. It has a black metal fence. Text when you get here and we'll hand the order off to you. Pickup contact is Ken.
                    </textarea>
                    <br />
                    Send Confirmation/ETA Text to Market Drivers? Y 
                    <input type="checkbox" id="holdMarketplaceUntilDriversRespond" value="y" checked /> 
                    <br />
                    Send Any Location Photos to Market Drivers? Y 
                    <input type="checkbox" id="holdMarketplaceUntilDriversRespond" value="y" checked /> 
                    <br />
                    Send Vehicle Photo to Market Drivers? Y
                    <input type="checkbox" id="holdMarketplaceUntilDriversRespond" value="y" checked /> 
                </fieldset>
            </div>
            <fieldset class="p-3 border border-black w-full">
            <legend class="text-xl font-bold">Drew</legend>
            <h4>Address for Pickup</h4>
            <select class="text-black border border-black rounded mb-2 p-1 outline-none  max-w-fit" name="drewPickupAddress">
                <option value="600 Broadway">600 Broadway</option>
                <option value="123 Main St">123 Main St</option>
                <option value="Other (Enter Below)">Other (Enter Below)</option>
            </select>
            <p><input class="text-black rounded mb-1 p-1 border border-black " type="text" id="drewPickupAddressCustom" />
            <h4>Phone Number</h4>
            <p><input class="text-black rounded mb-1 p-1 border border-black" type="text" size="10" id="drewPickupPhone" value="(615) 613-4766" />
            <h4>Pickup Instructions</h4>
            <textarea
            class="peer block min-h-[auto] w-2/5 rounded border border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"> IMPORTANT PLEASE READ: Pull into front valet area and go inside.</textarea>
            <br />
            Send Confirmation/ETA Text to Market Drivers?
            Y <input type="checkbox" id="holdMarketplaceUntilDriversRespond" value="y" checked /> 
            <br />
            Send Any Location Photos to Market Drivers?
            Y <input type="checkbox" id="holdMarketplaceUntilDriversRespond " value="y" checked /> 
            <br />
            Send Vehicle Photo to Market Drivers?
            Y <input type="checkbox" id="holdMarketplaceUntilDriversRespond" value="y" checked /> 
            </fieldset>
            <p>
                <input class="text-black bg-gray-300 mt-3 mb-3 border border-black hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="submit" value="Create Delivery Order Batch" />
            </p>
        </div>
    </div>
</div>