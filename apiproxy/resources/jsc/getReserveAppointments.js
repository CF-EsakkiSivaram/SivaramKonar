var respayload = JSON.parse(context.getVariable('response.content'));

var availableTimeslots = {};


if (respayload.data || respayload.data.length !== 0) {
    for (var k = 0; k < respayload.data.length; k++) {
        if (respayload.data[k].data || respayload.data[k].data.length !== 0) {
            for (var i = 0; i < respayload.data[k].data.length; i++) {
                if (respayload.data[k].data[i].appointmentWindowData || respayload.data[k].data[i].appointmentWindowData.length !== 0) {
                    for (var j = 0; j < respayload.data[k].data[i].appointmentWindowData.length; j++) {


                        if (respayload.data[k].data[i].appointmentWindowData[j].startDateTime) {
                            var startDateTime = respayload.data[k].data[i].appointmentWindowData[j].startDateTime;

                        }

                        if (respayload.data[k].data[i].appointmentWindowData[j].endDateTime) {
                            var endDateTime = respayload.data[k].data[i].appointmentWindowData[j].endDateTime;
                        }
                        availableTimeslots = {
                            timeslotStartDateTime: startDateTime,
                            timeslotEndDateTime: endDateTime,
                            //classification: 'Morning',
                            standard: true
                        };
                        context.setVariable('availableTimeslots', JSON.stringify(availableTimeslots));
                        print(availableTimeslots);
                    }
                }
                if (respayload.data[k].data[i].validity) {
                    var validity = respayload.data[k].data[i].validity;
                    context.setVariable('validity', validity);
                }

                if (respayload.data[k].data[i].reservationId) {
                    var reservationId = respayload.data[k].data[i].reservationId;
                    context.setVariable('reservationId', reservationId);
                }
            }
        }
    }

}
//for Zinier Error Message check
function isEmpty(data) {
    if (data) {
        return true;
        
    }
    return false;
}

if(respayload.data && respayload.data.length  && respayload.data[0].data && respayload.data[0].data.length && respayload.data[0].data[0].errorMessage){
    print(isEmpty(respayload.data[0].data[0].errorMessage));
    context.setVariable('ZinierErrorMsg', isEmpty(respayload.data[0].data[0].errorMessage));
    context.setVariable('zinierErrMsg', respayload.data[0].data[0].errorMessage);
} 