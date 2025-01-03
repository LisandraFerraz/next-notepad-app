export function shortenText(text: string, size: number) {
  let new_txt = text?.length >= size ? text.slice(0, size) + "..." : text;
  return new_txt;
}
