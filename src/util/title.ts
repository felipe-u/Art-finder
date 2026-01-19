export function shorthenTitle(title: string) {
  return title.length > 50
    ? title.split('').splice(0, 50).join('').concat('...')
    : title
}
