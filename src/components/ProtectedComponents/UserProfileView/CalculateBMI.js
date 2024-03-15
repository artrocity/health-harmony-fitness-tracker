function calcBMI(height, weight) {
  const bmi = (weight / (height * height)) * 703;
  return bmi.toFixed(2);
}

export default calcBMI;
