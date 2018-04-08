export as namespace CakeCase;

/**
 * Converts string to normal text. e.g. 'HelloWorld' -> 'Hello World'
 *
 * @export
 * @param {string} str
 * @param {string} [fill=' '] The string that fill to between words.
 * @returns {string}
 */
export function normal(str: string, fill?: string): string;

/**
 * Converts string to lowercase text. e.g. 'HelloWorld' -> 'hello world'
 *
 * @export
 * @param {string} str
 * @param {string} [fill=' '] The string that fill to between words.
 * @returns {string}
 */
export function lower(str: string, fill?: string): string;

/**
 * Converts string to uppercase text. e.g. 'hello_world' -> 'HELLO WORLD'
 *
 * @export
 * @param {string} str
 * @param {string} [fill=' '] The string that fill to between words.
 * @returns {string}
 */
export function upper(str: string, fill?: string): string;

/**
 * Converts string to capitalized text. e.g. 'hello_world' ->'Hello World'
 *
 * @export
 * @param {string} str
 * @param {string} [fill=' ']
 * @returns {string}
 */
export function capital(str: string, fill?: string): string;

/**
 * Converts to camelCase.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function camel(str: string): string;

/**
 * Converts to PascalCase.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function pascal(str: string): string;

/**
 * Converts to kebab-case.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function kebab(str: string): string;

/**
 * Converts to snake_case.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function snake(str: string): string;
