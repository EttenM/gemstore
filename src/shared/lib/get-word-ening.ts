export const getWordEnding = (length: number) => {
  if (length === 1) {
    return "";
  } else if (length >= 2 && length <= 4) {
    return "а";
  }
  return "ов";
};
