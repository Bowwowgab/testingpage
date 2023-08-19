// COUNT DOWN CLCOK
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
// let color = JSON.parse(localStor4age.getItem('color')) || { color(){}}

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



 // TO CHANGE COLOR AND BACKGOUND OF THE PAGE 
 let dl =  document.querySelector('#dw-holder-div-btn');
 let dl_txt = document.querySelector('#dark-light-para');
 let button_div =  document.querySelector('#dw-holder-div');
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
  
  // DARK ATTRIBUTE
function darkView(){
  dl.classList.add('dark-white-div-style1');
  dl.classList.remove('dark-white-div-style2');
  dl_txt.innerHTML = 'Light';
  button_div.classList.add('dw-holder-div-style');
  document.body.classList.add('body-style');
  document.querySelector('.navigational-bar').classList.add('header-style');
  document.querySelector('#second-nav-bar-dark-white-div').classList.add('second-nav-bar-style')
}

// LIGHT ATTRIBRUTE
function lightView(){
  dl.classList.add('dark-white-div-style2');
  dl.classList.remove('dark-white-div-style1'); 
  dl_txt.innerHTML = 'Dark';
  button_div.classList.remove('dw-holder-div-style');
  document.body.classList.remove('body-style');
  document.querySelector('.navigational-bar').classList.remove('header-style');
  document.querySelector('#second-nav-bar-dark-white-div').classList.remove('second-nav-bar-style')
}

// TO FIX THE SWITCH DIV WHEN SCROLL
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 99){
      document.querySelector('#second-nav-bar-dark-white-div').style.position = 'fixed';
      document.querySelector('#unisfa-logo').style.visibility = 'visible';
    }else{
      document.querySelector('#second-nav-bar-dark-white-div').style.position = '';
      document.querySelector('#unisfa-logo').style.visibility = 'hidden';
    }
});


// // CHALK 1 DAYS MONEY
// function chalkOneDays(){
//   let today = new Date();
//   let yes = new Date('2023-03-30');
//       objchk1.days = Math.round((today - yes) / (24 * 60 * 60 * 1000));
//       objchk1.cash = objchk1.days * 35;
//       document.querySelector('#ck1-days-left').innerHTML = objchk1.days;
//       document.querySelector('#ck1-money-got').innerHTML = `Cash: $${objchk1.cash}`;

//       localStorage.setItem('ckone', JSON.stringify(objchk1));
//  }

// const haschange = ()=>{
//   setInterval(()=>{
//     let pre = new Date().getDate(); 
//     let cur = new Date().getDate(); 
//      if (pre !== cur){
//       chalkOneDays();
//      }
//     }, 1000);
// };
