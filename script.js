// // Set Minus Btn Default Disable
document.querySelector('.iphone-minus').setAttribute('disabled', 'disabled')
document.querySelector('.case-minus').setAttribute('disabled', 'disabled')


// taking price input value
let iphonePrice = parseFloat(document.getElementById('iphone-price').innerText);
let casePrice = parseFloat(document.getElementById('case-price').innerText);
document.getElementById('subTotal').innerText = iphonePrice+casePrice;

// Taking Value to increment decrement input value
let valueCount = 0;
let iphoneTotalPrice = 0;
let caseTotalPrice = 0;
let subtotal = 0;

function totalPriceCalculateCase(){
    // Multiply by count value with price
    caseTotalPrice = casePrice * valueCount;
    // Setting price input value 
    document.getElementById('case-price').innerText = caseTotalPrice;
}

// function for calculate total price of count
function totalPriceCalculate(){
    // Multiply by count value with price
    iphoneTotalPrice = iphonePrice * valueCount;
    // Setting price input value 
    document.getElementById('iphone-price').innerText = iphoneTotalPrice;
}

function subtotalPriceCalculate(){
    // Sum Total price of all products
    subTotal = iphoneTotalPrice + caseTotalPrice;
    document.getElementById('subTotal').innerText = subTotal;
}

// Increment
document.querySelector('.iphone-plus').addEventListener('click', function(){
    
    // Getting Value of input
    valueCount = document.getElementById('iphone-value-count').value;
   
    // Value Increment by 1
    valueCount++;
    
    // Setting increment input value 
    document.getElementById('iphone-value-count').value = valueCount;
    
    totalPriceCalculate()
    subtotalPriceCalculate()

    if(valueCount > 1){
        document.querySelector('.iphone-minus').removeAttribute('disabled', 'disabled')
    }
})

// Decrement
document.querySelector('.iphone-minus').addEventListener('click', function(){
    
    // Getting Value of input
    valueCount = document.getElementById('iphone-value-count').value;
    
    // Value Increment by 1
    valueCount--;
    
    // Setting increment input value 
    document.getElementById('iphone-value-count').value = valueCount;
    
    totalPriceCalculate()
    subtotalPriceCalculate()
    
    if(valueCount == 1){
        document.querySelector('.iphone-minus').setAttribute('disabled', 'disabled')
    }
})


// Case Increment
document.querySelector('.case-plus').addEventListener('click', function(){
    
    // Getting Value of input
    valueCount = document.getElementById('case-value-count').value;
   
    // Value Increment by 1
    valueCount++;
    
    // Setting increment input value 
    document.getElementById('case-value-count').value = valueCount;
    
    totalPriceCalculateCase()
    subtotalPriceCalculate()

    if(valueCount > 1){
        document.querySelector('.case-minus').removeAttribute('disabled', 'disabled')
    }
})


// Case Increment
document.querySelector('.case-minus').addEventListener('click', function(){
    
    // Getting Value of input
    valueCount = document.getElementById('case-value-count').value;
    
    // Value Increment by 1
    valueCount--;
    
    // Setting increment input value 
    document.getElementById('case-value-count').value = valueCount;
    
    totalPriceCalculateCase()
    subtotalPriceCalculate()
    
    if(valueCount == 1){
        document.querySelector('.case-minus').setAttribute('disabled', 'disabled')
    }
})






// // Set Minus Btn Default Disable
// document.getElementById('minus').setAttribute('disabled', 'disabled')

// // Increment Number
// let iphonePrice = 1200;
// document.getElementById('iphone-price').innerText = iphonePrice;
// let iphoneCase = 50;
// document.getElementById('case-price').innerText = iphoneCase;

// document.getElementById('subTotal').innerText = iphonePrice+iphoneCase;

// // Iphone Section
// let plus = document.querySelectorAll('.plus')[0];
// plus.addEventListener('click', function(){

//     let quantityValue = parseFloat(document.querySelectorAll('.number')[0].value);
//     let totalQnt = document.querySelectorAll('.number')[0].value = quantityValue+1;
//     const iphoneTotalPrice = iphonePrice * totalQnt;
//     document.getElementById('iphone-price').innerText = iphoneTotalPrice;
//     document.getElementById('subTotal').innerText = iphoneTotalPrice;
    
// })

// // Decrement Number
// let minus = document.querySelectorAll('.minus')[0];
// minus.addEventListener('click', function(){
    
//     let quantityValue = parseFloat(document.querySelectorAll('.number')[0].value);
//     totalQnt = document.querySelectorAll('.number')[0].value = quantityValue-1
//     const iphoneTotalPrice = iphonePrice * totalQnt;
//     document.getElementById('iphone-price').innerText = iphoneTotalPrice;
// })

// // // Iphone Case Section

// plus = document.querySelectorAll('.plus')[1];
// plus.addEventListener('click', function(){

//     let quantityValue = parseFloat(document.querySelectorAll('.number')[1].value);
//     let totalQnt = document.querySelectorAll('.number')[1].value = quantityValue+1;
//     const caseTotalPrice = iphoneCase * totalQnt;
//     document.getElementById('case-price').innerText = caseTotalPrice;
// })

// // Decrement Number
// minus = document.querySelectorAll('.minus')[1];
// minus.addEventListener('click', function(){
    
//     let quantityValue = parseFloat(document.querySelectorAll('.number')[1].value);
//     let totalQnt = document.querySelectorAll('.number')[1].value = quantityValue-1
//     const caseTotalPrice = iphoneCase * totalQnt;
//     document.getElementById('case-price').innerText = caseTotalPrice;

// })





