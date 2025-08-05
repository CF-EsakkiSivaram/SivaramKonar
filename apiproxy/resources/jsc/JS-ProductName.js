var requestPayload = JSON.parse(context.getVariable('request.content'));
var serviceCharacteristics = requestPayload.serviceCharacteristics.reduce((acc, char) => {
    acc[char.name] = char.value;
    return acc;
}, {});

// Set context variables based on service characteristics
context.setVariable("product", serviceCharacteristics.LINE_PROFILE);
context.setVariable("CTAG", serviceCharacteristics.CUSTOMER_VLAN_ID || null);
context.setVariable("STAG", serviceCharacteristics.SERVICE_VLAN_ID || null);
context.setVariable("ENNI_ID", serviceCharacteristics.ENNI_ID || null);
context.setVariable("remote_id", serviceCharacteristics.REMOTE_ID || null);
context.setVariable("ONT_Serial_No", serviceCharacteristics.ONT_SERIAL_NUMBER || null);

// Fetch product name and handle null case=
var productName = context.getVariable('propertyset.Wholesale-API_Config.' + serviceCharacteristics.LINE_PROFILE);
context.setVariable("productName", productName || "");
