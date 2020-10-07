'use strict';
var allDevices = [];
var tableHead = ['Device Name', 'Quantity', 'Unit Price', 'Category'];
var table = document.getElementById('order-table');

if(localStorage.getItem('devices')){
    var allStorage = JSON.parse(localStorage.getItem('devices'));
    for(var i=0; i<allStorage.length; i++){
      new Device(allStorage[i].name, allStorage[i].quantity, allStorage[i].category);
    }
}

function Device (name, quantity, category) {
  this.name= name;
  this.quantity = quantity;
  this.category = category;
  this.price = 0;
  allDevices.push(this);
}

Device.prototype.generateRnadomNum = function(){
  this.price = Math.floor((Math.random() (750 * 350) + 350));
};

Device.prototype.addRow = function(){
    var row = document.createElement('tr');
    table.appendChild(row);

    var td1 = document.createElement('td');
    td1.textContent = this.name;
    row.appendChild(td1);

    var td2= document.createElement('td');
    td2.textContent = this.quantity;
    row.appendChild(td2)

    

    var td4 = document.createElement('td');
    td4.textContent = this.price;
    row.appendChild(td4);


    var td3 = document.createElement('td');
    td3.textContent = this.category;
    row.appendChild(td3);

};
var deviceForm = document.getElementById('deviceForm');
deviceForm.addEventListener('submit', addDevice);

function addDevice (event){
    event.preventDefault();

    var name = event.target.name.value;
    var Quantity = event.target.quantity.value;
    var category = event.target.category.value;

  var addDevice = new Device(name, Quantity, category);
//   addDevice.generateRnadomNum();
  addDevice.addRow();

  localStorage.setItem('devices', JSON.stringify(allDevices));

}


function creatHeader (){
var headrow = document.createElement('tr');
table.appendChild(headrow);

var firstTd;
for( var i=0; i<tableHead.length; i++){
    firstTd = document.createElement('td');
    firstTd.textContent = tableHead[i];
    headrow.appendChild(firstTd);
  }
}

creatHeader();

for(var j =0; j<allDevices.length; j++){
    allDevices[j].addRow();
    // allStorage[j].generateRnadomNum();
}

