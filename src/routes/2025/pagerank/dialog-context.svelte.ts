import { setContext, getContext } from "svelte";

const key = Symbol('dialog-context');

class DialogContext {
	isOpen = $state(false);
	isCorrect = $state(false);
	message = $state('')
}

const setDialogContext = () => {
	const context = new DialogContext();
	setContext(key, context);
	return context;
};

const getDialogContext = () => {
	return getContext<DialogContext>(key);
};

export { setDialogContext, getDialogContext };
