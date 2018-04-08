export function normal(str: string, fill: string = ' '): string {
  return str.replace(/([A-Z][a-z]|[0-9][a-zA-Z])/g, ' $1')
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
  .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
  .replace(/([\W|_]+)/g, ' ')
  .trim()
  .replace(/\s+/g, fill);
}

export function lower(str: string, fill: string = ' '): string {
  return normal(str, fill).toLowerCase();
}

export function upper(str: string, fill: string = ' '): string {
  return normal(str, fill).toUpperCase();
}

export function capital(str: string, fill: string = ' '): string {
  return lower(str, ' ').split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ').replace(/\s+/g, fill);
}

export function camel(str: string): string {
  str = capital(str, '');
  return str[0].toLowerCase() + str.substr(1);
}

export function pascal(str: string): string {
  return capital(str, '');
}

export function kebab(str: string): string {
  return lower(str, '-');
}

export function snake(str: string): string {
  return lower(str, '_');
}
