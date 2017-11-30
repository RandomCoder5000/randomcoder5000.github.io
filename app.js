var today = 'date';

document.getElementById('heading').innerHTML = localStorage['title'] || 'Homework for Today - '+ today;
document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second :) ';

 setInterval(function() {
      localStorage['title'] = document.getElementById('heading').innerHTML;
      localStorage['text'] = document.getElementById('content').innerHTML;
 }, 1000);
