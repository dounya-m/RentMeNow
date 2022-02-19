const types = document.getElementById('Types');
const trans = document.getElementsByName('transmission')
const manual = document.getElementById('manual');
const auto = document.getElementById('auto');
const fuel = document.getElementsByName('boit');
const days  = document.getElementById('days');
const elec = document.getElementById('electrique')
const hybride = document.getElementById('hybride')
const essence = document.getElementById('essence')
const diesel = document.getElementById('diesel')
const printTotal = document.getElementById('total')

var final = 0;
var total = 0;
var fuelValue = 0;
var transValue = 0;
types.addEventListener('change',()=>{

    switch (types.value) {
        case 'moto': total = 10;manual.disabled = true;auto.disabled = true;
        elec.disabled = false;hybride.disabled=true;essence.disabled=false;diesel.disabled=true;break;
        case 'citadine': total = 12; auto.disabled= true;manual.disabled = false;
        elec.disabled = false;hybride.disabled=false;essence.disabled=false;diesel.disabled=false;break;
        case 'compact': total = 14; auto.disabled= true;manual.disabled = false;
        elec.disabled = true;hybride.disabled=false;essence.disabled=false;diesel.disabled=false;break;
        case 'berline': total = 20;manual.disabled = true;auto.disabled= false
        elec.disabled = true;hybride.disabled=false;essence.disabled=false;diesel.disabled=false;break;
        case 'utilitaire': total = 16; auto.disabled= true;manual.disabled = false;
        elec.disabled = true;hybride.disabled=true;essence.disabled=true;diesel.disabled=false;break;
        case 'egine': total = 900; auto.disabled= true;manual.disabled = false;
        elec.disabled = true;hybride.disabled=true;essence.disabled=false;diesel.disabled=false;break;
        case 'camion': total = 250;manual.disabled = true;auto.disabled= false;
        elec.disabled = true;hybride.disabled=true;essence.disabled=true;diesel.disabled=false;break;
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

    if (days.value < 0 ){
        final = 0
    }
    else{
        console.log ("work Too");
        final = (total + total*fuelValue + total*transValue ) * days.value
}
        printTotal.innerHTML = final;

}
