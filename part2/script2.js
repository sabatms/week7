
function getWeekday(date) 
{
   const daysofWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const daynumbers1 = date.getDay();
   return daysofWeek[daynumbers1];
 }
console.log( getWeekday( new Date() ) );  // "Sunday”

console.log( getWeekday( new Date('2012-10-10') ) );// 'wednesday'
