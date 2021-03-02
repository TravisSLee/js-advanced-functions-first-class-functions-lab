// Code your solution in this file!

const returnFirstTwoDrivers = function(arr){
    let newArr = [];
    var i;
    for ( i = 0; i <= 1; i++) {
        newArr.push(arr[i]);
    };
    return newArr
}

const returnLastTwoDrivers = function(arr){
    let newArr = [];
    var i;
    for ( i = arr.length - 1; i <= arr.length; i++) {
        newArr.push(arr[i - 1])
    };
    return newArr
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    }
}

const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(arr, doThis){
    return doThis(arr);
}