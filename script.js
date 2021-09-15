function Converter() {
  const getInputValue = parseFloat(document.getElementById('input-num').value);
  const selected = document.getElementById('selected').value;
  const selectedOutput = document.getElementById('selected-output').value;

  function Currencies() {
      if (selected === 'brl' && selectedOutput === 'usd') {
        return getInputValue * 0.19;
      } else if (selected === 'brl' && selectedOutput === 'eur') {
        return getInputValue * 0.16;
      } else if (selected === 'usd' && selectedOutput === 'brl') {
        return getInputValue * 5.26;
      } else if (selected === 'usd' && selectedOutput === 'eur') {
          return getInputValue * 0.85;
      } else if (selected === 'eur' && selectedOutput === 'brl') {
        return getInputValue * 6.21;
      } else if (selected === 'eur' && selectedOutput === 'usd') {
        return getInputValue * 1.18;
      } else {
        return 'Please try a valid number!'
      }
  }

  document.getElementById('output-num').value = Currencies().toFixed(2);

}

// getting the information
// const inputNum = document.getElementById('input-num').value;
//
// const outputNum = document.getElementById('output-num');
//
// btn.addEventListener('click', () => {
//     outputNum.value = inputNum;
// })

