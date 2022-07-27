let userName = prompt("Adınız nedir")

let setName = document.getElementById("myName")
setName.innerHTML = userName
let setDate = document.getElementById("myClock")

function showTime() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    setDate.innerHTML=""
    var d = new Date()
    var s = d.getSeconds()
    var m = d.getMinutes()
    var h = d.getHours()
    var day = weekday[d.getDay()]
    setDate.innerHTML = h + ":"+ m + ":" + s +" " + day
    
}

setInterval(showTime,1000)