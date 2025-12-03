import { setContext, getContext } from "svelte";
import type { DrawFunction } from "$lib/types";

class CanvasContext {
	linkDrawFunctions: DrawFunction[] = $state([]);
	circleDrawFunctions: DrawFunction[] = $state([]);
	lineDrawFunctions: DrawFunction[] = $state([]);
	textDrawFunctions: DrawFunction[] = $state([]);
}

const setCanvasContext = (key: string) => {
	const context = new CanvasContext();
	setContext(`canvas-${key}`, context);
	return context;
};

const getCanvasContext = (key: string) => {
	return getContext<CanvasContext>(`canvas-${key}`);
};

export { setCanvasContext, getCanvasContext };
