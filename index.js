var plusBtn = document.getElementById("plusPhone");
plusBtn.addEventListener("click",function(){
   
    var currentPhone = parseInt(document.getElementById('currentPhone').value)+1;
    var phonePrice = parseInt(document.getElementById('phonePrice').innerText)+1219;
    var subTotal = parseInt(document.getElementById('subTotal').innerText)+1219;
    var total = parseInt(document.getElementById('total').innerText)+1219;
    document.getElementById('currentPhone').value = currentPhone;
    document.getElementById('phonePrice').innerText = phonePrice;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('total').innerText = total;
})



var minusBtn = document.getElementById("minusPhone");
minusBtn.addEventListener("click",function(){
   
    var currentPhone = parseInt(document.getElementById('currentPhone').value)-1;
    var phonePrice = parseInt(document.getElementById('phonePrice').innerText)-1219;
    var subTotal = parseInt(document.getElementById('subTotal').innerText)-1219;
    var total = parseInt(document.getElementById('total').innerText)-1219;
    document.getElementById('currentPhone').value = currentPhone;
    document.getElementById('phonePrice').innerText = phonePrice;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('total').innerText = total;
})



var plusBtn = document.getElementById("plusCase");
plusBtn.addEventListener("click",function(){
   
    var currentCase = parseInt(document.getElementById('currentCase').value)+1;
    var casePrice = parseInt(document.getElementById('casePrice').innerText)+59;
    var subTotal = parseInt(document.getElementById('subTotal').innerText)+59;
    var total = parseInt(document.getElementById('total').innerText)+59;
    document.getElementById('currentCase').value = currentCase;
    document.getElementById('casePrice').innerText = casePrice;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('total').innerText = total;
})



var minusBtn = document.getElementById("minusCase");
minusBtn.addEventListener("click",function(){
   
    var currentCase = parseInt(document.getElementById('currentCase').value)-1;
    var casePrice = parseInt(document.getElementById('casePrice').innerText)-59;
    var subTotal = parseInt(document.getElementById('subTotal').innerText)-59;
    var total = parseInt(document.getElementById('total').innerText)-59;
    document.getElementById('currentCase').value = currentCase;
    document.getElementById('casePrice').innerText = casePrice;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('total').innerText = total;
})