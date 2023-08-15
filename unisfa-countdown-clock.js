/ COUNT DOWN CLCOK
function timeAndDate(){
    let hour = new Date().getHours(), min =  new Date().getMinutes(), sec = new Date().getSeconds(), ampm = '';
    const dayname = new Date().toLocaleString('en-US', {weekday: 'long'}).toUpperCase();
    let d = new Date().getDate();
    let m = new Date().getMonth() + 1;
    let y = new Date().getFullYear();

    // TIME
    ampm = (hour >= 12)?  ampm = 'PM': ampm = 'AM';

    hour = (hour < 10)? '0' + hour : hour;
    min  = (min < 10)?  '0' + min  : min;
    sec  = (sec < 10)?  '0' + sec  : sec;
    document.querySelector('#count-down-time').innerText = hour + ':'+ min + ':' + sec + ampm;

   //DATE
    d = (d < 10)? '0' + d : d;
    m = (m < 10)? '0' + m : m;
    y = (y < 10)? '0' + y : y;
    document.querySelector('#date').innerText = `${dayname}, ${d}-${m}-${y}`;
    
    setInterval(()=>{timeAndDate()}, 1000);
}

timeAndDate();

let objchk1 = JSON.parse(localStorage.getItem('ckone')) ||   {days: 0, day_left:0, cash: 0};
let objchk2 = JSON.parse(localStorage.getItem('cktwo')) ||   {days: 0, day_left:0, cash: 0};
let objchk3 = JSON.parse(localStorage.getItem('ckthree')) || {days: 0, day_left:0, cash: 0};

// DAYS SPENT METHOD
function forall(dat, obj){
  let today = new Date();
  let dateofarrival = new Date(dat);
      obj.days = Math.round((today - dateofarrival) / (24 * 60 * 60 * 1000));
      obj.day_left = 365 - obj.days;
      obj.cash = obj.days * 35;
}


// CHALK 1 DAYS AND MONEY
function chalkOneDays(){
  forall('2023-03-29', objchk1);
  document.querySelector('#ck1').innerHTML = `Days spent: ${objchk1.days}    Days left: ${objchk1.day_left}  Cash: $${objchk1.cash}`;
  localStorage.setItem('ckone', JSON.stringify(objchk1));
 }

 chalkOneDays();


// CHALK 2 DAYS AND MONEY
function chalktwoDays(){
  forall('2023-04-04', objchk2);
  document.querySelector('#ck2').innerHTML = `Days spent: ${objchk2.days}   Days left: ${objchk2.day_left} Cash: $${objchk2.cash}`;
  localStorage.setItem('cktwo', JSON.stringify(objchk2));
}

chalktwoDays();


//CHALK 3 DAYS AND MONEY
function chalkthreeDays(){
  forall('2023-06-09', objchk3);
  document.querySelector('#ck3').innerHTML = `Days spent: ${objchk3.days}    Days left: ${ objchk3.day_left} Cash: $${objchk3.cash}`;
  localStorage.setItem('ckthree', JSON.stringify(objchk3)); 
}

chalkthreeDays();


 let dl =  document.querySelector('#dw-holder-div-btn');
 let dl_txt = document.querySelector('#dark-light-para');
 let header = document.querySelector('header');
 let bn = false;
 dl.addEventListener('click', ()=>{
      if(!bn){
        bn = true;
       darkView();
      }else{
       lightView();
        bn = false;
      }
  });
  
function darkView(){
  dl.classList.add('dark-white-div-style1');
  dl.classList.remove('dark-white-div-style2');
  dl_txt.innerHTML = 'Light';
  document.body.classList.add('body-style');
  document.querySelector('header').classList.add('header-style');
}

function lightView(){
  dl.classList.add('dark-white-div-style2');
  dl.classList.remove('dark-white-div-style1');
  dl_txt.innerHTML = 'Dark';
  document.body.classList.remove('body-style');
  document.querySelector('header').classList.remove('header-style');
}

