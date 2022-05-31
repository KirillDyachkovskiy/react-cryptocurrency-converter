function roundNumber(num: number, scale = 3) {
  return num.toLocaleString('ru', {
    minimumFractionDigits: scale,
    maximumFractionDigits: scale,
  });
}

export default roundNumber;
