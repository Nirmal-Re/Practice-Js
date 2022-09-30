// 2 teams
// Each compete 3 times and average 3 scores is calculated

'use strict'

const calcAverage = (scoreArray) => {
    let total = 0;
    for (let i = 0; i<scoreArray.length; i++){
        total = total + scoreArray[i]
    }
    const average = total/scoreArray.length
    return average;

}
const team1 = [1, 2, 90]
const team2 = [1, 1, 1]

const ave1 = calcAverage(team1)
const ave2 = calcAverage(team2)

console.log('iuahgiuhag')

const checkWinner = (ave1, ave2)=>{
    if (ave2 >= ave1*3){
        console.log('Team 2 is the winner')
    } else if(ave1>=ave2*3){
        console.log('Team 1 is the winner')
    } else {
        console.log('Draw')
    }

}

checkWinner(ave1, ave2)