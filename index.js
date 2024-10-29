var arr = [2, 3, 4, 5, 6, 7, 8];
let squares = []; 

for (var num of arr) {
    squares.push(num ** 2); 
}

console.log(squares);

var data = {
    Name: 'Senai',
    level: 15,
    difficulty: 'Extreme'

};
for( var i in data){
    console.log(`${i}: --- ${data[i]}` );
}

function delay(stringe) {
    for (let i in stringe) {
        setTimeout(function() {
            console.log(stringe[i]);
        }, 1000 * (parseInt(i) + 1)); 
    }
}

// Example usage
const x = 'three';
delay(x); 







