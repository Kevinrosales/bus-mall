'use strict';

var imgElement1 = document.getElementById('slot1');
var imgElement2 = document.getElementById('slot2');
var imgElement3 = document.getElementById('slot3');
var randomNumber1
var randomNumber2
var randomNumber3
// var detail = document.getElementById('detail');
var maxClicksAllowed = 25;
var ctx = document.getElementById("myChart");
// var detail = document.getElementById('detail');

function Item(filepath, fileName, numberOfTimesShown =0, votes =0) {
    this.imgSource = filepath;  
    this.fileName = fileName;
    this.numberOfTimesShown = numberOfTimesShown;
    this.votes = votes;
    Item.allItems.push(this);
}

Item.allItems = [];

function randomize(){
    var rando = Math.floor(Math.random()*Item.allItems.length);
    return rando;
}

function initializeDatabase(){
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
}

function setupEventListeners(){
    imgElement1.addEventListener('click', eventHandler);
    imgElement2.addEventListener('click', eventHandler);
    imgElement3.addEventListener('click', eventHandler);
}

function removeEventListener(){
    imgElement1.addEventListener('click', eventHandler);
    imgElement2.addEventListener('click', eventHandler);
    imgElement3.addEventListener('click', eventHandler);
}

function eventHandler(event){
    var imageName = event.target.alt;
    for (var i=0; i<Item.allItems.length; i++) {
        if(Item.allItems[i].fileName === imageName) {
            Item.allItems[i].votes++;
            maxClicksAllowed--;
            break;
        }
    }

    if(maxClicksAllowed === 0) {
        removeEventListener();
        summarizeData();
        return;
    }

    randomNumber1 = randomize();
    randomNumber2 = randomize();
    while(randomNumber1 === randomNumber2){
        randomNumber2 = randomize();
    }
    randomNumber3 = randomize();
    while(randomNumber1 === randomNumber3){
        randomNumber3 = randomize();
    }
    while(randomNumber2 === randomNumber3){
        randomNumber3 = randomize();
    }

    imgElement1.src = Item.allItems[randomNumber1].imgSource;
    imgElement1.alt = Item.allItems[randomNumber1].fileName;
    Item.allItems[randomNumber1].numberOfTimesShown++;

    imgElement2.src = Item.allItems[randomNumber2].imgSource;
    imgElement2.alt = Item.allItems[randomNumber2].fileName;
    Item.allItems[randomNumber2].numberOfTimesShown++;
    
    imgElement3.src = Item.allItems[randomNumber3].imgSource;
    imgElement3.alt = Item.allItems[randomNumber3].fileName;
    Item.allItems[randomNumber3].numberOfTimesShown++;
}


// function summarizeData() {
//     var ul = document.createElement('ul');

//     for(var i=0; i<Item.allItems.length; i++) {
//         var li = document.createElement('li');
//         li.textContent = `
//         ${Item.allItems[i].fileName}
//         Views: ${Item.allItems[i].numberOfTimesShown}
//         votes: ${Item.allItems[i].votes}
//         `;
//     ul.appendChild(li);
//     }
//     detail.appendChild(ul);
// }
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Bag", "Banana", "Bathroom", "Boots", "Breakfast", "Bubblegum", "Chair", "Cthulhu", "Dog-Duck", "Dragon", "Pen", "Pet Sweep", "Scissors", "Shark", "Sweep", "Tauntaun", "Unicorn", "Usb", "Water Can", "Wine Glass"],
        datasets: [{
            label: '# of votes',
            data: [Item.allItems[0].votes, Item.allItems[1].votes, Item.allItems[2].votes, Item.allItems[3].votes, Item.allItems[4].votes, Item.allItems[5].votes, Item.allItems[6].votes, Item.allItems[7].votes, Item.allItems[8].votes, Item.allItems[9].votes, Item.allItems[10].votes, Item.allItems[11].votes, Item.allItems[12].votes, Item.allItems[13].votes, Item.allItems[14].votes, Item.allItems[15].votes, Item.allItems[16].votes, Item.allItems[17].votes, Item.allItems[18].votes, Item.allItems[19].votes,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)' ,
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        title:{
            display: true,
            text: 'Results of Survey'
        },
        scales: {
            gridLines:[{
                tickMarkLength: 50
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 1, 
                },
                weight: -20
            }]
        }
    
    }
});

initializeDatabase();
setupEventListeners();\
