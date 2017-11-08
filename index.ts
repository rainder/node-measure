export function measure(): () => number {
  const timeStart = process.hrtime();

  return () => {
    const timeDiff = process.hrtime(timeStart);

    return timeDiff[0] + (timeDiff[1] / 1e9);
  };
}
