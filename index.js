// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function getCurrentFiscalYear(date)  {

  var currentDate = new Date(date || new Date());
  var year = currentDate.getMonth() >= 3 ? currentDate.getFullYear() + 1 : currentDate.getFullYear(); 
  console.log(currentDate.toISOString() + ' ==> ' + year);
  return year;
}

getCurrentFiscalYear();
getCurrentFiscalYear('2022-03-31');  
getCurrentFiscalYear('2022-04-01');        
getCurrentFiscalYear('2022-05-01');   