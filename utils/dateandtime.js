export function getCurrentTime(){
  var time = new Date().toLocaleTimeString();
  return console.log(time);
};

export function getCurrentDate(){
  var date = new Date().toLocaleDateString();
  return console.log(date);
};

getCurrentTime();
getCurrentDate();
