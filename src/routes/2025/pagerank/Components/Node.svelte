<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		id: number;
		name: string;
		isActive?: boolean;
		onClick?: (id: number) => void;
		onMouseEnter?: (id: number) => void;
		onMouseLeave?: () => void;
		onDragStart?: (id: number, x: number, y: number) => void;
		onDrag?: (x: number, y: number) => boolean;
		onDragEnd?: (targetId: number | null) => void;
		classValue?: ClassValue;
	}

	let {
		id,
		name,
		isActive = false,
		onClick,
		onMouseEnter,
		onMouseLeave,
		onDragStart,
		onDrag,
		onDragEnd,
		classValue
	}: Props = $props();

	let isDragActive = $state(false);
	let dragStartPos = $state({ x: 0, y: 0 });

	const handlePointerDown = (event: PointerEvent) => {
		event.preventDefault();
		
		// Start potential drag
		const x = event.clientX;
		const y = event.clientY;
		
		dragStartPos = { x, y };
		onDragStart && onDragStart(id, x, y);
		
		// Capture pointer to track movement outside element
		(event.target as HTMLElement).setPointerCapture(event.pointerId);
		isDragActive = true;
		wasDragOperation = false; // Reset drag flag
	};

	const handlePointerMove = (event: PointerEvent) => {
		if (!isDragActive) return;
		
		event.preventDefault();
		const x = event.clientX;
		const y = event.clientY;
		
		// Update drag state and check if threshold exceeded
		const isDragging = onDrag && onDrag(x, y);
		
		// If we're dragging, check what's under the cursor for target detection
		if (isDragging) {
			const elementUnder = document.elementFromPoint(x, y);
			const nodeButton = elementUnder?.closest('button[data-node-id]');
			const targetId = nodeButton ? parseInt(nodeButton.getAttribute('data-node-id') || '', 10) : null;
			
			// Update mouse enter/leave for target highlighting during drag
			if (targetId !== null && targetId !== id && onMouseEnter) {
				onMouseEnter(targetId);
			} else if (targetId === null && onMouseLeave) {
				onMouseLeave();
			}
		}
	};

	const handlePointerUp = (event: PointerEvent) => {
		if (!isDragActive) return;
		
		event.preventDefault();
		
		// Check if we actually dragged (moved beyond threshold)
		const deltaX = event.clientX - dragStartPos.x;
		const deltaY = event.clientY - dragStartPos.y;
		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		const actuallyDragged = distance > 8; // Use same threshold as context
		
		isDragActive = false;
		
		// Only handle as drag if we actually moved beyond threshold
		if (actuallyDragged) {
			// Find the target node under the cursor
			const x = event.clientX;
			const y = event.clientY;
			const elementUnder = document.elementFromPoint(x, y);
			const nodeButton = elementUnder?.closest('button[data-node-id]');
			const targetId = nodeButton ? parseInt(nodeButton.getAttribute('data-node-id') || '', 10) : null;
			
			// End drag with target information
			onDragEnd && onDragEnd(targetId);
			
			// Set flag to prevent click event
			wasDragOperation = true;
		} else {
			// This was just a click, not a drag - don't call onDragEnd
			// Let the click handler deal with it
			wasDragOperation = false;
		}
		
		// Release pointer capture
		(event.target as HTMLElement).releasePointerCapture(event.pointerId);
	};

	// Track if this was a drag operation to prevent click after drag
	let wasDragOperation = $state(false);

	const handleClick = (event: MouseEvent) => {
		// Only trigger click if it wasn't a drag operation
		if (!wasDragOperation) {
			onClick && onClick(id);
		}
		// Reset the flag after handling click
		wasDragOperation = false;
	};
</script>

<button
	class={[isActive && 'active', classValue]}
	data-node-id={id}
	onclick={handleClick}
	onmouseenter={() => onMouseEnter && onMouseEnter(id)}
	onmouseleave={() => onMouseLeave && onMouseLeave()}
	onpointerdown={handlePointerDown}
	onpointermove={handlePointerMove}
	onpointerup={handlePointerUp}
	style="touch-action: none;"
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
