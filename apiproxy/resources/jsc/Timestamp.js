var currDate = new Date(context.getVariable('system.timestamp'));
var dateTimeIsoString = currDate.toISOString();
// split by dot
var currDateTime = dateTimeIsoString.slice(0, 23);
var timeZoneOffset = currDate.getTimezoneOffset();
var positiveOffset = Math.abs(timeZoneOffset);
var timeOffsetInHours = -(timeZoneOffset/60);
var minZone = (positiveOffset - Math.floor(timeOffsetInHours) * 60);
var symbolOffset = timeZoneOffset > 0 ? '-' : '+' ;
var hourOffset = Math.floor(timeOffsetInHours) < 10 ? 0 : '';
var minOffset = minZone < 10 ? 0 : '';
var tzd = symbolOffset + hourOffset + Math.floor(timeOffsetInHours) + ":" + minOffset + minZone;
var dateTZDformat = currDateTime + tzd;
print(dateTZDformat);
context.setVariable('interactionDate',dateTZDformat);