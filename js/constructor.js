var patStores = [];
var allStoresTotals = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','TOTAL'];
var storeTable = document.getElementById('stores');
renderTimeHeader();
function Store(id, name, minCust, maxCust, avgCookieCust){ 
    this.id = id;
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieCust = avgCookieCust;
    this.storeHours = 14;
    this.custDay = [];
    this.cookieSoldDay = [];
    this.cookieDayTotal = 0;
    patStores.push(this);
    this.custHour();
    this.cookieSoldHour();
    this.render();
}
Store.prototype.custHour = function(){
    for (var i = 0; i<this.storeHours; i++){
        this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
    }
};
Store.prototype.cookieSoldHour = function(){
    for(var i=0; i<this.storeHours; i++){
        this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
        this.cookieDayTotal = this.cookieDayTotal + this.cookieSoldDay[i];
        
        if (this.cookieSoldDay.length === this.storeHours ){
            this.cookieSoldDay.push(this.cookieDayTotal);
        }
    }  
};
Store.prototype.render = function() {
    var trEl = document.createElement('tr'); // create tr
    var tdEl = document.createElement('td'); // create td
    tdEl.textContent = this.name; // give td content (Name for an individual store)
    trEl.appendChild(tdEl);  // append the td

    for(var i=0; i<hours.length; i++){
        tdEl = document.createElement('td'); // create td
        tdEl.textContent = this.cookieSoldDay[i]; // give td content (Name for an individual store)
        trEl.appendChild(tdEl); // append the td
    }
    storeTable.appendChild(trEl); // append the tr
} 

new Store('alkiStore', 'Alki Store', 2, 16, 4.6);
new Store('pikeStore','Pike Store', 23, 65, 6.3,);
new Store('seaTacStore', 'SeaTac Store', 3, 24, 1.2);
new Store('capHillStore', 'Capital Hill Seattle', 23, 65, 6.3);
new Store('seaCenterStore','Seattle Center Store', 11, 38, 3.7);

function renderTimeHeader(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Locations';
    trEl.appendChild(thEl);
    for (var i=0; i<hours.length; i++){
        thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    storeTable.appendChild(trEl);
}
//All Stores Total for Day Row
function renderAllStoresDayTotal(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
    for( var i=0; i<hours.length; i++){
        thEl = document.createElement('th');
        thEl.textContent = allStoresTotals[i];
        trEl.appendChild(thEl);
    }
    storeTable.appendChild(trEl);
}
function allStoresTotal(){
    for(var i = 0; i<hours.length; i++){
        var totals=0;
        for(var j = 0; j< patStores.length; j++){
            totals+=patStores[j].cookieSoldDay[i];
        }
        allStoresTotals.push(totals);
    }
}

allStoresTotal();
renderAllStoresDayTotal();