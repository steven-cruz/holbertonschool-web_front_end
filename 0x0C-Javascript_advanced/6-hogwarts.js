// Write a module named studentHogwarts
function studentHogwarts(){
    let privateScore = 0;
    let name = null;

    // changeScoreBy private method that takes points
    // as an argument and adds it to privateScore
    let changeScoreBy = function(points){
        privateScore += points;
    }

    /* 
        The module gives access to four public
        methods (return an object)
    
    */

    // setName, it takes into argument newName, and set the private variable name
    this.setName = function(newName){
        name = newName;
    }

    // rewardStudent, it calls the method changeScoreBy with 1
    this.rewardStudent = function (){
        changeScoreBy(1);
    }

    // penalizeStudent, it calls the method changeScoreBy with -1
    this.penalizeStudent = function(){
        changeScoreBy(-1);
    }

    // getScore, it returns name: score (ex: Harry: 14)
    this.getScore = function (){
        return name + ': ' + privateScore;
    }
}

// create the variable harry and assign it an instance of studentHogwarts
let harry = new studentHogwarts();
// Set the name of the object to Harry
harry.setName("Harry");
// Reward the student four times
for (let reward = 1; reward <= 4; reward++) harry.rewardStudent();
// prints the name and score to the console
console.log(harry.getScore());

// create the variable draco and assign it an instance of studentHogwarts
let draco = new studentHogwarts();
// Sets the name of the object to Draco
draco.setName("Draco")
// Reward the student one time
draco.rewardStudent();
// Penalize the student three times
for (let penalize = 0; penalize <= 2; penalize++) draco.penalizeStudent();
// prints the name and score to the console
console.log(draco.getScore());
