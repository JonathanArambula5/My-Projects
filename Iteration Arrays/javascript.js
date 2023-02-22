//Array of zoo animals
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

let txt = ""
// Loop through the array to print each zoo animal
for (var i = 0; i < zooAnimals.length; i++){
    console.log(zooAnimals[i]);
}
zooAnimals.forEach(myFunction);

function myFunction(value){
    txt += value + "<br>"
};

function zoo(){
    document.getElementById('Zoo').innerHTML = txt
};