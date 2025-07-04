var reason=context.getVariable('req.reason');
var subreason=context.getVariable('req.subreason');
var hobsreason = [reason, subreason].join("");
var listOfValues=context.getVariable('propertyset.Hobs_ContactUs.'+hobsreason);
context.setVariable('req.categoryId',listOfValues.split(",")[0]);
context.setVariable('req.typeId',listOfValues.split(",")[1]);
context.setVariable('req.subTypeId',listOfValues.split(",")[2]);

var payload = {
  categoryId: context.getVariable('req.categoryId'),
  typeId: context.getVariable('req.typeId'),
  subTypeId: context.getVariable('req.subTypeId')
};

var subscriberId = context.getVariable('req.subscriberId');
if (subscriberId !== null && subscriberId !== '') {
  payload.subscriberId = subscriberId;
}

context.setVariable('payload', JSON.stringify(payload).slice(1, -1));