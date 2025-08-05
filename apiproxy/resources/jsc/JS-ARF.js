var networkParameters = {
  ctag: context.getVariable("CTAG"),
  stag: context.getVariable("STAG"),
  enniId: context.getVariable("ENNI_ID"),
  remoteId: context.getVariable("remote_id"),
  ontSerialNo: context.getVariable("ONT_Serial_No"),
};

Object.keys(networkParameters).forEach(key => {
  if (networkParameters[key] === null) {
    networkParameters[key] = ""; 
  }
});

context.setVariable("networkParameters", JSON.stringify(networkParameters));