export const strToHex = (str: string): string => {
  const hex = str
    .split('')
    .map((char) => char.charCodeAt(0).toString(16))
    .join('');

  return hex;
};

export const strToHexColor = (str: string): string => {
  const hex = strToHex(str).slice(0, 6).padStart(6, '0');

  return `#${hex}`;
};
