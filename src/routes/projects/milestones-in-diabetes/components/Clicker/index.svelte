<script>
	let count = 1;

	let increment = () => (count += 1);
</script>

<button on:click={increment}>Count is {count}</button>
