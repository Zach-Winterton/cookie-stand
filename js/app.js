'use strict';
//console.log(hello-world)


  let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    const seattleList = document.getElementById('seattle-list');

  let seattleShop = {
  location: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  averageCookieSale: 6.3,
  cookiesPurchasedPerHourArray:[],
  totalDailySales: 0,
  randomNumberCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin);
  },

  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customer = this.randomNumberCustomersPerHour();
      let cookies = Math.ceil(this.averageCookieSale * customer);
      this.cookiesPurchasedPerHourArray.push(cookies);
      this.totalDailySales += cookies;
    }
  },
    render: function () {
    this.cookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArray[i]} cookies`;
      seattleList.appendChild(li);
    }
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalDailySales} cookies`;
      seattleList.appendChild(liTotal);
  }
}; 
  
  

  const tokyoList = document.getElementById('tokyo-list');

  let tokyoShop = {
  location: 'Tokyo',
  customerMin: 3,
  customerMax: 24,
  averageCookieSale: 1.2,
  cookiesPurchasedPerHourArray:[],
  totalDailySales: 0,
  randomNumberCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin);
  },

  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customer = this.randomNumberCustomersPerHour();
      let cookies = Math.ceil(this.averageCookieSale * customer);
      this.cookiesPurchasedPerHourArray.push(cookies);
      this.totalDailySales += cookies;
    }
  },
    render: function () {
    this.cookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArray[i]} cookies`;
      tokyoList.appendChild(li);
    }
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalDailySales} cookies`;
      tokyoList.appendChild(liTotal);
  }
}; 

  
const dubaiList = document.getElementById('dubai-list');

let dubaiShop = {
location: 'Dubai',
customerMin: 11,
customerMax: 38,
averageCookieSale: 3.7,
cookiesPurchasedPerHourArray:[],
totalDailySales: 0,
randomNumberCustomersPerHour: function () {
  return Math.floor(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin);
},

cookiesPerHour: function () {
  for (let i = 0; i < hours.length; i++) {
    let customer = this.randomNumberCustomersPerHour();
    let cookies = Math.ceil(this.averageCookieSale * customer);
    this.cookiesPurchasedPerHourArray.push(cookies);
    this.totalDailySales += cookies;
  }
},
  render: function () {
  this.cookiesPerHour();
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArray[i]} cookies`;
    dubaiList.appendChild(li);
  }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.totalDailySales} cookies`;
    dubaiList.appendChild(liTotal);
}
}; 
  

const parisList = document.getElementById('paris-list');

let parisShop = {
location: 'Paris',
customerMin: 20,
customerMax: 38,
averageCookieSale: 2.3,
cookiesPurchasedPerHourArray:[],
totalDailySales: 0,
randomNumberCustomersPerHour: function () {
  return Math.floor(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin);
},

cookiesPerHour: function () {
  for (let i = 0; i < hours.length; i++) {
    let customer = this.randomNumberCustomersPerHour();
    let cookies = Math.ceil(this.averageCookieSale * customer);
    this.cookiesPurchasedPerHourArray.push(cookies);
    this.totalDailySales += cookies;
  }
},
  render: function () {
  this.cookiesPerHour();
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArray[i]} cookies`;
    parisList.appendChild(li);
  }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.totalDailySales} cookies`;
    parisList.appendChild(liTotal);
}
}; 


const limaList = document.getElementById('lima-list');

let limaShop = {
location: 'Lima',
customerMin: 2,
customerMax: 16,
averageCookieSale: 4.6,
cookiesPurchasedPerHourArray:[],
totalDailySales: 0,
randomNumberCustomersPerHour: function () {
  return Math.floor(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin);
},

cookiesPerHour: function () {
  for (let i = 0; i < hours.length; i++) {
    let customer = this.randomNumberCustomersPerHour();
    let cookies = Math.ceil(this.averageCookieSale * customer);
    this.cookiesPurchasedPerHourArray.push(cookies);
    this.totalDailySales += cookies;
  }
},
  render: function () {
  this.cookiesPerHour();
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArray[i]} cookies`;
    limaList.appendChild(li);
  }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.totalDailySales} cookies`;
    limaList.appendChild(liTotal);
}
}; 


  seattleShop.render();
  tokyoShop.render();
  dubaiShop.render();
  parisShop.render();
  limaShop.render();
