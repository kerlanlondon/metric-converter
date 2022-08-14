/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Grabbing the input value from user and returning 

const inputTag = document.getElementById("myNumber")

const mainButton = document.getElementById("main-btn")
mainButton.addEventListener("click", function() {
    returnInput()
    lengthConverter()
    volumeConverter()
    massConverter()
} )

//Length Converter Function 
function lengthConverter() {
    const inputVal = returnInput()
    //
    let feetCalc = inputVal * 3.281
    feetCalc = feetCalc.toFixed(3)
    //
    let meterCalc = inputVal / 3.281
    let newCal = meterCalc.toFixed(3)
    
    const finalOutput = `${inputVal} meters = ${feetCalc} feet | ${inputVal} feet = ${newCal} meters`
    let paragraph = document.getElementById("li1-p")
    paragraph.textContent = finalOutput
} 


//Volume Converter Function 
function volumeConverter() {
    const inputVal = returnInput()
    //
    let literCalc = inputVal * 0.264
    literCalc = literCalc.toFixed(3)
    //
    let gallonCalc = inputVal / 0.264
    let newCal = gallonCalc.toFixed(3)
    
    const finalOutput = `${inputVal} liters = ${literCalc} gallons | ${inputVal} gallons = ${newCal} liters`
    let paragraph = document.getElementById("li2-p")
    paragraph.textContent = finalOutput
} 

//Mass Converter Function 
function massConverter() {
    const inputVal = returnInput()
    //
    let kiloCalc = inputVal * 2.204
    kiloCalc = kiloCalc.toFixed(3)
    //
    let poundCalc = inputVal / 2.204
    let newCal = poundCalc.toFixed(3)
    
    const finalOutput = `${inputVal} kilograms = ${kiloCalc} pounds | ${inputVal} pounds = ${newCal} kilograms`
    let paragraph = document.getElementById("li3-p")
    paragraph.textContent = finalOutput
} 

// General Functions 
function returnInput() {
    const inputValue = inputTag.value
    return inputValue
}
