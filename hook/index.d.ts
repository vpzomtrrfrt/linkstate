export default function useLinkState<T, TEvent extends Event = Event>(
	initialState: T,
	eventPath?: string,
): [T, (e: TEvent) => void, (newValue: T) => void];
