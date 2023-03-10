<script>
import { onMount } from 'svelte';

let users = [];
let input = '';

$: filteredUsers = users.filter(u => 
	u.name.toLowerCase().includes(input.toLowerCase())
)

onMount(async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	users = await res.json();
});
</script>

<main>
	<input type="text" bind:value={input}>

	<ul>
		{#each filteredUsers as user}
		<li>{user.name}</li>
		{/each}
	</ul>
</main>

