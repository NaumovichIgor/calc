const quantityInput = document.getElementById('quantity');
const productSelect = document.getElementById('product');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');
function onClick(event) {
    event.preventDefault();
    alert("click");
 }
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
     let b = document.getElementById("my-button");
    b.addEventListener("click", onClick);
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
