

// function mytime(){
//     let a = new Date()
//     let h = a.getHours()
//     let m = a.getMinutes()
//     let s = a.getSeconds()
//     s = checkTime(s)
//     m = checkTime(m)
//     c = checkMeridiem(h)
//     h = checkhours(h)
//     document.getElementById("time").innerHTML = h + ":"+ m +":" + s+" "+ c
// }

// function checkTime(i) {
//     if(i<10){
//         i = "0"+i;
//     }
//     return i
// }
// function checkhours(i) {
//     if(i>12){
//         i =i-12; 
//     }
//     return i
// }

// function checkMeridiem(h){
//     let meridiem = 'AM';
//     if(h === 00){
//         h = 12
//         meridiem = 'AM';
//     }
//     else if( h === 12 ){
//         meridiem = 'PM';
//     }
//     else if( h > 12){
//         hh = h - 12
//         meridiem = 'PM';
//     }
//     return meridiem;
// }
// setInterval(mytime, 1000)



// function tick() {
//     let current= new Date()
//     let h = current.getHours()
//     let m = current.getMinutes()
//     let s = current.getSeconds()
//     s= checktime(s)
//     m = checktime(m)
//     let c = checkMeridiem(h)
//     h = checkhours(h)
//     document.getElementById('time').innerHTML = h+ ":" + m +":"+ s+" "+ c;
// }


// setInterval(tick,1000)




// function al_time() {
//     let tim =new Date()
//     document.getElementById("all_time").innerHTML = tim    
// }
// setInterval(al_time(),1000)


// function startTime() {
//     var today = new Date();
//     var hr = today.getHours();
//     var min = today.getMinutes();
//     var sec = today.getSeconds();
//     ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
//     hr = (hr == 0) ? 12 : hr;
//     hr = (hr > 12) ? hr - 12 : hr;
//     //Add a zero in front of numbers<10
//     hr = checkTime(hr);
//     min = checkTime(min);
//     sec = checkTime(sec);
//     document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
//     var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     var curWeekDay = days[today.getDay()];
//     var curDay = today.getDate();
//     var curMonth = months[today.getMonth()];
//     var curYear = today.getFullYear();
//     var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
//     document.getElementById("date").innerHTML = date;
    
//     var time = setTimeout(function(){ startTime() }, 500);
// }
// function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }
// startTime();



function Dat(){
    var current = new Date() 
    let h = current.getHours()
    let m = current.getMinutes()
    let s = current.getSeconds()
    s= checktime(s)
    m = checktime(m)
    let c = checkMeridiem(h)
    h = checkhours(h)
    document.getElementById('clock').innerHTML = h+ ":" + m +":"+ s+" "+ c;
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let  months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
      ];
     
    //   console.log()
    var curWeekDay = days[current.getDay()]
     var curday =  current.getDay()
     var curmonth = months[current.getMonth()]
     var curYear = current.getFullYear()
     var date  = curWeekDay+" "+curday+" "+curmonth+" "+curYear;
     document.getElementById("date").innerHTML = date 

}
function checktime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}
function checkhours(i){
    if(i>12){
        i=i-12
    }
    return i;
}
function checkMeridiem(h){
    let Meridiem="AM"
    if(h===00){
        h=12;
       Meridiem="AM";
    }
    else if(h===12){
        Meridiem="PM"
    }
    else if(h>12){
        h = h-12
        Meridiem="PM"
    }
    return Meridiem;
}
setInterval(Dat,1000)