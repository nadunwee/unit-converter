let valuePara = document.getElementById('value');
let lengthValue = document.getElementById('length-values');
let volumeValue = document.getElementById('volume-values');
let massValue = document.getElementById('mass-values');

function getValue() {
  const mainValue = document.getElementById('textInput').value;
  
  
  lengthValue.innerHTML = `${mainValue} meters = ${(mainValue * 3.281).toFixed(2)} feet | ${mainValue} feet = ${(mainValue / 3.281).toFixed(2)} meters`;
  volumeValue.innerHTML = `${mainValue} liters = ${(mainValue / 3.785).toFixed(2)} gallons | ${mainValue} gallons = ${(mainValue * 3.785).toFixed(2)} liters`;
  massValue.innerHTML = `${mainValue} kilos = ${(mainValue * 2.205).toFixed(2)} pounds | ${mainValue} pounds = ${(mainValue / 2.205).toFixed(2)} kilos`;
}

