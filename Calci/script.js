function addInput(input) {
    document.getElementById('display').value += input;
  }
  
  function clearInput() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  }
  