
// Default Value of iphone
const iphonePrice = 1219;
document.getElementById('iphone-price').innerText = '$' + iphonePrice

// Default Value of iphone case
const casePrice = 59;
document.getElementById('case-price').innerText = '$' + casePrice

// Default Value of Subtotal
document.getElementById('subTotal').innerText = '$' + (iphonePrice + casePrice);



// Function for Increment & Decrement
function handelCounting(isIncrement, product, price) {
    // Getting Value of input
    valueCount = getInputValue(product);
    // Increment Decrement Condition Check
    if (isIncrement == true) {
        valueCount++
    }
    if (isIncrement == false && valueCount > 1) {
        valueCount--
    }
    document.getElementById(product + '-value-count').value = valueCount;
    // Multiply by count number with single price
    const totalPrice = valueCount * price;
    document.getElementById(product + '-price').innerText = '$' + totalPrice;
    
    totalCalculation();
}

function totalCalculation() {
    const iphoneCount = getInputValue('iphone');
    const caseCount = getInputValue('case');
    const subTotal = (iphoneCount * iphonePrice) + (caseCount * casePrice);
    document.getElementById('subTotal').innerText = '$' + subTotal;

    const tax = Math.round((5 / 100) * subTotal);
    document.getElementById('tax').innerText = '$' + tax;

    const total = tax + subTotal;
    document.getElementById('total').innerText = '$' + total;
}

function getInputValue(product){
    const productCount = parseFloat(document.getElementById(product + '-value-count').value);
    return productCount;
}


// access ( iphone ) plus button
document.querySelector('.iphone-plus').addEventListener('click', function () {
    handelCounting(true, 'iphone', iphonePrice)

})

// access ( iphone ) minus button
document.querySelector('.iphone-minus').addEventListener('click', function () {
    handelCounting(false, 'iphone', iphonePrice)

})

// access ( case ) plus button
document.querySelector('.case-plus').addEventListener('click', function () {
    handelCounting(true, 'case', casePrice)

})

// access ( case ) minus button
document.querySelector('.case-minus', casePrice).addEventListener('click', function () {
    handelCounting(false, 'case', casePrice)

})



