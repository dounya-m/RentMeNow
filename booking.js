const types = document.getElementById('Types');
const trans = document.getElementsByName('transmission')
const printTotal = document.getElementById('total')
const manual = document.getElementById('manual');
const auto = document.getElementById('auto');
const fuel=document.getElementsByName('boit');
const days  = document.getElementById('days');


var final = 0;
var total = 0;
var fuelValue = 0;
var transValue = 0;
types.addEventListener('change',()=>{

    switch (types.value) {
        case 'moto': total = 10;manual.disabled = true;auto.disabled = true;break;
        case 'citadine': total = 12; auto.disabled= true;manual.disabled = false; break;
        case 'compact': total = 14; auto.disabled= true;manual.disabled = false;break;
        case 'berline': total = 20;manual.disabled = true;auto.disabled= false;break;
        case 'utilitaire': total = 16; auto.disabled= true;manual.disabled = false;break;
        case 'egine': total = 900; auto.disabled= true;manual.disabled = false;break;
        case 'camion': total = 250;manual.disabled = true;auto.disabled= false;break;
    }
})

trans.forEach((e)=>{
    e.addEventListener('click',()=>{
        transValue = e.value
    })
})

fuel.forEach((e)=>{
    e.addEventListener('click',()=>{
        fuelValue = e.value
    })
})

function prices(){
    final = (total + total*fuelValue + total*transValue ) * days.value
    printTotal.innerHTML = final

}
