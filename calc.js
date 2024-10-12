const quantityInput = document.getElementById('quantity');
const productSelect = document.getElementById('product');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const productPrice = parseFloat(productSelect.value);
    const cost = quantity * productPrice;
    resultParagraph.textContent = `The cost of the order is: $${cost.toFixed(2)}`;
});