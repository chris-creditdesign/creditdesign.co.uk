<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		id: number;
		name: string;
		isActive?: boolean;
		onClick?: (id: number) => void;
		onMouseEnter?: (id: number) => void;
		onMouseLeave?: () => void;
		classValue?: ClassValue;
	}

	let {
		id,
		name,
		isActive = false,
		onClick,
		onMouseEnter,
		onMouseLeave,
		classValue
	}: Props = $props();
</script>

<button
	class={[isActive && 'active', classValue]}
	onclick={() => onClick && onClick(id)}
	onmouseenter={() => onMouseEnter && onMouseEnter(id)}
	onmouseleave={() => onMouseLeave && onMouseLeave()}
>
	{name}
</button>

<style>
	button {
		width: calc(var(--radius) * 2px);
		height: calc(var(--radius) * 2px);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-size: cover;
		border-width: 4px;
		border-color: var(--group-border-color, #000);
		border-style: solid;
		background-color: var(--group-background-color, #fff);
		transition:
			scale 0.3s ease,
			transform 0.3s ease;

		&:hover {
			scale: 1.2;
		}

		&.e-position-absolute {
			position: absolute;
			top: calc(var(--top) * 1px);
			left: calc(var(--left) * 1px);
			transform: translate(calc(var(--radius) * -1px), calc(var(--radius) * -1px));

			&:hover {
				transform: translate(calc(var(--radius) * -0.83333px), calc(var(--radius) * -0.83333px));
			}
		}

		&.active {
			animation: pulse 1s infinite;
		}
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--group-background-color, #fff);
		}

		100% {
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}
	}
</style>
