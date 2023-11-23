let dateTime =new Date()

let ampm = document.getElementById("ampm")
function displayTime(){
    let dateTime = new Date();
    let hr= dateTime.getHours();
    let mins= dateTime.getMinutes();
    let sec= dateTime.getSeconds();
    if(hr>=12){
       
        ampm.innerHTML="PM" 
    }
    if(hr>12){
        hr =hr - 12 
    }
       
    document.getElementById("hours").innerHTML=padZero(hr)
    document.getElementById("mins").innerHTML=padZero(mins)
    document.getElementById("sec").innerHTML=padZero(sec)
}

function padZero(num){
    return num<10?"0"+num:num
}


setInterval(displayTime,1000)