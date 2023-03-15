let input = '';

function add_element(value) {
  input += value;
  document.getElementById('screen').value = input;
}

function clearInput() {
  input = '';
  document.getElementById('screen').value = input;
}

function calculate() {
  let result = eval(input);
  document.getElementById('screen').value = result;
}
