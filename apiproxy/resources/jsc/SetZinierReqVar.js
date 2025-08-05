var startDate = context.getVariable('request.queryparam.appointmentFromDate');
var EndDate = context.getVariable('endDate');
if (!startDate) {
    startDate = moment().format('YYYY-MM-DD');
    context.setVariable('request.queryparam.appointmentFromDate', startDate);
    EndDate = moment(startDate).add(90, 'days').format('YYYY-MM-DD');
    context.setVariable('endDate', EndDate);
} else {
    EndDate = moment(startDate).add(90, 'days').format('YYYY-MM-DD');
    context.setVariable('endDate', EndDate);

}