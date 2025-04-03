const convertToCelsius = function(celTemp) {
  let toCelsius = (celTemp - 32) * (5/9);
  let celRounded = Math.round(toCelsius * 10) / 10;
  return celRounded;
};

const convertToFahrenheit = function(farTemp) {
  let toFahrenheit = (farTemp * (9/5)) + 32;
  let fahRounded = Math.round(toFahrenheit * 10) / 10;
  return fahRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
