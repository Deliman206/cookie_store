var patStores = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','TOTAL'];
var storeTable = document.getElementById('stores');
render2();
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
    for (var i = 0; i<=this.storeHours; i++){
        this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
    }
};
Store.prototype.cookieSoldHour = function(){
    for(var i=0; i<=this.storeHours; i++){
        this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
        this.cookieDayTotal = this.cookieDayTotal + this.cookieSoldDay[i];
        
        if (this.cookieSoldDay.length === this.storeHours+1 ){
            this.cookieSoldDay.push(this.cookieDayTotal);
        }
    }  
};
Store.prototype.render = function() {
    // create tr
    var trEl = document.createElement('tr');
    // create td
    var tdEl = document.createElement('td');
    // give td content (Name for an individual store)
    tdEl.textContent = this.name;
    // append the td
    trEl.appendChild(tdEl);

    for(var i=0; i<hours.length; i++){
    // create td
    tdEl = document.createElement('td');
    // give td content (Name for an individual store)
    tdEl.textContent = this.cookieSoldDay[i];
    // append the td
    trEl.appendChild(tdEl);
    }
    storeTable.appendChild(trEl);
} 
new Store('alkiStore', 'Alki Store', 2, 16, 4.6);
new Store('pikeStore','Pike Store', 23, 65, 6.3,);
new Store('seaTacStore', 'SeaTac Store', 3, 24, 1.2);
new Store('capHillStore', 'Capital Hill Seattle', 23, 65, 6.3);
new Store('seaCenterStore','Seattle Center Store', 11, 38, 3.7);

function render2(){
    var trEl = document.getElementById(storeTable);
    trEl = document.createElement('tr');
    for (var i=0; i<hours.length; i++){
        var thEl = document.createElement('th');
        thEl.textcontent = hours[i];
        trEl.appendChild(thEl);
    }
    storeTable.appendChild(trEl);
}