export function trimText(text, length) {
  const textSplit = text.split(" ");
  return textSplit.length > length
    ? textSplit.slice(0, length).join(" ") + "..."
    : text;
}
