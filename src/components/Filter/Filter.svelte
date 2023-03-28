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
    function MapFilter(){
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
<div>
    <fieldset class='p-3 border border-black mt-28'>
        <legend class="text-lg font-bold" >Map Options</legend>
            <p class="mb-1.5 "><span>Layers</span>
                <input type="radio" id="drivers" class="ml-2 mr-2" name="mapvalue"  value="in-progress" on:click={()=>{MapFilter()}}/><label for="drivers">  Drivers </label>&nbsp;
                <input type="radio" id="pickup" class="ml-2 mr-2" name="mapvalue" value="in-progress-path" on:click={()=>{MapFilter()}}/><label for="Driver">  Driver Paths  </label>&nbsp;
                <input type="radio" id="orders" class="ml-2 mr-2" name="mapvalue" value="all" on:click={()=>{MapFilter()}}><label for="orders">  Orders  </label>&nbsp;
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