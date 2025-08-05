var gisResponse = context.getVariable('lookupGISRes');
var gisResponse1 = context.getVariable('targetResponse1.content');

function isJSON(gisResponse) {
    try {
        return JSON.parse(gisResponse) && !!gisResponse;
    } catch (e) {
        return false;
    }
}
print(isJSON(gisResponse));
print(isJSON(gisResponse1));

if (isJSON(gisResponse) || isJSON(gisResponse1)) {
    context.setVariable('isGisResponse', true);
} else {
    context.setVariable('isGisResponse', false);
}

if(isJSON(gisResponse)){
    context.setVariable('responseContent', gisResponse);
} else {
    context.setVariable('responseContent', gisResponse1);
}