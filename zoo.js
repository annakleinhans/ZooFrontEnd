var animalPopulation = 0;
id = 1;

$(document).ready(function(){
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var gemma = new Giraffe("Gemma");
    var rarity = new Unicorn("Rarity");
    var stinger = new Bees("Stinger");
    allAnimals = [ tigger, pooh, gemma, rarity, stinger];

    $("#createAnimal").click(function(){
        createAnimal();
    });

    $("#food").click(function(){
        feedAnimals();
    });

    listAnimals();

});


function createAnimal(){
    var animalType = $("#animalSelector").val();
    var animalName = $("#naming").val();
    var animal;
        switch(parseInt(animalType)){
            case 0:
                break;
            case 1:
                animal = new Tiger (animalName);
                break;
            case 2:
                animal = new Bear (animalName);
                break;
            case 3:
                animal = new Giraffe (animalName);
                break;
            case 4:
                animal = new Unicorn (animalName);
                break;
            case 5:
                animal = new Bee (animalName);
                break;
        }

    console.log(animal);
    $("#animalCage").html(animal.name);
    allAnimals.push(animal);
    listAnimals();
}


function feedAnimals(){
    $("#animalMeals").empty();
    var animalFood = $("#animalMeals option:selected").text();
    for(var i= 0; i < allAnimals.length; i++){
        allAnimals[i].eat(animalFood);
    }
    console.log(animalFood);
   }


// this should go into the animal cage div
function listAnimals(){
    for(var i = 0; i< allAnimals.length; i++){
        console.log(allAnimals);
        $("#animalCage").append(allAnimals);
    }
    $("#animalCage").empty();
    for(var i = 0; i < allAnimals.length; i++){
      //  $("#animalCage").append(allAnimals[i].id);
        $("#animalCage").append(allAnimals[i].name + " the " + allAnimals[i].constructor.name + "." + "<br>");
        $("#animalCage").append(allAnimals[i].name + "'s favorite food is " + allAnimals[i].favoriteFood + "." + "<br><br>");

    }
}



// function deleteAnimal(id){
//      $("#removeMe").click(function(){
//          for (var i = 0; i < allAnimals.length; i++){
//              if ()
//          }
//     })
//
//     //listAnimals();
// }

// <a href="#" onclick="deleteAnimal(allAnimals[i].id)">XXXXX</a>



//a function which receives an animal name/id from an onclick
// handler and removes that object from the allAnimals array.
// Use array.splice(indexToRemove, itemsToRemove) to remove the animal.
// Call listAnimals() when done.



class Zookeeper {

    constructor(name) {
        this.name = name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals of " + animalPopulation + " total animals.");
        for (var i =0; i < animals.length; i++){
            animals[i].eat(food);
        }
        /* not really sure if you meant you wanted the animal population
            displayed in the console alone or if you wanted it in the sentence above.
            If you want it to appear alone then all you have to do is
            uncomment the command below (it works).
         */

        //console.log(animalPopulation);
    }
}

class Animal {

    constructor (name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
        this.id = id++;
    }

    // static getPopulation(){
    //     return animalPopulation;
    // }

    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        // complete your eat function here!
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
}


class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }

}

class Unicorn extends Animal{
    constructor (name){
        super(name, "marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if (this.favoriteFood == food){
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        } else {
            this.sleep();
        }
    }
}

class Giraffe extends Animal {
    constructor (name){
        super (name, "leaves");
    }

    eat(food){
        if (this.favoriteFood == food){
            console.log("YUM!!! " + this.name + " wants more leaves");
            this.sleep();
        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
            console.log(this.name + " eats leaves");
        }
    }
}

class Bees extends Animal {
    constructor (name){
        super (name, "pollen");
    }

    sleep(){
        console.log(this.name + " never sleeps");

    }
    eat(food){
        if (food == this.favoriteFood){
            console.log("YUM!!! " + this.name + " wants more pollen");
            this.sleep();

        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
            console.log(this.name + " eats pollen");
        }
    }
}


class Bear extends Animal {

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }

    eat(food) {
        // complete your eat function here!
        console.log(this.name + " eats " + food);
        this.favoriteFood == food ? console.log("YUM!!! " + this.name + " wants more " + food) :
            this.sleep();

    }
}

// eat("Tigger", "meat");
// eat("Tigger", "bacon");
//
// var p1 = new Polygon(20, 40);
// var p2 = new Polygon(100, 200);
// p1.sayName();
// p2.sayHistory();
// class Polygon {
//
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //method #1
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     //method #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }


// function eat(name, food){
//     console.log(name + " eats " + food);
//  /*   if (favoriteFood == food){
//         console.log("YUM!!!" + name + " wants more " + food);
//     } else {
