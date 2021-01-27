// Increment Number
let iphonePrice = 1200;
document.getElementById('iphone-price').innerText = iphonePrice;
let iphoneCase = 50;
document.getElementById('case-price').innerText = iphoneCase;

document.getElementById('subTotal').innerText = iphonePrice+iphoneCase;

// Iphone Section
let plus = document.querySelectorAll('.plus')[0];
plus.addEventListener('click', function(){

    let quantityValue = parseFloat(document.querySelectorAll('.number')[0].value);
    let totalQnt = document.querySelectorAll('.number')[0].value = quantityValue+1;
    const iphoneTotalPrice = iphonePrice * totalQnt;
    document.getElementById('iphone-price').innerText = iphoneTotalPrice;
    document.getElementById('subTotal').innerText = iphoneTotalPrice;
    
})

// Decrement Number
let minus = document.querySelectorAll('.minus')[0];
minus.addEventListener('click', function(){
    
    let quantityValue = parseFloat(document.querySelectorAll('.number')[0].value);
    totalQnt = document.querySelectorAll('.number')[0].value = quantityValue-1
    const iphoneTotalPrice = iphonePrice * totalQnt;
    document.getElementById('iphone-price').innerText = iphoneTotalPrice;
})

// // Iphone Case Section

plus = document.querySelectorAll('.plus')[1];
plus.addEventListener('click', function(){

    let quantityValue = parseFloat(document.querySelectorAll('.number')[1].value);
    let totalQnt = document.querySelectorAll('.number')[1].value = quantityValue+1;
    const caseTotalPrice = iphoneCase * totalQnt;
    document.getElementById('case-price').innerText = caseTotalPrice;
})

// Decrement Number
minus = document.querySelectorAll('.minus')[1];
minus.addEventListener('click', function(){
    
    let quantityValue = parseFloat(document.querySelectorAll('.number')[1].value);
    let totalQnt = document.querySelectorAll('.number')[1].value = quantityValue-1
    const caseTotalPrice = iphoneCase * totalQnt;
    document.getElementById('case-price').innerText = caseTotalPrice;

})





