const coffeeMenu = require("./coffee_data.js");


// print an array of drink names
const printName = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printName));

// print all items that are less than 5
const underFive = (item) => {
    return  item.price <= 5; 
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.table(itemsUnderFive);

// print all items that are even in price
const priceIsEven = (item) => {
    return item.price % 2 === 0;
}
const itemsPriceIsEven = coffeeMenu.filter(priceIsEven);
console.table(itemsPriceIsEven);

//print price of all items
const findPriceArray = (array) => {
    return array.price;
}       
const priceArray = coffeeMenu.map(findPriceArray);
console.log(priceArray);

// print total of all prices added to the array
const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumTotalCost);
console.log(totalPrice);

// print an array of all drinks that are seasonal 
const isSeasonal = (item) => {
    return item.seasonal;
}
const seasonalArray = coffeeMenu.filter(isSeasonal);
console.table(seasonalArray);

// loop thru add "with imported beans" to all seasonal drinks
for (let i = 0; i < coffeeMenu.length; i++){
    // check if drink is seasonal
    if (coffeeMenu[i].seasonal === true){
        // add "with imported beans" to drink
        coffeeMenu[i].name += " with imported beans";
        // log the updated drink name to the console
        console.log(coffeeMenu[i].name);
    }
}


