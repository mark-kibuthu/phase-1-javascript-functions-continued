// code your solution here
function saturdayFun(activity = 'roller-skate'){
return `This Saturday, I want to ${activity}!`
}
saturdayFun()

const mondayWork = function(activity = 'go to the office'){
    console.log(`On Mondays, ${activity}.`);
}


const wrapAdjective = function(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}