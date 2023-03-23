<script>
	import '../app.css';
	import '../tailwind.css';
	import { browser } from '$app/environment';
	import { goto } from "$app/navigation";
	let authToken = browser && localStorage.getItem("token");
	console.log("token"+authToken);
	if (authToken && authToken != null) {
		goto('/dashboard');
	} 
	if(authToken == null) {	
		goto('/auth/login');
	}
    
</script>

<div class="app">
			<main>
				<slot />
			</main>
		
</div>
