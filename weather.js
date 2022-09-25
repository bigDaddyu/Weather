let display = document.getElementById('display')
let temp = document.getElementById('temperature')
function action() {
let temperature = Number(temp.value);
if(temperature==25){
    //console.log("at room temperature")
    display.innerHTML='at room temperature'
}
else if(temperature<25 && temperature>17){
    //console.log("the weather is cold")
    display.innerHTML='the weather is cold'
}

else if(temperature>25 && temperature<30){
    //console.log("the weather is hot")
    display.innerHTML='the weather is hot'
}
}

let cel = document.getElementById('celcius')
let kel = document.getElementById('kelvin')
function boy(){
    let celcius = Number(cel.value)
    let resultInKelvin = (celcius * 1.8) + 32
    console.log(resultInKelvin);
    kel.value = resultInKelvin
}