document.getElementById('heading').innerHTML = localStorage['title'] || 'Homework';
document.getElementById('content').innerHTML = localStorage['text'] || 'IMPORTANT: <br> Class 1 - <br> Class 2 - <br> Class 3 - <br> Class 4 - <br> Class 5 - <br> Class 6 - <br> Class  7 - <br> Class 8 - <br> Homeroom - ';

document.getElementById('heading').style.fontweight = "700";

setInterval(function() { 
      localStorage['title'] = document.getElementById('heading').innerHTML;
      localStorage['text'] = document.getElementById('content').innerHTML;
}, 75);
