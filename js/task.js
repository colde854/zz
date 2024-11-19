function checkFit() {
    let diameter = parseFloat(document.getElementById('diameter').value);
    let width = parseFloat(document.getElementById('width').value);
    let resultElement = document.getElementById('result');

    if (isNaN(diameter) || isNaN(width) || diameter <= 0 || width <= 0) {
        resultElement.innerText = "Введите корректные значения для D и A.";
        resultElement.style.color = "red";
        return;
    }

    const diagonal = width * Math.sqrt(2);

    if (diagonal <= diameter) {
        resultElement.innerText = "Да, можно выпилить брус.";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "Нет, брус не поместится.";
        resultElement.style.color = "red";
    }
}