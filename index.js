function createEmployeeRecord(row){

    //let timeIn = []
    //let timeOut = []
    
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}


function createEmployeeRecords(arr){
    //arrEmplList = []
    return arr.map(record=>{
       //console.log(record)
     return createEmployeeRecord(record)})
    //return arrEmplList
}

function createTimeInEvent(obj,timeIn){
    let hours = timeIn.split(' ')
    //let record = createEmployeeRecord(obj)
    obj.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hours[1]),
        date: hours[0]
    })
    //console.log(obj)
    return obj

}

function createTimeOutEvent(obj, timeOut){
    let hours = timeOut.split(' ')
    //let record = createEmployeeRecord(obj)
    obj.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hours[1]),
        date: hours[0]
    })
    //console.log(obj)
    return obj
}

function hoursWorkedOnDate(record,date){
    let inAndOut = [] ;

    for(const element of record.timeInEvents){
        if(element.date === date){
            inAndOut.push(element.hour)
        }
    }
    for(const element of record.timeOutEvents){
        if(element.date === date){
            inAndOut.push(element.hour)
        }
    }

    while(inAndOut[0]<inAndOut[1]){
    return inAndOut.reduce((currValue, prevValue)=> (prevValue - currValue))/100;

    }
}

function wagesEarnedOnDate(obj, date){
    let hours = hoursWorkedOnDate(obj,date);
    let moneyOwed = hours * obj.payPerHour;
        return moneyOwed
}

function allWagesFor(obj){
    let allWages = [];
    //let timeOutList = [];
    for(const element of obj.timeInEvents){
        let dates = element.date;
        allWages.push(wagesEarnedOnDate(obj,dates))
    }
    
    return allWages.reduce((curr, prev)=> curr+prev)
}


function calculatePayroll(arrEmpl){
    let totalPayroll = [];
    arrEmpl.map(emp=>totalPayroll.push(allWagesFor(emp)))
    return totalPayroll.reduce((curr,prev)=> prev + curr)
}



