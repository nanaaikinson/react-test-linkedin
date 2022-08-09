import compact from "lodash/compact";

export const initialsGenerator = (str: string): string => {
  if (!str.toString()) return "";

  const exploded = str.split(" ");
  const arr = compact(exploded);
  if (arr.length > 1) {
    return `${arr[0].charAt(0)}${arr[1].charAt(0)}`;
  }
  return `${str.charAt(0)}${str.charAt(1)}`;
};
