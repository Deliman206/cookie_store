'use strict';
// with for loop where i length is hours
// we get diff random numbers in each hour
// we also get diff # cookies sold per hour
// thus cookie total is the sum of many elements in an array

var alkiCookieStand = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCookieCust: 4.6,
    storeHours: 14,
    custDay: [],
    cookieSoldDay: [],
    custHour: function(){
        for (var i = 0; i< this.storeHours; i++){
            this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
            console.log(this.custDay);
        }
    },
    cookieSoldHour: function(){
        for(var i=0; i<this.storeHours; i++){
            this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
            console.log(this.cookieSoldDay);
        }
    },
    render: function(){
        var ulEl = document.getElementById('alkiStore');
        this.custHour();
        for (var i=0; i< this.custDay.length; i++){
            //create element
            var liEl = document.createElement('li');
            //give it content
            liEl.textContent = this.custDay[i];
            //append to DOM
            //parent.appendChild(child)
            ulEl.appendChild(liEl);
        }
        
        this.cookieSoldHour();
    }
};
// alkiCookieStand.custHour();
// alkiCookieStand.cookieSoldHour();
alkiCookieStand.render();