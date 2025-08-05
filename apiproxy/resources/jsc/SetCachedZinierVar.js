var gisResponse = context.getVariable('lookupGISRes');
var gisResponse1 = context.getVariable('targetResponse1.content');

function isJSON(gisResponse) {
    try {
        return JSON.parse(gisResponse) && !!gisResponse;
    } catch (e) {
        return false;
    }
}

if(isJSON(gisResponse)){
   var gis_res = JSON.parse(gisResponse);
   print(isJSON(gisResponse));
} else {
    var gis_res = JSON.parse(gisResponse1);
    print(isJSON(gisResponse1));
}

if (isJSON(gisResponse) || isJSON(gisResponse1)) {
    context.setVariable('isGisResponse', true);
    if (gis_res.borough) {
        print(gis_res.borough);
        context.setVariable('region', gis_res.borough);
    } else {
        context.setVariable('region', null);
    }
    if (gis_res.install_type) {
        print(gis_res.install_type);
        context.setVariable('installationType', gis_res.install_type);
    } else {
        context.setVariable('installationType', null);
    }
} else {
    context.setVariable('isGisResponse', false);
}