function getPercentageDiff(num: number, scale = 2) {
  const result = (num / 100).toLocaleString('en', {
    style: 'percent',
    minimumFractionDigits: scale,
    maximumFractionDigits: scale,
  });

  return num > 0 ? `+${result}` : result;
}

export default getPercentageDiff;
