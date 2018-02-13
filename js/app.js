'use strict';

//Try to remember to do a table for results. Box in sloppy.

// with for loop where i length is hours
// we get diff random numbers in each hour
// we also get diff # cookies sold per hour
// thus cookie total is the sum of many elements in an array
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//Cookie Stand Alki
var alkiCookieStand = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCookieCust: 4.6,
    storeHours: 14,
    custDay: [],
    cookieSoldDay: [],
    custHour: function(){
        for (var i = 0; i<=this.storeHours; i++){
            this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
            console.log(this.custDay);
        }
    },
    cookieSoldHour: function(){
        for(var i=0; i<=this.storeHours; i++){
            this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
            console.log(this.cookieSoldDay);
        }
    },
    render: function(){
        this.custHour();
        this.cookieSoldHour();
        var ulEl = document.getElementById('alkiStore');
        for (var i=0; i<=this.storeHours; i++){
            //create element
            var liEl = document.createElement('li');
            //give it content
            liEl.textContent = hours[i] + ': '+ this.cookieSoldDay[i];
            //append to DOM
            //parent.appendChild(child)
            ulEl.appendChild(liEl);
        }
    }
};
//Cookie Stand Pike
var pikeCookieStand = {
    name: 'Pike',
    minCust: 23,
    maxCust: 65,
    avgCookieCust: 6.3,
    storeHours: 14,
    custDay: [],
    cookieSoldDay: [],
    custHour: function(){
        for (var i = 0; i<=this.storeHours; i++){
            this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
            console.log(this.custDay);
        }
    },
    cookieSoldHour: function(){
        for(var i=0; i<=this.storeHours; i++){
            this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
            console.log(this.cookieSoldDay);
        }
    },
    render: function(){
        this.custHour();
        this.cookieSoldHour();
    var ulEl = document.getElementById('pikeStore');
    for (var i=0; i<=this.storeHours; i++){
        //create element
        var liEl = document.createElement('li');
        //give it content
        liEl.textContent = hours[i] + ': '+ this.cookieSoldDay[i];
        //append to DOM
        //parent.appendChild(child)
        ulEl.appendChild(liEl);
    }
}
};
//Cookie Stand SeaTac
var seaTacCookieStand = {
    name: 'SeaTac',
    minCust: 3,
    maxCust: 24,
    avgCookieCust: 1.2,
    storeHours: 14,
    custDay: [],
    cookieSoldDay: [],
    custHour: function(){
        for (var i = 0; i<=this.storeHours; i++){
            this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
            console.log(this.custDay);
        }
    },
    cookieSoldHour: function(){
        for(var i=0; i<=this.storeHours; i++){
            this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
            console.log(this.cookieSoldDay);
        }
    },
    render: function(){
        this.custHour();
        this.cookieSoldHour();
        var ulEl = document.getElementById('seaTacStore');
        for (var i=0; i<=this.storeHours; i++){
            //create element
            var liEl = document.createElement('li');
            //give it content
            liEl.textContent = hours[i] + ': '+ this.cookieSoldDay[i];
            console.log(this.cookieSoldDay[i]);
            //append to DOM
            //parent.appendChild(child)
            console.log(liEl);
            ulEl.appendChild(liEl);
        }
    }
};
//Capital Hill Cookie Stand
var capHillCookieStand = {
    name: 'Capital Hill',
    minCust: 23,
    maxCust: 65,
    avgCookieCust: 6.3,
    storeHours: 14,
    custDay: [],
    cookieSoldDay: [],
    custHour: function(){
        for (var i = 0; i<=this.storeHours; i++){
            this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
            console.log(this.custDay);
        }
    },
    cookieSoldHour: function(){
        for(var i=0; i<=this.storeHours; i++){
            this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
            console.log(this.cookieSoldDay);
        }
    },
    render: function(){
        this.custHour();
        this.cookieSoldHour();
        var ulEl = document.getElementById('capHillStore');
        for (var i=0; i<=this.storeHours; i++){
            //create element
            var liEl = document.createElement('li');
            //give it content
            liEl.textContent = hours[i] + ': '+ this.cookieSoldDay[i];
            //append to DOM
            //parent.appendChild(child)
            ulEl.appendChild(liEl);
        }
    }
};
alkiCookieStand.render();
pikeCookieStand.render();
seaTacCookieStand.render();
capHillCookieStand.render();