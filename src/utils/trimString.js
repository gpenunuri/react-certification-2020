const trimString = (string, charsLimit) => {
  if (string.length <= charsLimit) return string;
  let trimmedString = string.substring(0, charsLimit);
  return `${trimmedString}...`;
};

export default trimString;
