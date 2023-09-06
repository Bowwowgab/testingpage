//MAKE THE SWITCH DIV FIXED AT THE TOP WHEN SCROLLING
function scroll(){
  const txt1 = document.querySelector('#unisfa-txt1');
  const txt2 = document.querySelector('#unisfa-txt2');
  window.addEventListener('scroll', ()=>{
      if(window.scrollY > 60){
          txt1.style.display = 'flex';
          txt2.style.display = 'none';
      }else{
          txt1.style.display = 'none';
          txt2.style.display = 'flex';
      }
  });
}
scroll();

// COUNT DOWN CLCOK
function timeAndDate(){
    let hour = new Date().getHours(), min =  new Date().getMinutes(), sec = new Date().getSeconds(), ampm = '';
    const dayname = new Date().toLocaleString('en-US', {weekday: 'long'});
    let d = new Date().getDate();
    let m = new Date().getMonth() + 1;
    let y = new Date().getFullYear();

    // DETERMISE AM OR PM FOR THE TIME
    ampm = (hour >= 12)?  ampm = 'PM': ampm = 'AM';

    hour = (hour < 10) ? '0' + hour : hour;
    min  = (min  < 10) ? '0' + min  : min;
    sec  = (sec  < 10) ? '0' + sec  : sec;
    document.querySelector('#time').innerText = hour + ':'+ min + ':' + sec + ampm;

   //DATE
    d = (d < 10) ? '0' + d : d;
    m = (m < 10) ? '0' + m : m;
    y = (y < 10) ? '0' + y : y;
    document.querySelector('#date').innerText = `${d}-${m}-${y}`;
    document.querySelector('#day').innerText =`${dayname}`; 
    
    setInterval(()=>{timeAndDate()}, 1000);
}
timeAndDate();

// CALCULTE THE DATES DIFFERENCE NOTE: TIME ZONE ISSUE SOLVED BY USING
//  'T12:00:00Z' OR 'T0:00:00Z' -> UTC
function calculate_checkday(day){
    const utcDate1 = new Date(new Date().toISOString());
    const utcDate2 = new Date(new Date(day + 'T00:00:00').toISOString());
    return Math.round((utcDate1 - utcDate2) / (24 * 60 * 60 * 1000));
  }
  
  // CALCULTE THE OHTER DETAILS - DAYS SPENTS, LEFT, MONTHS, WEEKS AND REMAINING DAYS
  function forAll_chalk(dateofarrival, ckn){
     dsp = calculate_checkday(dateofarrival);
     const dll =  360 - dsp;
     const m   =  Math.floor(dsp / 30);
     const w   =  Math.floor(dsp / 7);
     const r   =  Math.floor(dsp % 7);
    
     document.querySelector(ckn).innerHTML = 
     `Days spent: ${dsp} Days left: ${dll}
     <p>Breakdown of days spent &dArr;</p>
     <p> Total Months:     ${m} </p> 
     <p> Total Weeks:      ${w} </p>
     <p> Remaining Day(s): ${r} </p>`;
  }
  
  // CHALK ONE
  function chalk_1(){ forAll_chalk('2023-03-30', '#ck1'); }
  
  // CHALK TWO
  function chalk_2(){ forAll_chalk('2023-04-05', '#ck2'); }
  
  // CHALK THREE
  function chalk_3(){  forAll_chalk('2023-06-10', '#ck3'); }
  
  // CHECK THE DATE TO ENSURE GOOD SUBTRACTION OF DATE -> EVERY 5ms
  function checkdate(){
    chalk_1();
    chalk_2();
    chalk_3();
    setInterval(()=>{checkdate()}, 5000);
  }
  checkdate();


