define([
    "dojo/_base/declare"
], function(
    declare
) {
    var clazz = {
        simbolizare: function() {

            function getUniqueFlag(name) {
                return {
                    type: "point-3d", // autocasts as new PointSymbol3D()
                    symbolLayers: [{
                        type: "icon", // autocasts as new IconSymbol3DLayer()
                        // add properties for the IconSymbol3DLayer here
                        size: 30,
                        resource: {
                            primitive: "circle",
                            href: name
                        },
                        // resource: { primitive: "circle" },
                        // material: { color: "blue" },
                        outline: {
                            color: "white",
                            size: 0.5
                        }
                    }],
                    verticalOffset: {
                        screenLength: 40,
                        maxWorldLength: 500000,
                        minWorldLength: 50000
                    },
                    callout: {
                        type: "line", // autocasts as new LineCallout3D()
                        color: "white",
                        size: 2,
                        border: {
                            color: [50, 50, 50]
                        }
                    }
                }
            }

            // var pointsRenderer = {
            //     type: "simple",
            //     symbol: symbol
            // };

            var pointsRenderer = {
                type: "unique-value",
                field: "NAME",
                uniqueValueInfos: [{
                    value: "Argentina",
                    symbol: getUniqueFlag("./imgs/Argentina.png")
                }, {
                    value: "Australia",
                    symbol: getUniqueFlag("./imgs/Australia.png")
                }, {
                    value: "Belgium",
                    symbol: getUniqueFlag("./imgs/Belgium.png")
                }, {
                    value: "Brazil",
                    symbol: getUniqueFlag("./imgs/Brazil.png")
                }, {
                    value: "Colombia",
                    symbol: getUniqueFlag("./imgs/Colombia.png")
                }, {
                    value: "Costa Rica",
                    symbol: getUniqueFlag("./imgs/CostaRica.png")
                }, {
                    value: "Croatia",
                    symbol: getUniqueFlag("./imgs/Croatia.png")
                }, {
                    value: "Denmark",
                    symbol: getUniqueFlag("./imgs/Denmark.png")
                }, {
                    value: "Egypt",
                    symbol: getUniqueFlag("./imgs/Egypt.png")
                }, {
                    value: "England",
                    symbol: getUniqueFlag("./imgs/England.png")
                }, {
                    value: "France",
                    symbol: getUniqueFlag("./imgs/France.png")
                }, {
                    value: "Germany",
                    symbol: getUniqueFlag("./imgs/Germany.png")
                }, {
                    value: "Iceland",
                    symbol: getUniqueFlag("./imgs/Iceland.png")
                }, {
                    value: "Iran",
                    symbol: getUniqueFlag("./imgs/Iran.png")
                }, {
                    value: "Japan",
                    symbol: getUniqueFlag("./imgs/Japan.png")
                }, {
                    value: "Mexico",
                    symbol: getUniqueFlag("./imgs/Mexico.png")
                }, {
                    value: "Morocco",
                    symbol: getUniqueFlag("./imgs/Morocco.png")
                }, {
                    value: "Nigeria",
                    symbol: getUniqueFlag("./imgs/Nigeria.png")
                }, {
                    value: "Panama",
                    symbol: getUniqueFlag("./imgs/Panama.png")
                }, {
                    value: "Peru",
                    symbol: getUniqueFlag("./imgs/Peru.png")
                }, {
                    value: "Poland",
                    symbol: getUniqueFlag("./imgs/Poland.png")
                }, {
                    value: "Portugal",
                    symbol: getUniqueFlag("./imgs/Portugal.png")
                }, {
                    value: "Russia",
                    symbol: getUniqueFlag("./imgs/Russia.png")
                }, {
                    value: "Saudi Arabia",
                    symbol: getUniqueFlag("./imgs/SaudiArabia.png")
                }, {
                    value: "Senegal",
                    symbol: getUniqueFlag("./imgs/Senegal.png")
                }, {
                    value: "Serbia",
                    symbol: getUniqueFlag("./imgs/Serbia.png")
                }, {
                    value: "South Korea",
                    symbol: getUniqueFlag("./imgs/SouthKorea.png")
                }, {
                    value: "Spain",
                    symbol: getUniqueFlag("./imgs/Spain.png")
                }, {
                    value: "Sweden",
                    symbol: getUniqueFlag("./imgs/Sweden.png")
                }, {
                    value: "Switzerland",
                    symbol: getUniqueFlag("./imgs/Switzerland.png")
                }, {
                    value: "Tunisia",
                    symbol: getUniqueFlag("./imgs/Tunisia.png")
                }, {
                    value: "Uruguay",
                    symbol: getUniqueFlag("./imgs/Uruguay.png")
                }]
            }
            return pointsRenderer;
        }
    };
    return clazz;
});