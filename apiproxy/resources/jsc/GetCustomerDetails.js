var gis_address = context.getVariable('gis_address');
var primary_contact = context.getVariable('primary_name');

//To get customer name as first and given name
var fullName = primary_contact.split(' '),
    familyName = fullName[0],
    givenName = fullName[fullName.length - 1];

print(familyName);
print(givenName);
context.setVariable('familyName', familyName);
context.setVariable('givenName', givenName);

//To get gis address values for Hobs, addressLin1,city
var splitAddress = gis_address.split(",");
if (splitAddress.length === 3) {
    firstLine = splitAddress[0];
}
if (splitAddress.length === 4) {
    firstLine = splitAddress[0].trim()+','+splitAddress[1].trim();
}

if (splitAddress.length === 5) {
    firstLine = splitAddress[0].trim()+','+splitAddress[1].trim()+','+splitAddress[2].trim();
}

if (splitAddress.length === 6) {
    firstLine = splitAddress[0].trim()+','+splitAddress[1].trim()+','+splitAddress[2].trim()+','+splitAddress[3].trim();
}

print(firstLine);
context.setVariable('addressLine1', firstLine);
var splitAddress = gis_address.split(",");
if (splitAddress.length === 3) {
    secondlastline = splitAddress[1];
}
if (splitAddress.length === 4) {
    secondlastline = splitAddress[2];
}
if (splitAddress.length === 5) {
    secondlastline = splitAddress[3];
}
if (splitAddress.length === 6) {
    secondlastline = splitAddress[4];

}
print(secondlastline);
context.setVariable('city', secondlastline);

//To get remote Id value for Hobs Order SC callout
var serviceOrderItem=JSON.parse(context.getVariable('serviceOrderItem'));
if (serviceOrderItem) {
    if (serviceOrderItem.serviceCharacteristics) {
        if (serviceOrderItem.serviceCharacteristics.length) {
            for (i = 0; i < serviceOrderItem.serviceCharacteristics.length; i++) {
                if (serviceOrderItem.serviceCharacteristics[i].name == "REMOTE_ID") {
                    var remoteValue = serviceOrderItem.serviceCharacteristics[i].value;
                    context.setVariable('remoteValue', remoteValue);
                    print(remoteValue);
                }
            }
        }
    }
}