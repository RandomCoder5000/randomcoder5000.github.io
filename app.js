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
document.getElementById('content').innerHTML = localStorage['text'] || 'English - <br> Math - <br> Physics - <br> Latin - <br> Religion - <br> World Civ - <br> Music - <br> Health - <br> Guidance - <br> Homeroom - ';


setInterval(function() { 
      localStorage['title'] = document.getElementById('heading').innerHTML;
      localStorage['text'] = document.getElementById('content').innerHTML;
}, 75);
