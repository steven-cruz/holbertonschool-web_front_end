//Global variable
let globalVariable = "Welcome";

// outer function without parameters, shows an alert.
function outer(){
    alert (globalVariable);

    // local variable
    let course = "Holberton";

    function inner(){
        alert(globalVariable + ' ' + course);

        let exclamation = '!';
        
        function inception() {
            // alerts a concatenated message
            alert(globalVariable + ' ' + course + exclamation);    
        }
        // call the function
        inception();
    }
    inner(); 
}
outer();
