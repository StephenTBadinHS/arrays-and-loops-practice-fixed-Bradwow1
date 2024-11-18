const leapYears = function(year) {
    let checkYear = "";
    const isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    return isLeap ? (checkYear = "a Leap Year") : (checkYear = "not a Leap Year");
};

// Do not edit below this line
console.log(leapYears);
