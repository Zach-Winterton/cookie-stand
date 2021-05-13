'use strict';

const myContainer = document.getElementById('container');
const seattlelist = document.getElementById('seattle-list');

let seattle = {
  location = 'Seattle',
  customerMin = '23',
  customerMax = '65',
  averageCookieSale = '6.3',
  cookiesPurchasedPerHour: [],
  totalCookieSales: 0,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  randomNumberCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin);
  },
cookieSales: function(){
  for (let i = 0; i < storeHoursArray.length; i++){
    let Sales = randomNumberCustomersPerHour();
    this.cookiesPurchasedPerHour.push(`${this.storeHoursArray[i]}: ${Sales}`);
    this.totalCookieSales += this.Sales;
    let li = document.createElement('li');
    li.textContent = `${storeHoursArray[i]}: ${this.cookiesPurchasedPerHour()} cookies`;
    seattlelist.appendChild(li);
  }
  let liTotal = document.createElement('li');
  li.textContent = `Total${this.totalCookieSales}`;
  seattlelist.appendChild(liTotal);
  return
}
  }
  seattle.totalCookieSales();


  renderToSales: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHour()} cookies`;
      seattleList.appendChild(li);
  //const tokyolist = document.getElementById('tokyo-list');

//let tokyo = {
  //location = 'Tokyo',
  //customerMin = '3',
  //customerMax = '24',
  //averageCookieSale = '1.2',
  //cookiesPurchasedPerHour: [],
  //totalCookieSales: 0,
  //storeHoursArray: ['6am, 7am, 8am, 9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm'],
  //randomNumberCustomersPerHour: function () {
  // return Math.floor(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin);
  },
  //cookieSales: function(){
    //for (let i=0; i<this.storeHoursArray.length; i++){
     // let Sales= this.randomNumberCustomersPerHour();
     // this.cookiesPurchasedPerHour.push(`${this.storeHoursArray[i]}: ${cookieSales}`);
     // this.totalCookieSales += this.cookieSales;
      //let li = document.createElement('Li');
      //li.textContent = `(${this.cookiesPurchasedPerHour[i]}) - Sold Product.`;
      //seattlelist.appendChild(li);
    }
   // let liTotal = document.createElement('li');
    //li.textContent = `Daily Total: (${this.totalCookieSales}) - Sold Product.`;
    //seattlelist.appendChild(liTotal);
   // return
  }
}

//tokyo.totalCookieSales();

//const dubailist = document.getElementById('dubai-list');

//let dubai = {
  //location = 'Dubai',
  //customerMin = '11',
  //customerMax = '38',
  //averageCookieSale = '3.7',

 // storeHoursArray: ['6am, 7am, 8am, 9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm'],
}

//const parislist = document.getElementById('paris-list');

//let paris = {
 // location = 'Paris',
 // customerMin = '20',
  //customerMax = '38',
  //averageCookieSale = '2.3',

  //storeHoursArray: ['6am, 7am, 8am, 9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm'],
}

//const limalist = document.getElementById('lima-list');

//let lima = {
 // location = 'Lima',
 // customerMin = '2',
 // customerMax = '16',
 // averageCookieSale = '4.6',

  //storeHoursArray: ['6am, 7am, 8am, 9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm'],
}
