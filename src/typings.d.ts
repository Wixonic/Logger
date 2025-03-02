declare module "@wixonic/logger" {
	export interface Logger {
		debug(...args: any[]): void;
		error(...args: any[]): void;
		info(...args: any[]): void;
		warn(...args: any[]): void;
		displayDate: boolean;
	}

	export const colors: {
		reset: string;
		bright: string;
		dim: string;
		underscore: string;
		blink: string;
		reverse: string;
		hidden: string;
		black: string;
		red: string;
		green: string;
		yellow: string;
		blue: string;
		magenta: string;
		cyan: string;
		white: string;
		debug: string;
		error: string;
		info: string;
		warn: string;
		regexp: RegExp;
	};

	export const log: Logger;

	export function rawLog(level: string, color: string, ...args: any[]): void;
};