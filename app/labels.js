define([
    "dojo/_base/declare"
], function(
    declare
) {
    var clazz = {
        labelData: function() {
            var etichete = 
                [{
                    labelExpressionInfo: {
                        value: "{NAME}"
                    },
                    symbol: {
                        type: "label-3d", // autocasts as new LabelSymbol3D()
                        symbolLayers: [{
                            type: "text", // autocasts as new TextSymbol3DLayer()
                            material: {
                                color: "white"
                            },
                            halo: {
                                size: 1,
                                color: [50, 50, 50]
                            },
                            size: 10
                        }]
                    }
                }];
            return etichete;
        }
    };
    return clazz;
});