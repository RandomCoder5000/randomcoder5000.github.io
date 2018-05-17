var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy
document.write(today);

document.getElementById('heading').innerHTML = localStorage['title'] || 'Homework';
document.getElementById('content').innerHTML = localStorage['text'] || 'Class 1 - <br> Class 2 - <br> Class 3 - <br> Class 4 - <br> Class 5 - <br> Class 6 - <br> Class  7 - <br> Class 8 - <br> Class 9 - <br> Class 10 - <br> Class 11 <br> Class 12 <br> Homeroom - ';


setInterval(function() { 
      localStorage['title'] = document.getElementById('heading').innerHTML;
      localStorage['text'] = document.getElementById('content').innerHTML;
}, 75);
