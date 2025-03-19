export function camelCaseToKebabCase(str: string) {
  return str
    .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
    .toLowerCase();
}
