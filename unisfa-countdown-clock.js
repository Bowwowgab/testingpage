// TO FIX THE SWITCH DIV WHEN SCROLL
window.addEventListener('scroll', ()=>{
  const sec =  document.querySelector('#second-nav-bar-dark-white-div');
  const uni =  document.querySelector('#unisfa-txt-div');
    if(window.scrollY >= 90){
        sec.style.position = 'fixed';
        uni.style.visibility = 'visible';
    }else{
        sec.style.position = '';
        uni.style.visibility = 'hidden';
    }
});


// COUNT DOWN CLCOK
function timeAndDate(){
    let hour = new Date().getHours(), min =  new Date().getMinutes(), sec = new Date().getSeconds(), ampm = '';
    const dayname = new Date().toLocaleString('en-US', {weekday: 'long'}).toUpperCase();
    let d = new Date().getDate();
    let m = new Date().getMonth() + 1;
    let y = new Date().getFullYear();

    // TIME AM OR PM
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


// CALCULTE THE DATES DIFFERENCE NOTE: TIME ZONE ISSUE SOLVED BY USING
//  'T12:00:00Z' OR 'T0:00:00Z' WHICH IS UTC
// MEANING COODINATE UNIVERSAL TIME
function calculate_checkday(day){
  const today = new Date().getTime('T12:00:00Z');
  const dateofarrival = new Date(day + 'T00:00:00Z').getTime();
  return Math.round((today - dateofarrival) /(24 * 60 * 60 * 1000));
}

// CALCULTE THE OHTER DETAILS - DAYS SPENTS, LEFT, MONTHS, WEEKS AND REMAINING DAYS
function forAll_chalk(dateofarrival, ckn){
   dsp = calculate_checkday(dateofarrival);
   const dll  =  360 - dsp;
   const m    =  Math.floor(dsp / 30);
   const w    =  Math.floor(dsp / 7);
   const r    =  Math.floor(dsp % 7);
  
   document.querySelector(ckn).innerHTML = 
   `Days spent: ${dsp}  Days left: ${dll}
   <p> Total Months: ${m} </p> 
   <p> Total Weeks: ${w}  </p>
   <p> Remaining Day(s): ${r} </p>`;
}

// FOR CHALK ONE
function chalk_1(){
  forAll_chalk('2023-03-30', '#ck1');
}
chalk_1();

// CHALK TWO
function chalk_2(){
  forAll_chalk('2023-04-05', '#ck2');
}
chalk_2();


// CHALK THREE
function chalk_3(){
  forAll_chalk('2023-06-10', '#ck3');
}
chalk_3();

// TO CHANGE COLOR AND BACKGOUND OF THE PAGE TO DARK OR LIGHT
let dl =  document.querySelector('#dw-holder');
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
    document.body.classList.add('body-style');
    document.querySelector('.navigational-bar').classList.add('header-style');
    document.querySelector('#second-nav-bar-dark-white-div').classList.add('second-nav-bar-style');
}

// LIGHT ATTRIBRUTE
function lightView(){
    dl.classList.add('dark-white-div-style2');
    dl.classList.remove('dark-white-div-style1'); 
    document.body.classList.remove('body-style');
    document.querySelector('.navigational-bar').classList.remove('header-style');
    document.querySelector('#second-nav-bar-dark-white-div').classList.remove('second-nav-bar-style');
}
