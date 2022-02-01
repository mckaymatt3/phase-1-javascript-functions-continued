// code your solution here
function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(emphasize = '*'){
    return function (adjective ='special') {
        return `You are ${emphasize}${adjective}${emphasize}!`}
}
