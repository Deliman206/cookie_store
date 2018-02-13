var patStores = [];
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
Store.prototype.render = function(){
    this.custHour();
    this.cookieSoldHour();
    var ulEl = document.getElementById(this.id);
    for (var i=0; i<=this.storeHours+1; i++){
        //create element
        var liEl = document.createElement('li');
        //give it content
        liEl.textContent = hours[i] + ': '+ this.cookieSoldDay[i];
        //append to DOM
        //parent.appendChild(child)
        ulEl.appendChild(liEl);
    }
};
new Store('alkiStore', 'Alki Store', 2, 16, 4.6);
patStores.push()
console.log(Store[0]);