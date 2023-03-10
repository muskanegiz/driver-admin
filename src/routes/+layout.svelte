<script>
	import '../app.css';
	import '../tailwind.css';
	import { browser } from '$app/environment';
	let authToken = browser && localStorage.getItem("token");
	console.log("token"+authToken);
</script>

<div class="app">

			<main>
				<slot />
			</main>
		
</div>
