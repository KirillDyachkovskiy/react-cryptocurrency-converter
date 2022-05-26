function getPercentageDiff(num: number, scale = 2) {
  const result = (num - 1).toLocaleString('en', {
    style: 'percent',
    minimumFractionDigits: scale,
    maximumFractionDigits: scale,
  });

  return num - 1 > 0 ? `+${result}` : result;
}

export default getPercentageDiff;
