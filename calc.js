window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const calculateButton = document.getElementById('calculate');
    const resultParagraph = document.getElementById('result');
 })

calculateButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const productPrice = parseFloat(productSelect.value);

    if (isNaN(quantity) || quantity <= 0) {
        displayError('Введите корректное количество');
        return;
    }

    if (isNaN(productPrice) || productPrice <= 0) {
        displayError('Выберите продукт');
        return;
    }

    const cost = quantity * productPrice;
    resultParagraph.textContent = `Цена заказа: ₽${cost.toFixed(2)}`;
});
function displayError(message) {
    resultParagraph.textContent = `Ошибка: ${message}`;
}
