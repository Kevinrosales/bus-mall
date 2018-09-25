'use strict';

var imgElement1 = document.getElementById('slot1');
var imgElement2 = document.getElementById('slot2');
var imgElement3 = document.getElementById('slot3');
var randomNumber1;
var randomNumber2;
var randomNumber3;

Item.allItems = [];


function Item(filepath, itemName) {
    this.imgSource = filepath;
    this.itemName = itemName;
    this.timesViewed = 0;
    this.timeClicked = 0;
    Item.allItems.push(this);
}

function randomItem() {
    randomNumber1 = Math.floor(Math.random() * Item.allItems.length);
    imgElement1.src = Item.allItems[randomNumber1].imgSource;
    imgElement1.alt = Item.allItems[randomNumber1].itemName;

    randomNumber2 = Math.floor(Math.random() * Item.allItems.length);
    imgElement2.src = Item.allItems[randomNumber2].imgSource;
    imgElement2.alt = Item.allItems[randomNumber2].itemName;
   
    randomNumber3 = Math.floor(Math.random() * Item.allItems.length);
    imgElement3.src = Item.allItems[randomNumber3].imgSource;
    imgElement3.alt = Item.allItems[randomNumber3].itemName;
}

imgElement1.addEventListener('click', randomItem);
imgElement2.addEventListener('click', randomItem);
imgElement3.addEventListener('click', randomItem);

new Item('img/bag.jpg','bag');
new Item('img/banana.jpg','banana');
new Item('img/bathroom.jpg','bathroom');
new Item('img/boots.jpg','boots');
new Item('img/breakfast.jpg','breakfast');
new Item('img/bubblegum.jpg', 'bubblegum');
new Item('img/chair.jpg', 'chair');
new Item('img/cthulhu.jpg', 'cthulhu');
new Item('img/dog-duck.jpg', 'dog-duck');
new Item('img/dragon.jpg', 'dragon');
new Item('img/pen.jpg', 'pen');
new Item('img/pet-sweep.jpg', 'pet-sweep');
new Item('img/scissors.jpg', 'scissors');
new Item('img/shark.jpg', 'shark');
new Item('img/sweep.png', 'sweep');
new Item('img/tauntaun.jpg', 'tauntaun');
new Item('img/unicorn.jpg', 'unicorn');
new Item('img/usb.gif', 'usb');
new Item('img/water-can.jpg', 'water-can');
new Item('img/wine-glass.jpg', 'wine-glass');

randomItem();