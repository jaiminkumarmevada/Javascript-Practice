// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

function myFunction(a, b) {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}



//console.log(myFunction(' think, therefore I am', 'I'))
//Expected 'I think, therefore I am'


//myFunction('lips', 's')
//Expected 'slips'



//Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

function oddeven(a){

    return a%2===0?true:false
}
//console.log(addeven(10))
// output true