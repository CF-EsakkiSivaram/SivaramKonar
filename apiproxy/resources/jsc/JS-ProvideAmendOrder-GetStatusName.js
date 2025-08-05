var getWorkOrderResponse = JSON.parse(context.getVariable("targetResponse2.content"));
var data = getWorkOrderResponse.data;
var scheduleType="";
var statusName="";
var workOrderTaskId="";
var workOrderTaskIdStatus="";
var installationType="";
var accountNumber="";
var customerName="";  
var customerId="";
var siteAddress="";
var siteCity="";
var sitePostalCode="";
var siteUPRN="";
var siteborough="";
var siteContactPersonPhone="";
var regionId="";
var systemOfOrigen="";
var oltIp="";
var oltDeviceName="";
var emailId="";

//To check GetWorkOrder data length
if(!data.length){
    workOrderTaskIdStatus = "Empty";
}
//To retrieve certain fields based om statusName and scheduleType
else{
    for(i=0;i<data.length;i++){
        if((data[i].statusName == "Open" || data[i].statusName == "Scheduled") && data[i].scheduleType != "service"){
            statusName = data[i].statusName;
            scheduleType = data[i].scheduleType;
            workOrderTaskId = data[i].workOrderTaskId;
            break;
        }
        else{
            statusName = data[i].statusName;
            scheduleType = data[i].scheduleType;
            installationType = data[i].installationType;
            accountNumber = data[i].accountNumber;
            customerName = data[i].customerName;
            customerId = data[i].customerId;
            siteAddress = data[i].address;
            siteCity = data[i].city;
            sitePostalCode = data[i].postcode;
            siteUPRN = data[i].UPRN;
            siteborough = data[i].borough;
            siteContactPersonPhone = data[i].contactPhone;
            regionId = data[i].regionId;
            systemOfOrigen = data[i].systemOfOrigen;
            oltIp = data[i].oltIP;
            oltDeviceName = data[i].deviceName;
            emailId = data[i].email; 
        }
    }
}

context.setVariable("statusName", statusName);
context.setVariable("scheduleType", scheduleType);
context.setVariable("workOrderTaskId", workOrderTaskId);
context.setVariable("workOrderTaskIdStatus", workOrderTaskIdStatus);
context.setVariable("installationType", installationType);
context.setVariable("accountNumber", accountNumber);
context.setVariable("customerName", customerName);
context.setVariable("customerId", customerId);
context.setVariable("siteAddress", siteAddress);
context.setVariable("siteCity", siteCity);
context.setVariable("sitePostalCode", sitePostalCode);
context.setVariable("siteUPRN", siteUPRN);
context.setVariable("siteborough", siteborough);
context.setVariable("siteContactPersonPhone", siteContactPersonPhone);
context.setVariable("regionId", regionId);
context.setVariable("systemOfOrigen", systemOfOrigen);
context.setVariable("oltIp", oltIp);
context.setVariable("oltDeviceName", oltDeviceName);
context.setVariable("emailId", emailId);