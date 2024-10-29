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

function onesec(string) {
    for (let i in string) {
        setTimeout(() => {
            console.log(string[i]);
        }, i * 1000); 
    }
}


const newst = ['one', 'two', 'Three'];
onesec(newst);


