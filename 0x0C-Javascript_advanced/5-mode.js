/*
    create the changeMode function that receives 5 parameters.
    - size : number
    - weight, trasform, backgroud, color : string
*/

function changeMode(size, weight, transform, background, color){
    return function(){
        /*
            we access the document and css we name the attribute to modify
            and assign it to the parameter received from the function
        */
        document.documentElement.style["font-size"] = size;
        document.documentElement.style["font-weight"] = weight;
        document.documentElement.style["text-transform"] = transform;
        document.documentElement.style["background-color"] = background;
        document.documentElement.style["color"] = color;
    }

}

// the main function is created
function main() {

    // create the variable and send the content to changeMode
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    // Add a paragraph to the body of the page with the text Welcome Holberton!
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!"
    document.body.appendChild(paragraph);

    // Add a button to the body with the text Spooky
    const buttonSpooky = document.createElement("button");
    buttonSpooky.innerHTML = "Spooky";
    buttonSpooky.onclick = function () {spooky();};
    document.body.appendChild(buttonSpooky);

    // Add a button to the body with the text Dark mode
    buttonDark = document.createElement("button");
    buttonDark.innerHTML = "Dark mode";
    buttonDark.onclick = function() {darkMode();};
    document.body.appendChild(buttonDark);

    // Add a button to the body with the text Scream mode
    const buttonScream = document.createElement("button");
    buttonScream.innerHTML = "Scream mode";
    buttonScream.onclick = function() {screamMode();;}
    document.body.appendChild(buttonScream);

    // When clicking on each button, the page CSS should change to the different themes you created previously
}
// Call the main function
main();
