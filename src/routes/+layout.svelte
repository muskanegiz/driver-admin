<script>

	import '../app.css';
	import '../tailwind.css';
	import { browser } from '$app/environment';

	 // components for this layout
	import AdminNavbar from "../components/Navbars/AdminNavbar.svelte";
	import HeaderStats from "../components/Headers/HeaderStats.svelte";
	import FooterAdmin from "../components/Footers/FooterAdmin.svelte";
	// export let location;

	let authToken = browser && localStorage.getItem("token");
	console.log(authToken);
	
</script>

<div class="app">
	{#if authToken}
	<div class="relative md:ml-64 bg-blueGray-100">
		<AdminNavbar />
		<HeaderStats />
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
			<main>
				<slot />
			</main>
		<FooterAdmin />
		</div>
	</div>
	{:else} 
		<main>
			<slot />
		</main>
	{/if}	
</div>
