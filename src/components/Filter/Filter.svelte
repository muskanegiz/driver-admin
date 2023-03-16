<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
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
        // console.log(values);
    }
    // @ts-ignore
   
</script>
<div>
    <fieldset class='p-3 border border-black mt-28'>
        <legend class="text-lg font-bold" >Map Options</legend>
            <p class="mb-1.5 "><span>Layers</span>
                <input type="checkbox" id="drivers" class="ml-2 mr-2" checked/><label for="drivers">  Drivers </label>&nbsp;
                <input type="checkbox" id="Driver" class="ml-2 mr-2" checked/><label for="Driver">  Driver Paths  </label>&nbsp;
                <input type="checkbox" id="orders" class="ml-2 mr-2" checked><label for="orders">  Orders  </label>&nbsp;
            </p>
            <hr class="border-black mb-2 w-full">
            <p class="mb-1.5 "><span>Show:</span>
                <input type="checkbox" id="unassigned" name = "filterValue" value="unassign"  on:click={()=>{statusFilter()}} class="ml-2 mr-2"/><label for="unassigned">Unassigned</label>&nbsp;
                <input type="checkbox" id="assigned" name = "filterValue"  value="assign" on:click={()=>{statusFilter()}}  class="ml-2 mr-2"/><label for="assigned">Assigned</label>&nbsp;
                <input type="checkbox" id="in-progress" name = "filterValue"value="inprogress" on:click={()=>{statusFilter()}} class="ml-2 mr-2"><label for="in-progress">In Progress</label>&nbsp;
                <input type="checkbox" id="completed" name = "filterValue" value="Y" on:click={()=>{statusFilter()}} class="ml-2 mr-2"><label for="completed">Completed</label>
            </p>    
    </fieldset>
</div>