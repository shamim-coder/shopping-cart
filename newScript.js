// another way

function quantityHandler(product, price, isIncrement) {
    const quantityValues = document.getElementById(product + "-qnt-number");
    let quantityNumber = parseInt(quantityValues.value);
    if (isIncrement) {
        quantityNumber++;
    } else if (quantityNumber > 0) {
        quantityNumber--;
    }
    quantityValues.value = quantityNumber;
    const total = document.getElementById(product + "-price");
    total.innerText = quantityNumber * price;

    calculateTotalPrice();
}

function getInputValue(product) {
    const quantityInput = document.getElementById(product + "-qnt-number");
    const quantityNumber = parseFloat(quantityInput.value);
    return quantityNumber;
}

function calculateTotalPrice() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;

    const subTotal = caseTotal + phoneTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;
}

document.getElementById("phone-increment").addEventListener("click", () => {
    quantityHandler("phone", 1219, true);
});

document.getElementById("phone-decrement").addEventListener("click", () => {
    quantityHandler("phone", 1219, false);
});

document.getElementById("case-increment").addEventListener("click", () => {
    quantityHandler("case", 59, true);
});

document.getElementById("case-decrement").addEventListener("click", () => {
    quantityHandler("case", 59, false);
});

document.getElementById("remove-item").addEventListener("click", () => {
    document.getElementById("cart-item").style.display = "none";
    const subTotal = document.getElementById("sub-total");
    const subTotalValue = parseFloat(subTotal.innerText);
    const phoneTotal = document.getElementById("phone-price");
    const phoneNumber = parseFloat(phoneTotal.innerText);
    subTotal.innerText = subTotalValue - phoneNumber;
});

const deleteButtons = document.getElementsByClassName("remove-item");
for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", () => {});
}
