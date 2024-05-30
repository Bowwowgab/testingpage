var chselection = document.querySelector('#checker-ckselection');
var chkdedution = document.querySelector('#checker-dedution');
var result = document.querySelector('#checker-result');

// COUNT DOWN CLCOK
function timeAndDate(){
    let hour = new Date().getHours(), min =  new Date().getMinutes(), sec = new Date().getSeconds(), ampm = '';
    const dayname = new Date().toLocaleString('en-US', {weekday: 'long'});

    // DETERMISE AM OR PM FOR THE TIME
    ampm = (hour >= 12)?  ampm = 'PM': ampm = 'AM';

    hour = (hour < 10) ? '0' + hour : hour;
    min  = (min  < 10) ? '0' + min  : min;
    document.querySelector('#time').innerText = hour + ':'+ min  + ampm;

    //DATE
    let date = new Date();
    let option = { day: 'numeric', month: 'short'};
    
    document.querySelector('#date').innerText = `${dayname}, ${date.toLocaleDateString(undefined, option)}`;
    document.querySelector('#year').innerText =`${date.getFullYear()}`; 
}
setInterval(()=>{timeAndDate()}, 1000);

// CALCULTE THE DATES DIFFERENCE NOTE: TIME ZONE ISSUE SOLVED BY USING
//  'T12:00:00Z' OR 'T0:00:00Z' -> UTC
function calculate_checkday(day){
    const utcDate1 = new Date(new Date().toISOString());
    const utcDate2 = new Date(new Date(day + 'T00:00:00Z').toISOString());
    return Math.round((utcDate1 - utcDate2) / (24 * 60 * 60 * 1000));
  }
  
  // CALCULTE THE OHTER DETAILS - DAYS SPENTS, LEFT, MONTHS, WEEKS AND REMAINING DAYS
  function forAll_chalk(dateofarrival, propdate, ckn, ckpro){
     dsp = calculate_checkday(dateofarrival);
     const dll =  360 - dsp;
     const m   =  Math.floor(dsp / 30);
     const w   =  Math.floor(dsp / 7);
      
     //FOR THE 360 days
     //CHECK THE REMAIN DAY 
     if(dll > 0){
      document.querySelector(ckn).innerHTML = 
        `<p> Days spent:   ${dsp} </p>
         <p> Days left:    ${dll} (out of 365days) </p>
         <p> Total Months: ${m} </p> 
         <p> Total Weeks:  ${w} </p>`
     }else{
        document.querySelector(ckn).innerHTML = 
        `<P class="congratutionalMsg">
            <em>🎉 🎉Wow! Congratulations<br> 
                You have completed full year of work.
                Your dediction and hard work 
                have truly paid off. 
                Keep up the great work!
            </em>
       </P>`
     }
   
     //FOR THE PROPOSED DATE
     const proposeddate = calculate_checkday(propdate) * -1;
     const prodml = Math.floor(proposeddate / 30);
     const proddl = Math.floor(proposeddate % 30);
     var chmonth = document.querySelector(ckpro);
     if(prodml ===0 && proddl === 0){
      chmonth.innerHTML = 
        `<p> <strong>Days left with Proposed Date  &dArr;</strong></P>
         <p> Days left: ${proposeddate} </p>
       `
     }else{
      chmonth.innerHTML = 
      `<p> <strong>Days left with Proposed Date  &dArr;</strong></P>
       <p> Days left:        ${proposeddate} </p>
       <p> Total Months:     ${prodml} </p>
       <p> Remaining Day(s): ${proddl} </p>` 
     }
     
  }
  
  // CHALK ONE
 function chalk_1(){ forAll_chalk('2023-03-30', '2024-05-19', '#ck1', "#ckpro1"); }
  
  // CHALK TWO
  function chalk_2(){ forAll_chalk('2023-04-05', '2024-06-02', '#ck2', "#ckpro2"); }
  
  // CHALK THREE
  function chalk_3(){  forAll_chalk('2023-05-26', '2024-06-23', '#ck3', "#ckpro3"); }
  
  // CHECK THE DATE TO ENSURE GOOD SUBTRACTION OF DATE -> EVERY 5ms
  function checkdate(){
    chalk_1();
    chalk_2();
    chalk_3();    
  }
setInterval(()=>{checkdate()}, 2000);

//MAKE THE SWITCH DIV FIXED AT THE TOP WHEN SCROLLING
function scroll(){
  var txt = document.querySelector('#unisfa-batt');
  window.addEventListener('scroll', ()=>{
    (window.scrollY > 10)? txt.style.display = 'none': txt.style.display = 'flex';
  });
}
scroll();

//TOP NAV CHECKER OPEN
document.querySelector('#check-cash-div').addEventListener('click', ()=>{
  document.querySelector('#checker-outter-div').classList.add('checker-outter-div-style');
  clearinput();
})

//CHECKER CLOSE BUTTON
document.querySelector('#checker-close-btn').addEventListener('click', ()=>{
  document.querySelector('#checker-outter-div').classList.remove('checker-outter-div-style');
  clearinput();
})

//CLEARS THE INPUTS  
function clearinput(){
chselection.value = "";
chkdedution.value = "";  
result.innerHTML  = "";
}

//FOR THE DEDUTION ONLY - DECIMAL 
chkdedution.addEventListener('keypress', (event) =>{
  var key = event.key;
  if (
      (key != '.' || this.value.indexOf('.') != -1) && // Allow only one decimal point
      !isFinite(key)  // Allow digits
  ) {
      event.preventDefault();
  }  
});

// CLEARS THE RESULT WHEN BACKSPACE IS PRESS
chkdedution.addEventListener('keydown', (event)=> {
  if (event.key === 'Backspace') result.innerHTML = '';
});

// THE CASH RESULT METHOD
document.querySelector('#checker-result-btn').addEventListener('click', ()=>{
    if(chselection.value !== "" && chkdedution.value >=0 && chkdedution.value !== ""){
      switch (chselection.value) {

         //CK 1
          case "2023-03-30":{
          result.innerHTML = `Cash earn currently: $${((calculate_checkday(chselection.value) * 35) - chkdedution.value).toLocaleString()}`;
          break 
          }

          //CK 2
          case "2023-04-05":{
            result.innerHTML = `Cash earn currently: $${((calculate_checkday(chselection.value) * 35) - chkdedution.value).toLocaleString()}`;
            break
          }

          //CK 3
          case "2023-05-26":{
            result.innerHTML = `Cash earn currently: $${((calculate_checkday(chselection.value) * 35) - chkdedution.value).toLocaleString()}`;
            break;
          }

          default: result.innerHTML = "0.00";
      }

    }else{
      result.innerHTML = "";
    }
});


//FOR THE CK SELECTION
var options = [
   // {value: "2023-03-30", text: "CHALK 1"},
    {value: "2023-04-05", text: "CHALK 2"},
    {value: "2023-05-26", text: "CHALK 3"}
];

options.forEach((optionData)=> {
    var option = new Option(optionData.text, optionData.value);
    chselection.add(option);
});
