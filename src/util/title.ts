export function shorthenTitle(title: string) {
  return title.length > 50 ? `${title.slice(0, 50)}...` : title
}
