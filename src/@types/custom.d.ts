declare module '*.png' {
	const content: string;
	export default content;
}
declare module '*.jpg' {
	const content: string;
	export default content;
}
declare module '*.jpeg' {
	const content: string;
	export default content;
}
declare module '*.gif' {
	const content: string;
	export default content;
}
declare module '*.svg' {
	const content: string;
	export default content;
}
declare module '*.mp4' {
	const content: string;
	export default content;
}

declare global {
	interface Window {
		IMP: string;
	}
}

const IMP = Window.IMP || null;
