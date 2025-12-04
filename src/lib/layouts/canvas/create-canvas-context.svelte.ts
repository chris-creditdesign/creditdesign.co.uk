import { setContext, getContext } from "svelte";

type DrawFunction = (context: CanvasRenderingContext2D) => void;

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
