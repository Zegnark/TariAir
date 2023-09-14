const roundTrip = document.getElementById('plan');
const people = document.getElementById('plan-a');
const comfort = document.getElementById('plan-b');

const roundA = document.getElementById('round-a');
const roundB = document.getElementById('round-b');
const roundC = document.getElementById('round-c');

const flight = document.getElementById('flight');
const hotel = document.getElementById('hotel');
const visa = document.getElementById('visa');

const supWrap = document.getElementById('sup-wrap');
const supWrap1 = document.getElementById('sup-wrap1');
const supWrap2 = document.getElementById('sup-wrap2');

const locator = document.getElementById('locator');
const locDrop = document.getElementById('locator-d')

const locator2 = document.getElementById('locator2');
const locDrop2 = document.getElementById('locator-b');

const cityInput = document.getElementById('city');
const cities  = document.getElementById('cities');

const destInput = document.getElementById('dest');
const dest = document.getElementById('dests');

const roundText = document.getElementById('round-text');
const roundFill = document.getElementById('round-fill');

const textClass = document.getElementById('text-class');

const lodge = document.getElementById('lodge');
const lodged = document.getElementById('lodging');

const haloBtn = document.getElementById('halo-btn');
const dispRoom = document.getElementById('room-num');


roundTrip.addEventListener('click', handleTrip);
people.addEventListener('click', handlePass);
comfort.addEventListener('click', handleEconomy);

locator.addEventListener('click', dropDown);
locator2.addEventListener('click', dropDowne);

flight.addEventListener('click', handleFlight);
hotel.addEventListener('click', handleHotels);
visa.addEventListener('click', handleVisa);

lodge.addEventListener('click', handleLodge);

haloBtn.addEventListener('click', handleRooms);

function handleRooms() {
    if(dispRoom.style.display === "block"){
        dispRoom.style.display = 'none';
    } else {
        dispRoom.style.display = 'block';
    }
} 

function handleLodge() {
    if(lodged.style.display === 'block'){
        lodged.style.display = 'none'
    } else {
        lodged.style.display = 'block'
    }
}


function handleCity(event){
    var item = event.target.textContent;
    // console.log(item)
    cityInput.value = item;
    // alert(item)
}

function handleDest(event){
    var e = event.target.textContent;
    destInput.value = e;
}

function handleFill(event) {
    let p = event.target.textContent;
    console.log(p)
    roundText.textContent = p;
}

function handleClass(event) {
    let x = event.target.textContent;
    textClass.textContent = x;
    
}

function dropDown() {
    // alert('yes you clikced?') 
    if(locDrop.style.display === 'block') {
        locDrop.style.display = 'none'
    } else {
        locDrop.style.display = 'block';
    }

    locDrop2.style.display = 'none'
}

function dropDowne() {
    if(locDrop2.style.display === 'block') {
        locDrop2.style.display = 'none';
    } else {
        locDrop2.style.display = 'block';
    }
    locDrop.style.display = 'none'
}




function handleFlight () {
    // alert('we are flying');
    flight.classList.add('active')
    hotel.classList.remove('active')
    visa.classList.remove('active')

    supWrap.style.display = 'block';
    supWrap1.style.display = 'none';
    supWrap2.style.display = 'none';

}

function handleHotels () {
    // alert('we are flying');
    flight.classList.remove('active')
    hotel.classList.add('active')
    visa.classList.remove('active')

    supWrap.style.display = 'none';
    supWrap1.style.display = 'block';
    supWrap2.style.display = 'none';
}

function handleVisa () {
    // alert('we are flying');
    flight.classList.remove('active')
    hotel.classList.remove('active')
    visa.classList.add('active')

    supWrap.style.display = 'none';
    supWrap1.style.display = 'none';
    supWrap2.style.display = 'block';
}




function handleTrip() {
    if(roundA.style.display === 'block'){
        roundA.style.display = 'none';
    }  else{
        roundA.style.display = 'block';      
    }
    roundB.style.display = 'none';
    roundC.style.display = 'none';
};

function handlePass() {
    if(roundB.style.display === 'block'){
        roundB.style.display = 'none';
    }  else{
        roundB.style.display = 'block';      
    }
    roundA.style.display = 'none';
    roundC.style.display = 'none';
};

function handleEconomy() {
    if(roundC.style.display === 'block'){
        roundC.style.display = 'none';
    }  else{
        roundC.style.display = 'block';      
    }
    roundA.style.display = 'none';
    roundB.style.display = 'none';
};
