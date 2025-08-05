var requestPayload = JSON.parse(context.getVariable('request.content'));
var serviceCharacteristics = requestPayload.serviceOrderItem.serviceCharacteristics;
var reqTenant = requestPayload.tenant;
var headerTenant = context.getVariable("request.header.Tenant");
var product="";
var errMsg="";
var listOfProducts = ["90_90", "160_160", "550_550", "1000_1000", "1800_1800", "2500_2500"];

for(i=0;i<serviceCharacteristics.length;i++){
    if(serviceCharacteristics[i].name == "LINE_PROFILE"){
        product = serviceCharacteristics[i].value;
        context.setVariable("product", product);
    }
}

try{
    if(headerTenant != "VF" || reqTenant != "VF"){
        throw("The specified tenant does not match with the list of currently active tenants");
    }
    
    if(!listOfProducts.includes(product)){
        throw("The selected product or speed is not available for this property");
    }
    
}
catch(err){
    errMsg = err;
}
context.setVariable("errMsg", errMsg);