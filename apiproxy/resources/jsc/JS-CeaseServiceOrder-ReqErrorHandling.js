var requestedCompletionDate = context.getVariable("req.requestedCompletionDate");
var interactionDate = context.getVariable("interactionDate");
var errMsg="";

requestedCompletionDate = new Date(requestedCompletionDate);
interactionDate = new Date(interactionDate);

var headerTenant = context.getVariable("req.headerTenant");
var reqTenant = context.getVariable("req.tenant");

try{
    if(headerTenant != "VF" || reqTenant != "VF"){
        throw("The specified tenant does not match with the list of currently active tenants");
    }
    
    if(interactionDate > requestedCompletionDate){
        throw("The 'requestedCompletionDate' does not comply with current business rules. Please select a valid date within the allowed timeframe.");
    }
}
catch(err){
    errMsg = err;
}
context.setVariable("errMsg", errMsg);