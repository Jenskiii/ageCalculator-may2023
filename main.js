// selects errors html
const dayError = document.getElementById("day__error");
const monthError = document.getElementById("month__error");
const yearError = document.getElementById("year__error");

// selects inputss
const day = document.querySelector(".day__input");
const month = document.querySelector(".month__input");
const year = document.querySelector(".year__input");

// days of months holder
const allMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
// if true we calculate age
let validate = "";

// button + event
const button = document.getElementById("button");
button.addEventListener("click", checkInput)




// checks if input is valid otherwise error
function checkInput(){
    let checkDay = parseInt(day.value);
    let checkMonth = parseInt(month.value);
    let checkYear = parseInt(year.value) ;
    let index = 0


    // day input
    if(checkDay > 31){
    dayError.innerHTML = "Must be a valid day"
    // resets value
    day.value = "";
    index = "";
        turnRed();
    }else if(checkDay === ""){
        dayError.innerHTML = "This field is required"
        turnRed();
    }else{
        index += 1
    }
    
    //month input
    if(checkMonth > 12){
    monthError.innerHTML = "Must be a valid month"
    //resets value
    month.value = "";
    index = "";
        turnRed();
    }else if(checkMonth === ""){
        monthError.innerHTML = "This field is required"
        turnRed()
    }else{
        index += 1
    }

    // year input
    if(checkYear > 2023 || (checkYear < 1900 && checkYear > 1)){
        yearError.innerHTML = "Must be in the past or after 1900" 
        //resets value
        year.value = "";
        index = "";
        turnRed();
     }else if(checkYear === ""){
        yearError.innerHTML = "This field is required"
        turnRed();
     }else{
        index += 1
    }


        if(index === 3){
            calculateAge();
            index = ""
        }
     
     // removes error after 2 sec
     setTimeout(removeRed, 2000);

    }


// calculates age
function calculateAge(){
    // selects html outputs
    let yearOld = document.getElementById("year");
    let monthOld = document.getElementById("month");
    let dayOld = document.getElementById("day");

    // setting day month year
    let today = new Date();
    let myDay = today.getDate()
    let myMonth = 1 + today.getMonth();
    let myYear = today.getFullYear();

// calculate day length of month
    if(day.value > myDay){
        myDay = myDay + allMonths[myMonth -1];
        myMonth = myMonth - 1;   
    }
    if(month.value > myMonth){
        myMonth = myMonth + 12;
        myYear = myYear - 1 ;
    }

    // date - birthday 
    const d = myDay - day.value;
    const m = myMonth - month.value;
    const y = myYear - year.value;


    // setting innerhtml to day year month
        yearOld.innerHTML = y;
        monthOld.innerHTML = m;
        dayOld.innerHTML = d;
}   

// outputs visual error
function turnRed(){
    const input = document.querySelectorAll(".input")
    const errorTitle = document.querySelectorAll(".date")

    input.forEach(e=>{
       e.classList.add("error")
    })

    errorTitle.forEach(e=>{
        e.classList.add("error")
    })

}


// removes error 
function removeRed(){
    const input = document.querySelectorAll(".input")
    const errorTitle = document.querySelectorAll(".date")

    input.forEach(e=>{
       e.classList.remove("error")
    })

    errorTitle.forEach(e=>{
        e.classList.remove("error")
    })

    // removes error message
    dayError.innerHTML = "";
    monthError.innerHTML = "";
    yearError.innerHTML = "";
}