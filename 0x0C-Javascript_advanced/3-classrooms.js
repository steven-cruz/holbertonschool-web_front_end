// create the function createClassRoom and receive the parameter numbersOfStudents of type number
function createClassRoom(numbersOfStudents){
    /* 
        studentSeat function that takes a seat argument and returns
        a function that returns the seat number
    */
    function studentSeat(seat){
        return function(){
            return seat;
        }
    }
    //  variable array
    let students = [];

    /*
        a loop from 0 to numbersOfStudents, pass iteration
        number + 1 to studentSeat and add its return value to student array
    */
    for(let i = 0; i < numbersOfStudents; i++){
        students.push(studentSeat(i+1));
    }
    return students;
}
// closing classRoom, calling createClassRoom with 10 students
let classRoom = createClassRoom(10);
