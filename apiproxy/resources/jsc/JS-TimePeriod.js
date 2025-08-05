var request = JSON.parse(context.getVariable('request.content'));
var timeslotStartDateTime = request.timeslot.timeslotStartDateTime;

var startDate = new Date(timeslotStartDateTime);

// Extract the start hour
var startHour = startDate.getUTCHours();

// Determine if the time slot is AM or PM
var period;
if (startHour === 7 || startHour === 8 || startHour === 9) {
  period = 'am';
} else if (startHour === 12 || startHour === 13 || startHour === 14) {
  period = 'pm';
} else {
  period = 'invalidtimeslot';
}

context.setVariable("period", period);


