var patStores = [];
var allStoresTotals = [];
var allStoresCustTotals= [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','TOTAL'];
var storeTable = document.getElementById('stores');
var dataForm = document.getElementById('data-form');
function Store(name, minCust, maxCust, avgCookieCust){ 
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
}
//Populates this.custDay[]
Store.prototype.custHour = function(){
    for (var i = 0; i<this.storeHours; i++){
        this.custDay.push(Math.floor(Math.random()*(this.maxCust-this.minCust)+this.minCust));
    }
};
//Populates this.cookieSoldDay[] and calculates this.cookieDayTotal
Store.prototype.cookieSoldHour = function(){
    for(var i=0; i<this.storeHours; i++){
        this.cookieSoldDay.push(Math.ceil(this.avgCookieCust * this.custDay[i]));
        this.cookieDayTotal = this.cookieDayTotal + this.cookieSoldDay[i];
        
        if (this.cookieSoldDay.length === this.storeHours ){
            this.cookieSoldDay.push(this.cookieDayTotal);
        }
    }  
};
//Creates Table Data for Sales. Includes Location and Data for Sales
Store.prototype.render = function() {
    var trEl = document.createElement('tr'); // create tr
    var tdEl = document.createElement('td'); // create td
    tdEl.textContent = this.name; // give td content (Name for an individual store)
    trEl.appendChild(tdEl);  // append the td

    for(var i=0; i<hours.length; i++){
        tdEl = document.createElement('td'); // create td
        tdEl.textContent = this.cookieSoldDay[i]; // give td content (Cookies Sold for an individual store)
        trEl.appendChild(tdEl); // append the td
    }
    storeTable.appendChild(trEl); // append the tr
}
//Creates Table Data for Customers. Includes Location and Data for Sales
Store.prototype.renderCust = function() {
    var trEl = document.createElement('tr'); // create tr
    var tdEl = document.createElement('td'); // create td
    tdEl.textContent = this.name; // give td content (Name for an individual store)
    trEl.appendChild(tdEl);  // append the td

    for(var i=0; i<hours.length; i++){
        tdEl = document.createElement('td'); // create td
        tdEl.textContent = this.custDay[i]; // give td content (Cookies Sold for an individual store)
        trEl.appendChild(tdEl); // append the td
    }
    storeTable.appendChild(trEl); // append the tr
}
//Handler for Submission Form
function handleDataSubmit(event){
    event.preventDefault();
    if (!event.target.storeLocation.value||!event.target.minCust.value||!event.target.maxCust.value||!event.target.avgSale.value){
        return alert('Fields cannot be empty!');
    }
    var name = event.target.storeLocation.value;
    var min = parseInt(event.target.minCust.value);
    var max = parseInt(event.target.maxCust.value);
    var avg = parseFloat(event.target.avgSale.value);

    for(var i=0; i< patStores.length; i++){
        if(name === patStores[i].name){
            patStores[i].custDay= [];
            patStores[i].cookieSoldDay =[];
            patStores[i].cookieDayTotal =0;

            patStores[i].minCust=min;
            patStores[i].maxCust=max;
            patStores[i].avgCookieCust=avg;

            patStores[i].custHour();
            patStores[i].cookieSoldHour();

            event.target.reset();
            renderAllStores();
            return;
        }
    }
    //Create New Store Object
    var newStore = new Store(name,min,max,avg);
    //Clears Submission Form
    event.target.reset();
    //Pushes New Store Object into Store Array
    renderAllStores();
}
//Creates Row for Times
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
//Creates Row for Total Sales of Company at each Time
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
//Creates Row for Total Customers of Company at each Time
function renderAllStoresCustTotal(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
    for( var i=0; i<hours.length; i++){
        thEl = document.createElement('th');
        thEl.textContent = allStoresCustTotals[i];
        trEl.appendChild(thEl);
    }
    storeTable.appendChild(trEl);
}
//Creates Data for Total Sales of Company at each Time
function allStoresTotal(){
    allStoresTotals = [];
    for(var i = 0; i<hours.length; i++){
        var totals=0;
        for(var j = 0; j< patStores.length; j++){
            totals+=patStores[j].cookieSoldDay[i];
        }
        allStoresTotals.push(totals);
    }
}
//Creates Data for Total Customers of Company at each Time
function createCustTotal(){
    allStoresCustTotals = [];
    for(var i = 0; i<hours.length; i++){
        var totals=0;
        for(var j = 0; j< patStores.length; j++){
            totals+=patStores[j].custDay[i];
        }
        allStoresCustTotals.push(totals);
    }
}
//Clears the Table and Reloads Everytime New Data is Entered
function renderAllStores(){
    storeTable.innerHTML ='';
    //Calls First Row with Company Hours
    renderTimeHeader();
    for(var i=0; i<patStores.length; i++){
        patStores[i].render();
    }
    //Calls Final Row with Company Totals
    allStoresTotal();
    renderAllStoresDayTotal();
}

//Inputs for Stores and Data
new Store('Alki Store', 2, 16, 4.6);
new Store('Pike Store', 23, 65, 6.3,);
new Store('SeaTac Store', 3, 24, 1.2);
new Store('Capital Hill Seattle', 23, 65, 6.3);
new Store('Seattle Center Store', 11, 38, 3.7);
//Listens for SUBMIT and the does function handleDataSubmit
dataForm.addEventListener('submit', handleDataSubmit);
renderAllStores();