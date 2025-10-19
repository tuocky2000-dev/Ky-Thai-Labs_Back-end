function isLeapYear(year){
    return (year % 4 ==0 && year % 100 !=0) || (year % 400 ==0);
}

function getDayOfTheWeek(year, month, day){
    const daysOftheWeek= ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const step1= Math.floor((year % 100) / 12)
    const step2= (year % 100) % 12
    const step3= Math.floor(step2 /4)
    const step4= day
    const monthCodes = {
    1: 1,  
    2: 4,  
    3: 4,  
    4: 0,  
    5: 2,
    6: 5, 
    7: 0, 
    8: 3, 
    9: 6, 
    10: 1,
    11: 4, 
    12: 6  
    };
    let centuryOffSet=0;
    let century= Math.floor(year/100);
    if (century==16){
        centuryOffSet=6
    }else if (century==17){
        centuryOffSet=4
    }else if (century==18){
        centuryOffSet=2
    }else if (century==20){
        centuryOffSet=6
    }else if (century==21){
        centuryOffSet=4
    }else {
        centuryOffSet=0
    }
    let step5= monthCodes[month] + centuryOffSet
    if (isLeapYear(year)==true && (month==1||month==2)){
        step5 = step5 -1
    }
    const step6= (step1 + step2 + step3 + step4 + step5)%7

    return daysOftheWeek[step6]
}
function makeCalendar(year) {
    let febDays;
    if (isLeapYear){
        febDays=29
    }else{
        febDays=28
    }
    const daysInMonth = {
        1: 31,
        2: febDays,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };
    
        for (let month = 1; month <= 12; month++) {
          for (let day = 1; day <= daysInMonth[month]; day++) {
            const dayOfTheWeek = getDayOfTheWeek(year, month, day);
            console.log(`${month}-${day}-${year} is a ${dayOfTheWeek}.`);
        }
        }
}~
makeCalendar(2018)
getDayOfTheWeek(2019, 12, 25)

module.exports= {isLeapYear, getDayOfTheWeek, makeCalendar};