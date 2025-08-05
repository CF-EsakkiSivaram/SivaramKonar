var response = JSON.parse(context.getVariable("targetResponse1.content"));
var attribute = response.GetSubscriberDetailsResponseMessage.subscriber.SubscriberServiceAttributes.Attribute || [];
var ONTValue = "NOT_FOUND";
for (var i = 0; i < attribute.length; i++) {
  if (attribute[i].attributeName === "ONT_Serial_No") {
    ONTValue = attribute[i].attributeValue;
    break;
  }
}
context.setVariable("ontSerialValue", ONTValue);
