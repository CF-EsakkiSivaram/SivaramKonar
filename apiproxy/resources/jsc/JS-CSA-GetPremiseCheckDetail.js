var premiseResponse = JSON.parse(context.getVariable('targetResponse2.content'));
var response = JSON.parse(context.getVariable('response.content'));
var manufacturer = context.getVariable('gis.manufacturer');
var orderDetails = premiseResponse.orderDetails;
var productAttributes = premiseResponse.productAttributes;
var serialNumber = "";


if(productAttributes && productAttributes.length > 0){
  for(var i=0;i<productAttributes.length;i++){
    if(productAttributes[i].attributeName === "ONT_Serial_No"){
      serialNumber = productAttributes[i].attributeValue;
      break;
    }
  }  
  siteInformation = {
    "existingLines": [
      {
        "ont": {
          "serialNumber": serialNumber,
           "manufacturer": manufacturer,
           "ports": [
              {
                "portNumber": 1,
                "description": "Main Ethernet Port",
                "status": "ACTIVE"
              }
            ]
          }
        }
      ]
  };
  response["siteInformation"] = siteInformation;

  if(orderDetails && orderDetails.length > 0){
      var orderDueDate = orderDetails[0].orderDueDate;
      var newCharacteristics = {
          "name": "FUTURE_CEASE_DATE",
          "value": orderDueDate
      };
      response.serviceCharacteristics.push(newCharacteristics);
    }
}

context.setVariable("response.content", JSON.stringify(response));
