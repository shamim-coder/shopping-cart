
// Set Minus Btn Default Disable
// document.querySelector('.iphone-minus').setAttribute('disabled', 'disabled')
// document.querySelector('.iphone-minus').setAttribute('disabled', 'disabled')

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









// // taking price input value
// let iphonePrice = parseFloat(document.getElementById('iphone-price').innerText);
// let casePrice = parseFloat(document.getElementById('case-price').innerText);
// document.getElementById('subTotal').innerText = iphonePrice+casePrice;

// // Taking Value to increment decrement input value
// let valueCount = 0;
// let iphoneTotalPrice = 0;
// let caseTotalPrice = 0;
// let subtotal = 0;

// function totalPriceCalculateCase(){
//     // Multiply by count value with price
//     caseTotalPrice = casePrice * valueCount;
//     // Setting price input value 
//     document.getElementById('case-price').innerText = caseTotalPrice;
// }

// // function for calculate total price of count
// function totalPriceCalculate(){
//     // Multiply by count value with price
//     iphoneTotalPrice = iphonePrice * valueCount;
//     // Setting price input value 
//     document.getElementById('iphone-price').innerText = iphoneTotalPrice;
// }

// function subtotalPriceCalculate(){
//     // Sum Total price of all products
//     subTotal = iphoneTotalPrice + caseTotalPrice;
//     document.getElementById('subTotal').innerText = subTotal;
// }

// // Increment
// document.querySelector('.iphone-plus').addEventListener('click', function(){

//     // Getting Value of input
//     valueCount = document.getElementById('iphone-value-count').value;

//     // Value Increment by 1
//     valueCount++;

//     console.log(valueCount);

//     // Setting increment input value 
//     document.getElementById('iphone-value-count').value = valueCount;

//     totalPriceCalculate()
//     subtotalPriceCalculate()

//     if(valueCount > 1){
//         document.querySelector('.iphone-minus').removeAttribute('disabled', 'disabled')
//     }
// })

// // Decrement
// document.querySelector('.iphone-minus').addEventListener('click', function(){

//     // Getting Value of input
//     valueCount = document.getElementById('iphone-value-count').value;

//     // Value Increment by 1
//     valueCount--;

//     // Setting increment input value 
//     document.getElementById('iphone-value-count').value = valueCount;

//     totalPriceCalculate()
//     subtotalPriceCalculate()

//     if(valueCount == 1){
//         document.querySelector('.iphone-minus').setAttribute('disabled', 'disabled')
//     }
// })


// // Case Increment
// document.querySelector('.case-plus').addEventListener('click', function(){

//     // Getting Value of input
//     valueCount = document.getElementById('case-value-count').value;

//     // Value Increment by 1
//     valueCount++;

//     // Setting increment input value 
//     document.getElementById('case-value-count').value = valueCount;

//     totalPriceCalculateCase()
//     subtotalPriceCalculate()

//     if(valueCount > 1){
//         document.querySelector('.case-minus').removeAttribute('disabled', 'disabled')
//     }
// })


// // Case Increment
// document.querySelector('.case-minus').addEventListener('click', function(){

//     // Getting Value of input
//     valueCount = document.getElementById('case-value-count').value;

//     // Value Increment by 1
//     valueCount--;

//     // Setting increment input value 
//     document.getElementById('case-value-count').value = valueCount;

//     totalPriceCalculateCase()
//     subtotalPriceCalculate()

//     if(valueCount == 1){
//         document.querySelector('.case-minus').setAttribute('disabled', 'disabled')
//     }
// })






