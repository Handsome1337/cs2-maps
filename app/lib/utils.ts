export function capitalize(string?: string) {
  if (string) return `${string[0].toUpperCase()}${string.slice(1)}`;
}
