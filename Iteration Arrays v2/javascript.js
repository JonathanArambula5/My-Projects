const fruit = ["Grapes", "Banana", "Apple", "Jackfruit"];
let fruits = ""

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

fruit.forEach(myButon);

function myButon(value){
    fruits  += value + "<br>"
};

function myButton(){
    fruit.sort(function(){return 0.5 - Math.random()});
    document.getElementById('Button').innerHTML = fruit;
}