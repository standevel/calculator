function clearScreen() {
    document.getElementById('result').value = '';
}

function display(input) {
    document.querySelector('input').value += input;
}

const solve = () => {
    const input = document.getElementById('result');
    const inputVal = input.value;
    const result = eval(inputVal);
    input.value = result;

}

function square() {
    const x = document.getElementById('result').value;
    document.getElementById('result').value = Math.pow(x, 2);
}

function sqrt() {
    const x = document.getElementById('result').value;
    document.getElementById('result').value = Math.sqrt(x);
}
function del() {
    const input = document.getElementById('result')
    const value = input.value;
    const newVal = value.substr(0, value.length - 1);
    input.value = newVal;
}