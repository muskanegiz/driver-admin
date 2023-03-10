<script>
  // core components
  import CardLineChart from "../../components/Cards/CardLineChart.svelte";
  import CardBarChart from "../../components/Cards/CardBarChart.svelte";
  import CardPageVisits from "../../components/Cards/CardPageVisits.svelte";
  import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.svelte";
  import AllHeader from "../../components/Headers/AllHeader.svelte";
  import Sidebar from "../../components/Sidebar/Sidebar.svelte";
  import AdminNavbar from "../../components/Navbars/AdminNavbar.svelte";
</script>

<div>
  <Sidebar/>
  <div class="relative md:ml-64 bg-blueGray-100">
		<AdminNavbar />
    <AllHeader/>
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
	
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardLineChart />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardBarChart />
    </div>
  </div>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardPageVisits />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardSocialTraffic />
    </div>
  </div>
</div>
</div>
</div>