var package_key = context.getVariable('package');

function getData(productSpecChar) {
    return {
        productSpecCharacteristic: productSpecChar
    };
}
//if (package_key === "110") {
    var respayload = JSON.parse(context.getVariable('propertyset.Hobs_Config.'+ package_key));
    var productSpecname = respayload.productSpec[0].name;
    print("productSpec-name:", productSpecname);
	context.setVariable('productSpecname', productSpecname);
    var productSpeclabel = respayload.productSpec[0].label;
    print("productSpec-label:", productSpeclabel);
	context.setVariable('productSpeclabel', productSpeclabel);
    var productSpecdescription = respayload.productSpec[0].description;
    print("productSpec-description:", productSpecdescription);
	context.setVariable('productSpecdescription', productSpecdescription);
    var productSpecdefaultState = respayload.productSpec[0].defaultState;
    print("productSpec-defaultState:", productSpecdefaultState);
	context.setVariable('productSpecdefaultState', productSpecdefaultState);
    var productSpecproductCategory = respayload.productSpec[0].productCategory;
    print("productSpec-productCategory:", productSpecproductCategory);
	context.setVariable('productSpecproductCategory', productSpecproductCategory);
    var productSpecproductType = respayload.productSpec[0].productType;
    print("productSpec-productType:", productSpecproductType);
	context.setVariable('productSpecproductType', productSpecproductType);
    var productSpecproductSubType = respayload.productSpec[0].productSubType;
    print("productSpec-productSubType:", productSpecproductSubType);
	context.setVariable('productSpecproductSubType', productSpecproductSubType);
    var productSpecproductGroup = respayload.productSpec[0].productGroup;
    print("productSpec-productGroup:", productSpecproductGroup);
	context.setVariable('productSpecproductGroup', productSpecproductGroup);
    var productSpecserviceType = respayload.serviceType;
    print("productSpec-serviceType:", productSpecserviceType);
	context.setVariable('productSpecserviceType', productSpecserviceType);
    var productSpecofferRank = respayload.offerRank;
    print("productSpec-offerRank:", productSpecofferRank);
	context.setVariable('productSpecofferRank', productSpecofferRank);
    var productSpecisPrimary = respayload.productSpec[0].isPrimary;
    print("productSpec-isPrimary:", productSpecisPrimary);
	context.setVariable('productSpecisPrimary', productSpecisPrimary);
    var productSpecrevenueIndicator = respayload.productSpec[0].revenueIndicator;
    print("productSpec-revenueIndicator:", productSpecrevenueIndicator);
	context.setVariable('productSpecrevenueIndicator', productSpecrevenueIndicator);
    var productSpecproductSpecID = respayload.productSpec[0].productSpecID;
    print("productSpec-productSpecID:", productSpecproductSpecID);
	context.setVariable('productSpecproductSpecID', productSpecproductSpecID);
    var productSpecproductOfferingId = respayload.productOfferingId;
    print("productSpec-productOfferingId:", productSpecproductOfferingId);
	context.setVariable('productSpecproductOfferingId', productSpecproductOfferingId);
    var productSpecproductSpecCharacteristic = respayload.productSpec[0].productSpecCharacteristic;
    print("productSpec-productSpecCharacteristic:", productSpecproductSpecCharacteristic);
	context.setVariable('productSpecproductSpecCharacteristic', JSON.stringify(productSpecproductSpecCharacteristic));


    for (var i = 0; i < respayload.productOffering.length; i++) {
        var productOffering = respayload.productOffering[i];

        if (productOffering.productOfferingId.endsWith('MBPS')) {
            var _MBPS_productOfferingId = productOffering.productOfferingId;
            print("MBPS_productOfferingId: ", _MBPS_productOfferingId);
			context.setVariable('_MBPS_productOfferingId',_MBPS_productOfferingId);
            var _MBPS_productGroup = productOffering.productGroup;
            print("MBPS_productGroup:", _MBPS_productGroup);
	        context.setVariable('_MBPS_productGroup',_MBPS_productGroup);
            var _MBPS_serviceType = productOffering.serviceType;
            print("MBPS_serviceType:", _MBPS_serviceType);
			context.setVariable('_MBPS_serviceType',_MBPS_serviceType);
            var _MBPS_offerRank = productOffering.offerRank;
            print("MBPS_offerRank:", _MBPS_offerRank);
			context.setVariable('_MBPS_offerRank',_MBPS_offerRank);
            var _MBPS_isPrimary = productOffering.isPrimary;
            print("MBPS_isPrimary:", _MBPS_isPrimary);
			context.setVariable('_MBPS_isPrimary',_MBPS_isPrimary);
            var _MBPS_revenueIndicator = productOffering.revenueIndicator;
            print("MBPS_revenueIndicator:", _MBPS_revenueIndicator);
			context.setVariable('_MBPS_revenueIndicator',_MBPS_revenueIndicator);


            for (var j = 0; j < productOffering.productSpec.length; j++) {
                var productSpec = productOffering.productSpec[j];
                var _MBPS_name = productSpec.name;
                print("MBPS_name:", _MBPS_name);
				context.setVariable('_MBPS_name', _MBPS_name);
                var _MBPS_label = productSpec.label;
                print("MBPS_label:", _MBPS_label);
				context.setVariable('_MBPS_label',_MBPS_label);
                var _MBPS_description = productSpec.description;
                print("MBPS_description:", _MBPS_description);
				context.setVariable('_MBPS_description',_MBPS_description);
                var _MBPS_defaultState = productSpec.defaultState;
                print("MBPS_defaultState:", _MBPS_defaultState);
				context.setVariable('_MBPS_defaultState',_MBPS_defaultState);
                var _MBPS_productCategory = productSpec.productCategory;
                print("MBPS_productCategory:", _MBPS_productCategory);
				context.setVariable('_MBPS_productCategory',_MBPS_productCategory);
                var _MBPS_productType = productSpec.productType;
                print("MBPS_productType:", _MBPS_productType);
				context.setVariable('_MBPS_productType',_MBPS_productType);
                if (productSpec.productSubType) {
                    var _MBPS_productSubType = productSpec.productSubType;
                    print("MBPS_productSubType:", _MBPS_productSubType);
                }
                var _MBPS_productSpecID = productSpec.productSpecID;
                print("MBPS_productSpecID:", _MBPS_productSpecID);
				context.setVariable('_MBPS_productSpecID',_MBPS_productSpecID);
                var _MBPS_productCharValue = [];
                for (var k = 0; k < productSpec.productSpecCharacteristic.length; k++) {
                    var productSpecChar = productSpec.productSpecCharacteristic[k];
                    productSpecChar.action = "I";
                    _MBPS_productCharValue.push(getData(productSpecChar));
                }
				context.setVariable('_MBPS_productCharValue',JSON.stringify(_MBPS_productCharValue));
        }
		


}
		if (productOffering.productOfferingId === "ONT") {
            var _ONT_productOfferingId = productOffering.productOfferingId;
            print("ONT_productOfferingId: ", _ONT_productOfferingId);
			context.setVariable('_ONT_productOfferingId',_ONT_productOfferingId);
            var _ONT_productGroup = productOffering.productGroup;
            print("ONT_productGroup:", _ONT_productGroup);
	        context.setVariable('_ONT_productGroup',_ONT_productGroup);
            var _ONT_serviceType = productOffering.serviceType;
            print("ONT_serviceType:", _ONT_serviceType);
			context.setVariable('_ONT_serviceType',_ONT_serviceType);
            var _ONT_offerRank = productOffering.offerRank;
            print("ONT_offerRank:", _ONT_offerRank);
			context.setVariable('_ONT_offerRank',_ONT_offerRank);
            var _ONT_isPrimary = productOffering.isPrimary;
            print("ONT_isPrimary:", _ONT_isPrimary);
			context.setVariable('_ONT_isPrimary',_ONT_isPrimary);
            var _ONT_revenueIndicator = productOffering.revenueIndicator;
            print("ONT_revenueIndicator:", _ONT_revenueIndicator);
			context.setVariable('_ONT_revenueIndicator',_ONT_revenueIndicator);


            for (var j = 0; j < productOffering.productSpec.length; j++) {
                var productSpec = productOffering.productSpec[j];
                var _ONT_name = productSpec.name;
                print("ONT_name:", _ONT_name);
				context.setVariable('_ONT_name', _ONT_name);
                var _ONT_label = productSpec.label;
                print("ONT_label:", _ONT_label);
				context.setVariable('_ONT_label',_ONT_label);
                var _ONT_description = productSpec.description;
                print("ONT_description:", _ONT_description);
				context.setVariable('_ONT_description',_ONT_description);
                var _ONT_defaultState = productSpec.defaultState;
                print("ONT_defaultState:", _ONT_defaultState);
				context.setVariable('_ONT_defaultState',_ONT_defaultState);
                var _ONT_productCategory = productSpec.productCategory;
                print("ONT_productCategory:", _ONT_productCategory);
				context.setVariable('_ONT_productCategory',_ONT_productCategory);
                var _ONT_productType = productSpec.productType;
                print("ONT_productType:", _ONT_productType);
				context.setVariable('_ONT_productType',_ONT_productType);
                if (productSpec.productSubType) {
                    var _ONT_productSubType = productSpec.productSubType;
                    print("ONT_productSubType:", _ONT_productSubType);
                }
                var _ONT_productSpecID = productSpec.productSpecID;
                print("ONT_productSpecID:", _ONT_productSpecID);
				context.setVariable('_ONT_productSpecID',_ONT_productSpecID);
                var _ONT_productCharValue = [];
                for (var k = 0; k < productSpec.productSpecCharacteristic.length; k++) {
                    var productSpecChar = productSpec.productSpecCharacteristic[k];
                    productSpecChar.action = "I";
                    _ONT_productCharValue.push(getData(productSpecChar));
                }
				context.setVariable('_ONT_productCharValue',JSON.stringify(_ONT_productCharValue));
        }
}
		if (productOffering.productOfferingId === "DataCoreWholesale") {
            var _DCW_productOfferingId = productOffering.productOfferingId;
            print("DCW_productOfferingId: ", _DCW_productOfferingId);
			context.setVariable('_DCW_productOfferingId',_DCW_productOfferingId);
            var _DCW_productGroup = productOffering.productGroup;
            print("DCW_productGroup:", _DCW_productGroup);
	        context.setVariable('_DCW_productGroup',_DCW_productGroup);
            var _DCW_serviceType = productOffering.serviceType;
            print("DCW_serviceType:", _DCW_serviceType);
			context.setVariable('_DCW_serviceType',_DCW_serviceType);
            var _DCW_offerRank = productOffering.offerRank;
            print("DCW_offerRank:", _DCW_offerRank);
			context.setVariable('_DCW_offerRank',_DCW_offerRank);
            var _DCW_isPrimary = productOffering.isPrimary;
            print("DCW_isPrimary:", _DCW_isPrimary);
			context.setVariable('_DCW_isPrimary',_DCW_isPrimary);
            var _DCW_revenueIndicator = productOffering.revenueIndicator;
            print("DCW_revenueIndicator:", _DCW_revenueIndicator);
			context.setVariable('_DCW_revenueIndicator',_DCW_revenueIndicator);


            for (var j = 0; j < productOffering.productSpec.length; j++) {
                var productSpec = productOffering.productSpec[j];
                var _DCW_name = productSpec.name;
                print("DCW_name:", _DCW_name);
				context.setVariable('_DCW_name',_DCW_name);
                var _DCW_label = productSpec.label;
                print("DCW_label:", _DCW_label);
				context.setVariable('_DCW_label',_DCW_label);
                var _DCW_description = productSpec.description;
                print("DCW_description:", _DCW_description);
				context.setVariable('_DCW_description',_DCW_description);
                var _DCW_defaultState = productSpec.defaultState;
                print("DCW_defaultState:", _DCW_defaultState);
				context.setVariable('_DCW_defaultState',_DCW_defaultState);
                var _DCW_productCategory = productSpec.productCategory;
                print("DCW_productCategory:", _DCW_productCategory);
				context.setVariable('_DCW_productCategory',_DCW_productCategory);
                var _DCW_productType = productSpec.productType;
                print("DCW_productType:", _DCW_productType);
				context.setVariable('_DCW_productType',_DCW_productType);
                if (productSpec.productSubType) {
                    var _DCW_productSubType = productSpec.productSubType;
                    print("DCW_productSubType:", _DCW_productSubType);
                }
                var _DCW_productSpecID = productSpec.productSpecID;
                print("DCW_productSpecID:", _DCW_productSpecID);
				context.setVariable('_DCW_productSpecID',_DCW_productSpecID);
                var _DCW_productCharValue = [];
                for (var k = 0; k < productSpec.productSpecCharacteristic.length; k++) {
                    var productSpecChar = productSpec.productSpecCharacteristic[k];
                    productSpecChar.action = "I";
                    _DCW_productCharValue.push(getData(productSpecChar));
                }
                
				context.setVariable('_DCW_productCharValue',JSON.stringify(_DCW_productCharValue));
        }
}
}
//}