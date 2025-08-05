var respayload = JSON.parse(context.getVariable('response.content'));

respayload.data = respayload.data.map(function(item) {
    var filteredAppointments = item.appointmentWindowData.filter(function(window) {
        return window.available === true;
    });
    return Object.assign({}, item, {
        appointmentWindowData: filteredAppointments
    });
});

var availableTimeslots = [];

function getData(startDateTime, endDateTime) {
    return {
        timeslotStartDateTime: startDateTime,
        timeslotEndDateTime: endDateTime,
        standard: true
    };
}

if (respayload.data && respayload.data.length !== 0) {
    for (var k = 0; k < respayload.data.length; k++) {
        if (respayload.data[k].appointmentWindowData && respayload.data[k].appointmentWindowData.length !== 0) {
            for (var i = 0; i < respayload.data[k].appointmentWindowData.length; i++) {
                var startDateTime, endDateTime;

                if (respayload.data[k].appointmentWindowData[i].startDateTime) {
                    startDateTime = respayload.data[k].appointmentWindowData[i].startDateTime;
                }
                
                if (respayload.data[k].appointmentWindowData[i].endDateTime) {
                    endDateTime = respayload.data[k].appointmentWindowData[i].endDateTime;
                }

                if (startDateTime && endDateTime) {
                    availableTimeslots.push(getData(startDateTime, endDateTime));
                }
            }
        }
    }
}

availableTimeslots = availableTimeslots.filter((item) => {
    const date = new Date(item.timeslotStartDateTime);
    const day = date.getUTCDay();
    return day !== 0 && day !== 6;
});

context.setVariable('response.content', JSON.stringify(availableTimeslots));
print(JSON.stringify(availableTimeslots, null, 2));

// for Zinier Error Message check
function isEmpty(data) {
    return !!data;
}

if (respayload.data && respayload.data.length && respayload.data[0].errorMessage) {
    print(isEmpty(respayload.data[0].errorMessage));
    context.setVariable('ZinierErrorMsg', isEmpty(respayload.data[0].errorMessage));
    context.setVariable('zinierErrMsg', respayload.data[0].errorMessage);
}
