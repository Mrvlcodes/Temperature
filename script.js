// Get the input and output select elements
const inputScale = document.getElementById("input-scale");
const outputScale = document.getElementById("output-scale");

// Define the conversion functions
function celsiusToFahrenheit(value) {
  return value * 1.8 + 32;
}

function celsiusToKelvin(value) {
  return value + 273.15;
}

function fahrenheitToCelsius(value) {
  return (value - 32) / 1.8;
}

function fahrenheitToKelvin(value) {
  return (value + 459.67) * 5 / 9;
}

function kelvinToCelsius(value) {
  return value - 273.15;
}

function kelvinToFahrenheit(value) {
  return value * 9 / 5 - 459.67;
}

// Define the conversion function map
const conversionFunctions = {
  C: {
    C: (value) => value,
    F: celsiusToFahrenheit,
    K: celsiusToKelvin,
  },
  F: {
    C: fahrenheitToCelsius,
    F: (value) => value,
    K: fahrenheitToKelvin,
  },
  K: {
    C: kelvinToCelsius,
    F: kelvinToFahrenheit,
    K: (value) => value,
  },
};

// Add an event listener to the convert button
document.getElementById("convert-btn").addEventListener("click", () => {
  // Get the input value and scales
  const value = parseFloat(document.getElementById("value").value);
  const inputScaleValue = inputScale.value;
  const outputScaleValue = outputScale.value;

  // Convert the temperature
  const result = conversionFunctions[inputScaleValue][outputScaleValue](value);

  // Display the result
  document.getElementById("result").textContent = `${value} ${inputScaleValue} = ${result} ${outputScaleValue}`;
});