<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    // @ts-ignore
   
    function statusFilter() {
    var checkboxes = document.getElementsByName('filterValue');
    // @ts-ignore
    var values = [];
    for(var i=0; checkboxes[i]; ++i){
      // @ts-ignore
      if(checkboxes[i].checked){
        // @ts-ignore
        values.push(checkboxes[i].value);
      }
    } 
    dispatch('message', {  
        text: values
        });        
    }  
   
  // @ts-ignore
  /**
     * @type {string | any[]}
     */
  let values=[];
    // @ts-ignore
    function MapFilter(id){
            var currentId = document.getElementById(id);
            // @ts-ignore
            currentId.checked = true;
            let ch = document.getElementsByClassName("myCheckbox");
            for(let i=0; i<ch.length; i++){
                // @ts-ignore
                if(ch.item(i).getAttribute("id")==id){
                    // @ts-ignore
                    ch.item(i).checked = true;
                }else{
                    // @ts-ignore
                    ch.item(i).checked = false;
                }
            }
            // @ts-ignore
            var mapboxes= document.getElementsByName("mapvalue");
            var newvalue=[];
            for(var i=0; mapboxes[i]; ++i){
            // @ts-ignore
                if(mapboxes[i].checked){
                    // @ts-ignore
                    newvalue.push(mapboxes[i].value);
                    values=newvalue;

                }
            } 
            dispatch('data', {  
                mapvalue: newvalue
            });        
    }
         
</script>
<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-28"
>
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full max-w-full flex-grow flex-1">
                <fieldset class='p-3 border border-black mt-28 m-3'>
                    <legend class="text-lg font-bold" >Map Options</legend>
                        <p class="mb-1.5 "><span>Layers</span>
                            <input type="checkbox" id="driver" class="ml-2 mr-2 myCheckbox" name="mapvalue"  value="in-progress" on:click={()=> MapFilter("driver")}/><label for="drivers">  Drivers </label>&nbsp;
                            <input type="checkbox" id="path" class="ml-2 mr-2  myCheckbox" name="mapvalue" value="in-progress-path" on:click={()=>{MapFilter("path")}}/><label for="Driver">  Driver Paths  </label>&nbsp;
                            <input type="checkbox" id="order" class="ml-2 mr-2  myCheckbox" name="mapvalue" value="all" on:click={()=>{MapFilter("order")}}><label for="orders">  Orders  </label>&nbsp;
                        </p>
                        <hr class="border-black mb-2 w-full">
                        <p class="mb-1.5 "><span>Show:</span>
                            <input type="checkbox" id="unassigned" name = "filterValue" value="pending"  on:click={()=>{statusFilter()}} class="ml-2 mr-2"/><label for="unassigned">Unassigned</label>&nbsp;
                            <input type="checkbox" id="assigned" name = "filterValue"  value="in-progress" on:click={()=>{statusFilter()}}  class="ml-2 mr-2"/><label for="assigned">Assigned</label>&nbsp;
                            <input type="checkbox" id="in-progress" name = "filterValue" value="picked-up" on:click={()=>{statusFilter()}} class="ml-2 mr-2"><label for="in-progress">In Progress</label>&nbsp;
                            <input type="checkbox" id="completed" name = "filterValue" value="delivered" on:click={()=>{statusFilter()}} class="ml-2 mr-2"><label for="completed">Completed</label>
                        </p>    
                </fieldset>
            </div>
        </div>
    </div>
</div>
    