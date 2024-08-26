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




//Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.


function myFunction(a, b) {
    let occ = 0;
    let arr = b.split("");
    arr.forEach((char) => {
        if (a === char) {
            occ++;
        }
    });
    return occ;
}

//other approach 



//myFunction('?', 'how many times does the character occur in this sentence?')


//Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

function muFunction(a,n) {

    return a[n-1]
    
}

muFunction([1,2,3,4,5],3)









//myFunction([1,2,3,4,5],3)
//Expected3

//myFunction([10,9,8,7,6],5)
//Expected6

//myFunction([7,2,1,6,3],1)
//Expected7