define([
    "dojo/_base/declare"
], function(
    declare
) {
    var clazz = {
        addCountryInfo: function(country) {
            $.getJSON('./data/data.json', function(data) {
                $('.drawer').toggleClass('is-active');
                $('.drawer-nav').empty();
                for (var k in data) {
                    if (country === data[k]["name"]) {
                        $('.drawer-nav').append('<p id=countryName>' + country + '</p>');
                        $('.drawer-nav').append('<img id="countryFlag" src="./imgs/' + country.replace(" ", "") + '.png" align="middle">');
                        $('.drawer-nav').append('<h4>FIFA ranking: ' + data[k]["data"]["ranking"] + '</h4>');
                        $('.drawer-nav').append("<h4>Group:</h4>");
                        $('.drawer-nav').append("<h6>" + data[k]["data"]["group"] + "</h6>");
                        $('.drawer-nav').append('<img id="groupImg" src="' + data[k]["data"]["groupImg"] + '">');
                        $('.drawer-nav').append("<h4>Fixtures:</h4>");
                        $('.drawer-nav').append("<h6>" + data[k]["data"]["fixtures"]["1"] + "</h6>");
                        $('.drawer-nav').append("<h6>" + data[k]["data"]["fixtures"]["2"] + "</h6>");
                        $('.drawer-nav').append("<h6>" + data[k]["data"]["fixtures"]["3"] + "</h6>");
                        $('.drawer-nav').append("<h4>History:</h4>");
                        $('.drawer-nav').append("<h6>" + data[k]["data"]["history"] + "</h6>");
                        $('.drawer-nav').append('<p id="credits"><a id="credits" href="https://en.wikipedia.org/wiki/' + country + '_at_the_FIFA_World_Cup" target="_blank">More info</a></p>')
                    }
                }
            });
        }
    };
    return clazz;
});