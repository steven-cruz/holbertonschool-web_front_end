function welcome(firstName, LastName){
    const fullName = firstName + " " + LastName

    function displayFullName(){
        alert(`Welcome ${fullName}!`)
    }

    displayFullName()
}