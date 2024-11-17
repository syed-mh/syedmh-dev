export const getReadingTime = (seconds: number): string => {
  if (seconds < 0) {
    throw new Error("Seconds cannot be negative");
  }

  const minutes = Math.ceil(seconds / 60);

  return `${minutes} minute read`;
};
