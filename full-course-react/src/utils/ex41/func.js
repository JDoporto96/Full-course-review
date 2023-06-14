// var fs = require('fs');

function y(x,z){
    return( 20*x -40*z +500)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); }


export default function getDataPoints(){

    const dataPoints =[];
    for (let i = 0; i<=250; i++){
        let x = i;
        let z = getRandomIntInclusive(0,10)
        dataPoints.push({
            id:i,
            x:x,
            y:y(x,z)
        })
    };

    return {"dataPoints": dataPoints}
}

// const json = JSON.stringify(getDataPoints());
// console.log(json)
// fs.writeFile('dataFile.json', `${json}`, function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );


