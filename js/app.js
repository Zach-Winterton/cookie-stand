'use strict';
//console.log(hello-world)


  const hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    //console.log (hours);

    const cookieDataTable = document.getElementById('table');
    //console.log (cookieDataTable);

let tfoot = document.createElement('tfoot')
let allShop = [];


function Shop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPurchasedPerHourArray = [];
  this.totalDailySales = 0;
  allShop.push(this)
  
  this.randomNumberCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  this.cookPerHour = function () {
    return Math.ceil(this.randomNumberCustomersPerHour() * this.avg); 
  };
  this.Sold = function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPurchasedPerHourArray.push(this.cookPerHour());
    }
  };
  this.totalSales = function () {
    this.Sold();
    for (let i = 0; i < this.cookiesPurchasedPerHourArray.length; i++) {
      this.totalDailySales += this.cookiesPurchasedPerHourArray[i];
    }
  },
  this.render();
}
Shop.prototype.render = function (){
  this.totalSales();
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (let i = 0; i< this.cookiesPurchasedPerHourArray.length; i++){
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesPurchasedPerHourArray[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.totalDailySales;
  tableRow.appendChild(tableData);
  cookieDataTable.appendChild(tableRow);
};

function cookieHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  thead.appendChild(th);

  for (let i = 0; i < hours.length; i++){
    th = document.createElement('th');
    th.textContent = hours[i];
    thead.appendChild(th);
  }
    th = document.createElement('th');
    th.textContent='Total';
    thead.appendChild(th);
    cookieDataTable.appendChild(thead);
  }

function Footer(){
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent='hourly Total'
  tr.appendChild(td);

  
let grandTotal = 0;
for (let i = 0; i < hours.length; i++){
  let td = document.createElement('td');
  let hourlyTotal = 0;
  for (let j = 0; j < allShop.length; j++){
    hourlyTotal += allShop[j].cookiesPurchasedPerHourArray[i];
  }
  grandTotal += hourlyTotal
  console.log(grandTotal)
  td.textContent = hourlyTotal;
  tr.appendChild(td);
  cookieDataTable.appendChild(td);
  }
let td1 = document.createElement('td');
  td.textContent = grandTotal;
cookieDataTable.appendChild(td1);
}



  //tfoot.appendChild(tr);



cookieHeader();
Footer();

  
  new Shop('Seattle', 23, 65, 6.3);
 
  new Shop('Tokyo', 3, 24, 1.2);
  
  new Shop('Dubai', 11, 38, 3.7);
  
  new Shop('Paris', 20, 38, 2.3);
  
  new Shop('Lima', 2, 16, 4.6);
