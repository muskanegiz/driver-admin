<script>
    import Table from "../../components/Table/+page.svelte";
    import Filter from "../../components/Filter/Filter.svelte";
    import Sidebar from "../../components/Sidebar/Sidebar.svelte";
    import MapExample from "../../components/Maps/MapExample.svelte";
    import DispatcherNavbar from "../../components/Navbars/DispatcherNavbar.svelte";
    import Header from "../../components/Headers/HeaderStats.svelte";
</script>
    <Sidebar></Sidebar>
    <div class="relative md:ml-64 bg-blueGray-100">
		<DispatcherNavbar />
        <Header/>
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
            <Filter/>
            <MapExample/>
            <Table/>
        </div>
    </div>
